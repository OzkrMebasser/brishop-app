"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { categories } from "@/data/categories";

const LogoBrishop =
  "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/brishop-ecommerce%2FLOGO-brishop-horizontal.png?alt=media&token=851e2ab6-4510-4415-a2fc-07c5410999c0";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      // className={`fixed w-full z-50 transition-all duration-300 ${
      //   scrolled
      //     ? "py-2 bg-white shadow-md"
      //     : "py-4 bg-white backdrop-blur-sm"
      // }`}
      className="fixed w-full z-50 transition-all duration-300 py-2 bg-white shadow-md"
    >
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
          <Link href="/" className="nav-link">
            Inicio
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.id}`}
              className="nav-link"
            >
              {category.nombre}
            </Link>
          ))}
          <Link href="/contacto" className="nav-link">
            Contacto
          </Link>
        </nav>

        {/* Desktop Icons */}
        {/* <div className="hidden md:flex items-center space-x-4">
          <button
            className="p-2 hover:text-brishop-600 transition-colors"
            title="Buscar"
          >
            <Search className="h-5 w-5" />
          </button>
        </div> */}

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
          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              className="nav-link text-xl py-2"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categoria/${category.id}`}
                className="nav-link text-xl py-2"
                onClick={() => setIsOpen(false)}
              >
                {category.nombre}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="nav-link text-xl py-2"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
