"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  {
    image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Nueva Colección",
    subtitle: "Bolsas exclusivas",
    link: "/categoria/bolsas-de-mujer",
    position: "right",
  },
  {
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Tenis de Temporada",
    subtitle: "Comodidad y estilo",
    link: "/categoria/tenis",
    position: "left",
  },
  {
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Fragancias Exclusivas",
    subtitle: "Nueva colección de perfumes",
    link: "/categoria/perfumes",
    position: "right",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden pt-16">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            
            <div className="absolute inset-0 flex items-center">
              <div 
                className={`container-custom text-white ${
                  slide.position === "right" 
                    ? "text-right ml-auto" 
                    : "text-left mr-auto"
                }`}
              >
                <div 
                  className={`max-w-md ${
                    slide.position === "right" 
                      ? "ml-auto" 
                      : "mr-auto"
                  }`}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <Link
                    href={slide.link}
                    className="inline-flex items-center bg-brishop-600 hover:bg-brishop-700 text-white py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Ver colección
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;