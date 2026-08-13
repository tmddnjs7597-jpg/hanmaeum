import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { historyTimeline } from "@/mocks/about";
import { Link } from "react-router-dom";

export default function HistoryPage() {
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
            <span className="text-foreground-700">연혁</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-950 font-heading">
            연혁
          </h1>
          <p className="mt-3 text-sm md:text-base text-foreground-600 max-w-xl">
            2020년부터 오늘까지, 한마음봉사단이 걸어온 발자취입니다.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-background-50">
          <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-10">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-background-200 md:-translate-x-px"></div>

              {historyTimeline.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={`${item.year}-${item.month}`}
                    className={`relative flex items-start gap-6 md:gap-0 mb-10 last:mb-0 ${
                      isLeft
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-primary-500 border-2 border-background-50 md:-translate-x-1.5 z-10"></div>

                    {/* Content */}
                    <div
                      className={`pl-10 md:pl-0 md:w-1/2 ${
                        isLeft
                          ? "md:pr-10 md:text-right"
                          : "md:pl-10 md:text-left"
                      }`}
                    >
                      <div
                        className={`bg-background-100 rounded-lg p-5 md:p-6 border border-background-200/60 ${
                          isLeft ? "md:ml-auto" : "md:mr-auto"
                        } max-w-[420px]`}
                      >
                        <div className="flex items-center gap-2 mb-2 md:justify-start">
                          <span className="text-xl md:text-2xl font-bold text-primary-600 font-heading">
                            {item.year}
                          </span>
                          <span className="text-sm text-foreground-500">{item.month}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-foreground-950 font-heading">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-foreground-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Nav */}
        <section className="w-full py-8 bg-background-100 border-t border-background-200/60">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between">
            <Link
              to="/about/greeting"
              className="inline-flex items-center gap-2 text-sm text-foreground-600 hover:text-primary-600 transition-colors"
            >
              <i className="ri-arrow-left-line text-sm"></i>
              <span>회장 인사말</span>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-foreground-600 hover:text-primary-600 transition-colors"
            >
              <span>단체소개로 돌아가기</span>
              <i className="ri-arrow-right-line text-sm"></i>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}