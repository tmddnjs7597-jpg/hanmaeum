import { useState, useEffect, useCallback } from "react";
import { heroSlides } from "@/mocks/home";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = heroSlides;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[420px] md:h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt="한마음 봉사단 활동"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-md max-w-3xl">
          {slide.title}
        </h1>
        <p className="mt-3 md:mt-4 text-base md:text-xl lg:text-2xl text-white/90 font-medium drop-shadow-sm max-w-2xl">
          {slide.subtitle}
        </p>
      </div>

      {/* Slide indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`슬라이드 ${idx + 1}`}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
}