import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { aboutInfo } from "@/mocks/about";
import { Link } from "react-router-dom";

export default function AboutPage() {
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
            단체소개
          </h1>
          <p className="mt-3 text-sm md:text-base text-foreground-600 max-w-xl mx-auto">
            한마음으로 하는 봉사, 한마음으로 만드는 아름다운 세상
          </p>
        </div>
      </section>

      <main className="flex-1">
        {/* Mission Section */}
        <section className="w-full bg-background-50">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row items-stretch gap-0">
              {/* Image Side */}
              <div className="flex-1 min-h-[280px] md:min-h-[380px] lg:min-h-[460px]">
                <img
                  src={aboutInfo.heroImage}
                  alt="한마음봉사단 단체사진"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "280px" }}
                />
              </div>
              {/* Text Side */}
              <div className="flex-1 flex flex-col justify-center py-12 md:py-16 lg:py-20 lg:px-8 xl:px-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 font-heading">
                  {aboutInfo.mission}
                </h2>
                <p className="mt-4 text-base md:text-lg font-semibold text-primary-600">
                  {aboutInfo.vision}
                </p>
                <p className="mt-5 text-sm md:text-base text-foreground-700 leading-relaxed">
                  {aboutInfo.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/about/greeting"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors whitespace-nowrap"
                  >
                    <span>회장 인사말</span>
                    <i className="ri-arrow-right-line text-sm"></i>
                  </Link>
                  <Link
                    to="/about/history"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-primary-500 text-primary-600 hover:bg-primary-50 transition-colors whitespace-nowrap"
                  >
                    <span>연혁 보기</span>
                    <i className="ri-arrow-right-line text-sm"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 bg-background-100 border-y border-background-200/60">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {aboutInfo.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary-600 font-heading">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm text-foreground-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-14 md:py-20 bg-background-50">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground-950 font-heading">
                한마음봉사단의 세 가지 약속
              </h2>
              <p className="mt-3 text-sm md:text-base text-foreground-600 max-w-lg mx-auto">
                환경정화, 나눔봉사, 재능기부 — 세 가지 가치를 바탕으로 지역사회에 기여합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {aboutInfo.values.map((value) => (
                <div
                  key={value.title}
                  className="bg-background-100 rounded-lg p-6 md:p-8 border border-background-200/60 hover:border-primary-300/60 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 mb-5">
                    <i className={`${value.icon} text-xl text-primary-600`}></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground-950 font-heading">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-foreground-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full py-14 md:py-20 bg-primary-500">
          <div className="max-w-[800px] mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-background-50 font-heading">
              한마음봉사단과 함께하세요
            </h2>
            <p className="mt-3 text-sm md:text-base text-background-50/80">
              작은 실천이 모여 큰 변화를 만듭니다. 지금 바로 봉사활동에 참여해보세요.
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