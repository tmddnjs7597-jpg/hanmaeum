import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { chairmanGreeting } from "@/mocks/about";
import { Link } from "react-router-dom";

export default function ChairmanGreetingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />

      {/* Page Header */}
      <section className="w-full py-12 md:py-16 bg-background-100 border-b border-background-200/60">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-sm text-foreground-500 mb-3">
            <Link to="/about" className="hover:text-primary-600 transition-colors">
              단체소개
            </Link>
            <i className="ri-arrow-right-s-line text-xs"></i>
            <span className="text-foreground-700">회장 인사말</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-950 font-heading">
            회장 인사말
          </h1>
        </div>
      </section>

      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-background-50">
          <div className="max-w-[1000px] mx-auto px-4 md:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Photo */}
              <div className="w-full lg:w-[320px] xl:w-[360px] shrink-0">
                <div className="aspect-square w-full max-w-[360px] mx-auto lg:mx-0 rounded-lg overflow-hidden bg-background-100 border border-background-200/60">
                  <img
                    src={chairmanGreeting.image}
                    alt={`${chairmanGreeting.name} 회장`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <p className="text-lg font-bold text-foreground-950">{chairmanGreeting.name}</p>
                  <p className="text-sm text-foreground-600">{chairmanGreeting.title}</p>
                </div>
              </div>

              {/* Greeting Text */}
              <div className="flex-1">
                {chairmanGreeting.greeting.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm md:text-base text-foreground-700 leading-relaxed mb-5"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8 pt-6 border-t border-background-200/60">
                  <p className="text-sm md:text-base text-foreground-800 font-medium">
                    {chairmanGreeting.closing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Nav */}
        <section className="w-full py-8 bg-background-100 border-t border-background-200/60">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-foreground-600 hover:text-primary-600 transition-colors"
            >
              <i className="ri-arrow-left-line text-sm"></i>
              <span>단체소개로 돌아가기</span>
            </Link>
            <Link
              to="/about/history"
              className="inline-flex items-center gap-2 text-sm text-foreground-600 hover:text-primary-600 transition-colors"
            >
              <span>연혁 보기</span>
              <i className="ri-arrow-right-line text-sm"></i>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}