import { Link } from "react-router-dom";
import { ctaSections } from "@/mocks/home";

export default function CtaSection() {
  return (
    <section className="w-full">
      {/* Heading bar */}
      <div className="bg-primary-500 py-10 md:py-14 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-background-50">
            여러분의 따뜻한 손길을 기다립니다
          </h2>
        </div>
      </div>

      {/* Two columns */}
      <div className="bg-primary-500">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {ctaSections.map((section) => (
              <div key={section.id} className="py-10 md:py-14 lg:py-16 px-4 md:px-8 text-center">
                <h3 className="text-lg md:text-xl font-bold text-background-50">
                  <span className="block">{section.labelEn}</span>
                  <span className="block mt-0.5">{section.labelKo}</span>
                </h3>
                <p className="mt-4 text-sm md:text-base text-background-50/85 leading-relaxed whitespace-pre-line">
                  {section.description}
                </p>
                <Link
                  to={section.href}
                  className="inline-flex items-center justify-center mt-6 px-8 py-2.5 text-sm font-medium rounded-full border-2 border-background-50 text-background-50 hover:bg-background-50 hover:text-primary-600 transition-colors whitespace-nowrap"
                >
                  {section.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}