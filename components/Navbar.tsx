"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { categories } from "@/data/categories";
import { products, Product } from "@/data/products";

const LogoBrishop =
  "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/brishop-ecommerce%2FLOGO-brishop-horizontal.png?alt=media&token=851e2ab6-4510-4415-a2fc-07c5410999c0";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      // No cerrar si el click fue en un botón de resultado
      if ((target as Element).closest("[data-search-result]")) return;
      if (searchRef.current && !searchRef.current.contains(target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    const words = value.toLowerCase().trim().split(/\s+/);
    const filtered = products.filter((p) =>
      words.every((word) => p.nombre.toLowerCase().includes(word)),
    );
    setResults(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (productId: string) => {
    setQuery("");
    setShowDropdown(false);
    router.push(`/producto/${productId}`);
    setTimeout(() => setIsOpen(false), 100);
  };
  const navLinkClass = (href: string) =>
    `nav-link ${pathname === href ? "underline underline-offset-4 text-brishop-500" : ""}`;

  const navLinkMobileClass = (href: string) =>
    `nav-link text-xl py-2 ${pathname === href ? "underline underline-offset-4 text-brishop-600" : ""}`;

  return (
    <header className="fixed w-full z-50 transition-all duration-300 py-2 bg-white shadow-md">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-[4rem] w-36">
            <Image
              src={LogoBrishop}
              alt="BRISHOP Logo"
              width={100}
              height={100}
              className="object-contain h-full w-full"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={navLinkClass("/")}>
            Inicio
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.id}`}
              className={navLinkClass(`/categoria/${category.id}`)}
            >
              {category.nombre}
            </Link>
          ))}
          <Link href="/contacto" className={navLinkClass("/contacto")}>
            Contacto
          </Link>
          <Link
            href="/favoritos"
            title="Favoritos"
            className="bg-white p-2 rounded-full border border-brishop-200 hover:border-brishop-600 transition-colors"
          >
            <FaHeart className="h-5 w-5 text-brishop-500" />
          </Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center space-x-4" ref={searchRef}>
          <div className="relative">
            <button
              className="p-2 hover:text-brishop-600 transition-colors"
              title="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="text-sm border-b border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent w-40 py-1"
            />
            {showDropdown && (
              <div className="absolute right-0 top-full mt-2 w-[25rem] bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-50">
                {results.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-4">
                    Sin resultados para &quot;{query}&quot;
                  </p>
                ) : (
                  results.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSelect(product.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
                    >
                      <img
                        src={product.imagen}
                        alt={product.nombre}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div className="text-left flex-1">
                        <p className="text-xs font-medium text-gray-900">
                          {product.nombre}
                        </p>
                        <p className="text-xs text-gray-400 capitalize">
                          {product.categoria}
                        </p>
                      </div>
                      <span className="text-sm text-gray-700">
                        <span className="text-xs text-gray-500">Desde: </span>$
                        {product.precioDesde.toFixed(2)}{" "}
                        <span className="text-xs text-gray-500">quincenal</span>
                      </span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: "65px" }}
      >
        <div className="container mx-auto py-8 px-4 h-full overflow-y-auto">
          {/* Buscador mobile */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white"
            />
            {showDropdown && results.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-50">
                {results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
                    data-search-result
                  >
                    <img
                      src={product.imagen}
                      alt={product.nombre}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div className="text-left flex-1">
                      <p className="text-xs font-medium text-gray-900">
                        {product.nombre}
                      </p>
                      <p className="text-xs text-gray-400 capitalize">
                        {product.categoria}
                      </p>
                    </div>
                    <span className="text-sm text-gray-700">
                      <span className="text-xs text-gray-500">Desde:</span>${" "}
                      {product.precioDesde.toFixed(2)}{" "}
                      <span className="text-xs text-gray-500">quincenal</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              className={navLinkMobileClass("/")}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categoria/${category.id}`}
                className={navLinkMobileClass(`/categoria/${category.id}`)}
                onClick={() => setIsOpen(false)}
              >
                {category.nombre}
              </Link>
            ))}
            <Link
              href="/contacto"
              className={navLinkMobileClass("/contacto")}
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Link
              href="/favoritos"
              className="text-brishop-500 pl-8 py-2"
              onClick={() => setIsOpen(false)}
            >
              <FaHeart className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
