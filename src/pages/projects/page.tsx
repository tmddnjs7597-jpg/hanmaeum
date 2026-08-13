import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { programs } from "@/mocks/projects";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />

      {/* Page Header */}
      <section className="w-full py-12 md:py-16 bg-background-100 border-b border-background-200/60">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-950 font-heading">
            사업소개
          </h1>
          <p className="mt-3 text-sm md:text-base text-foreground-600 max-w-xl mx-auto">
            한마음 봉사단은 세 가지 핵심 사업을 통해 인천 지역 사회와 함께 성장하고 있습니다.
          </p>
        </div>
      </section>

      <main className="flex-1">
        {programs.map((program, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={program.title}
              className={`w-full ${isEven ? "bg-background-50" : "bg-background-100"}`}
            >
              <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-stretch gap-0`}
                >
                  {/* Text Side */}
                  <div className="flex-1 flex flex-col justify-center py-12 md:py-16 lg:py-20 lg:px-8 xl:px-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 font-heading">
                      {program.title}
                    </h2>
                    <p className="mt-4 text-base md:text-lg font-semibold text-primary-600">
                      {program.subtitle}
                    </p>
                    <p className="mt-5 text-sm md:text-base text-foreground-700 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="mt-8">
                      <Link
                        to="/activities"
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors whitespace-nowrap"
                      >
                        <span>활동 보기</span>
                        <i className="ri-arrow-right-line text-sm"></i>
                      </Link>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1 min-h-[280px] md:min-h-[380px] lg:min-h-[460px]">
                    <img
                      src={program.image}
                      alt={program.imageAlt}
                      className="w-full h-full object-cover object-top"
                      style={{ minHeight: "280px" }}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <section className="w-full py-14 md:py-20 bg-primary-500">
          <div className="max-w-[800px] mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-background-50 font-heading">
              한마음으로 하는 아름다운 변화
            </h2>
            <p className="mt-3 text-sm md:text-base text-background-50/80">
              지금 함께 봉사활동을 신청하고 인천을 더 따뜻하게 만들어보세요.
            </p>
            <Link
              to="/apply"
              className="mt-7 inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-md bg-background-50 text-primary-600 hover:bg-background-100 transition-colors whitespace-nowrap"
            >
              봉사활동 신청하기
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}