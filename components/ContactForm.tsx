"use client";
import { useState, useEffect } from "react";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiPackage,
  FiSend,
} from "react-icons/fi";
import { getProductById, products, Product } from "@/data/products";

export type ContactFormProps = {
  selectedProductId: string | undefined;
  products: Product[];
};

const ContactForm = ({ selectedProductId }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    producto: selectedProductId || "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Actualiza el campo 'producto' si cambia el selectedProductId
  useEffect(() => {
    if (selectedProductId) {
      setFormData((prev) => ({
        ...prev,
        producto: selectedProductId,
      }));
    }
  }, [selectedProductId]);

  // Si se selecciona un producto, actualiza automáticamente el mensaje
  useEffect(() => {
    if (formData.producto) {
      const product = getProductById(formData.producto);
      if (product) {
        setFormData((prev) => ({
          ...prev,
          mensaje: `Hola, estoy interesado/a en el producto "${product.nombre}". Me gustaría obtener más información.`,
        }));
      }
    }
  }, [formData.producto]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.email.trim())
      newErrors.email = "El correo electrónico es requerido";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Por favor ingresa un correo válido";
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      const product = getProductById(formData.producto);
      const productName = product ? product.nombre : "No seleccionado";

      const whatsappMessage = `https://wa.me/17785873661?text=
Nombre: ${formData.nombre}
Email: ${formData.email}
Producto: ${productName}
Mensaje: ${formData.mensaje}`;

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
          producto: "",
        });

        window.location.href = whatsappMessage;

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  // Obtiene el producto seleccionado para la vista previa
  const selectedProduct = formData.producto
    ? getProductById(formData.producto)
    : null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100 w-full max-w-2xl mx-auto">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiSend className="text-green-600" size={24} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            ¡Mensaje enviado!
          </h3>
          <p className="text-gray-600 mb-4">
            Gracias por contactarnos. Nos pondremos en contacto contigo lo antes
            posible.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="md:grid md:grid-cols-3 md:gap-8 max-w-2xl mx-auto"
        >
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`form-input pl-10 ${
                      errors.nombre ? "border-red-300 focus:ring-red-300" : ""
                    }`}
                    placeholder="Tu nombre"
                  />
                </div>
                {errors.nombre && (
                  <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input pl-10 ${
                      errors.email ? "border-red-300 focus:ring-red-300" : ""
                    }`}
                    placeholder="tu@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Producto */}
              <div>
                <label
                  htmlFor="producto"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Producto de interés (opcional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPackage className="text-gray-400" />
                  </div>
                  <select
                    id="producto"
                    name="producto"
                    value={formData.producto}
                    onChange={handleChange}
                    className="form-input pl-10 appearance-none"
                    style={{ minHeight: "42px" }}
                  >
                    <option value="">Selecciona un producto</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.nombre} – ${product.precio}.00 MXN
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Vista previa del producto seleccionado */}
              {selectedProduct && (
                <div className="md:col-span-1 mt-6 md:mt-0 border-t pt-6 border-gray-200 md:border-l md:border-t-0 md:pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Producto seleccionado
                  </h4>
                  <div className="flex gap-3 items-center">
                    <img
                      src={selectedProduct.imagen}
                      alt={selectedProduct.nombre}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {selectedProduct.nombre}
                      </p>
                      <p className="text-sm text-gray-600">
                        ${selectedProduct.precio}.00 MXN
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FiMessageSquare className="text-gray-400" />
                  </div>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={`form-input pl-10 resize-none ${
                      errors.mensaje ? "border-red-300 focus:ring-red-300" : ""
                    }`}
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                {errors.mensaje && (
                  <p className="mt-1 text-sm text-red-600">{errors.mensaje}</p>
                )}
              </div>

              {/* Botón enviar */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brishop-600 hover:bg-brishop-700 text-white py-3 px-6 rounded-md transition-all duration-300 flex justify-center items-center font-medium shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
