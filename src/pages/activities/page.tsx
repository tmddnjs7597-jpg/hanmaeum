import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { activityGroups } from "@/mocks/activities";

export default function ActivitiesPage() {
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
            봉사활동
          </h1>
          <p className="mt-3 text-sm md:text-base text-foreground-600 max-w-xl mx-auto">
            한마음 봉사단이 함께해온 다양한 봉사활동 현장을 만나보세요.
          </p>
        </div>
      </section>

      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 space-y-14 md:space-y-20">
          {activityGroups.map((group, idx) => (
            <div key={idx} className="space-y-5">
              {/* Title */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-accent-500 rounded-full flex-shrink-0"></div>
                <h2 className="text-lg md:text-xl font-bold text-foreground-950 font-heading">
                  {group.title}
                </h2>
              </div>

              {/* Images Grid */}
              <div
                className={`grid gap-3 ${
                  group.images.length === 3
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {group.images.map((imgSrc, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="w-full overflow-hidden rounded-lg bg-background-100 cursor-pointer group"
                  >
                    <div className="w-full h-[200px] md:h-[240px]">
                      <img
                        src={imgSrc}
                        alt={`${group.title} ${imgIdx + 1}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              {idx < activityGroups.length - 1 && (
                <div className="border-b border-background-200/70 pt-4"></div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}