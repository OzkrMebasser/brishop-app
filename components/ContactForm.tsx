"use client";
import { useState, useEffect, useRef } from "react";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiSearch,
  FiX,
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
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Agrega el producto que viene del componente padre (si no está ya en la lista)
  useEffect(() => {
    if (selectedProductId) {
      const product = getProductById(selectedProductId);
      if (product) {
        setSelectedProducts((prev) =>
          prev.find((p) => p.id === product.id) ? prev : [...prev, product]
        );
      }
    }
  }, [selectedProductId]);

  // Actualiza el mensaje automático cuando cambia la lista de productos
  useEffect(() => {
    if (selectedProducts.length > 0) {
      const lista = selectedProducts.map((p) => `"${p.nombre}"`).join(", ");
      setFormData((prev) => ({
        ...prev,
        mensaje: `Hola, estoy interesado/a en los productos: ${lista}. Me gustaría obtener más información.`,
      }));
    } else {
      setFormData((prev) => ({ ...prev, mensaje: "" }));
    }
  }, [selectedProducts]);

  // Cierra el dropdown al hacer click fuera
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (!value.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }
    const words = value.toLowerCase().trim().split(/\s+/);
    const filtered = products.filter(
      (p) =>
        words.every((word) => p.nombre.toLowerCase().includes(word)) &&
        !selectedProducts.find((sel) => sel.id === p.id)
    );
    setSearchResults(filtered);
    setShowDropdown(true);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProducts((prev) =>
      prev.find((p) => p.id === product.id) ? prev : [...prev, product]
    );
    setSearchQuery("");
    setShowDropdown(false);
  };

  const handleClearProduct = (id: string) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id));
  };

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const productName =
        selectedProducts.length > 0
          ? selectedProducts.map((p) => p.nombre).join(", ")
          : "No seleccionado";
      const whatsappMessage = `https://wa.me/5216121376977?text=Email: ${formData.email}%0ANombre: ${formData.nombre}%0AProducto: ${productName}%0AMensaje: ${formData.mensaje}`;
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ nombre: "", email: "", mensaje: "" });
        setSelectedProducts([]);
        window.location.href = whatsappMessage;
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100 w-full max-w-xl mx-auto">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiSend className="text-green-600" size={24} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            ¡Mensaje enviado!
          </h3>
          <p className="text-gray-600 mb-4">
            Gracias por contactarnos. Nos pondremos en contacto contigo lo
            antes posible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 w-full">

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
                className={`form-input pl-10 w-full ${
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
                className={`form-input pl-10 w-full ${
                  errors.email ? "border-red-300 focus:ring-red-300" : ""
                }`}
                placeholder="tu@email.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Productos de interés */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Productos de interés{" "}
              <span className="font-normal text-gray-400">(opcional)</span>
            </label>

            {/* Tarjetas apiladas — misma estructura que el original */}
            {selectedProducts.length > 0 && (
              <div className="flex flex-col gap-2 mb-2">
                {selectedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-3 items-center p-3 bg-gray-50 border border-gray-200 rounded-lg"
                  >
                    <img
                      src={product.imagen}
                      alt={product.nombre}
                      className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">
                        {product.nombre}
                      </p>
                      <p className="text-sm text-gray-500">
                        Desde ${product.precioDesde} quincenal
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleClearProduct(product.id)}
                      className="p-1 rounded-full hover:bg-gray-200 transition-colors flex-shrink-0"
                      aria-label={`Quitar ${product.nombre}`}
                    >
                      <FiX className="text-gray-500" size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Buscador siempre visible */}
            <div className="relative" ref={searchRef}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="form-input pl-10 w-full"
                placeholder={
                  selectedProducts.length > 0
                    ? "Agregar otro producto..."
                    : "Busca un producto..."
                }
              />
              {showDropdown && (
                <div className="absolute top-full mt-1 w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-50 max-h-60 overflow-y-auto">
                  {searchResults.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center py-4">
                      Sin resultados para &quot;{searchQuery}&quot;
                    </p>
                  ) : (
                    searchResults.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        data-search-result
                        onClick={() => handleSelectProduct(product)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors text-left"
                      >
                        <img
                          src={product.imagen}
                          alt={product.nombre}
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-900 truncate">
                            {product.nombre}
                          </p>
                          <p className="text-xs text-gray-400 capitalize">
                            {product.categoria}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 flex-shrink-0">
                          Desde ${product.precioDesde}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

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
                className={`form-input pl-10 w-full resize-none ${
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
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Enviando...
              </>
            ) : (
              "Enviar mensaje"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;