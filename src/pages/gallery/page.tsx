import { useEffect, useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { galleryRows } from "@/mocks/gallery";

type GalleryItem = { image: string; caption: string };

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const allItems: GalleryItem[] = galleryRows.flatMap((row) => row.items);

  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />

      {/* Page Header */}
      <section className="w-full py-10 md:py-14 border-b border-background-200/60">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-950 font-heading">
            한마음 갤러리
          </h1>
          <div className="mt-3 w-10 h-1 bg-accent-500 rounded-full"></div>
        </div>
      </section>

      <main className="flex-1 py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 space-y-10 md:space-y-14">
          {galleryRows.map((row, rowIdx) => (
            <div key={rowIdx} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {row.items.map((item, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="group cursor-pointer overflow-hidden rounded-lg bg-background-100"
                    onClick={() => setLightbox(item)}
                  >
                    <div className="w-full h-[200px] md:h-[220px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-3 py-2.5">
                      <p className="text-xs md:text-sm font-medium text-foreground-800 truncate">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {rowIdx < galleryRows.length - 1 && (
                <div className="border-b border-background-200/60 pt-4"></div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center text-background-50 hover:text-background-200 transition-colors cursor-pointer"
              aria-label="닫기"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <div className="w-full max-h-[70vh] overflow-hidden rounded-lg">
              <img
                src={lightbox.image}
                alt={lightbox.caption}
                className="w-full h-full object-contain"
                style={{ maxHeight: "70vh" }}
              />
            </div>
            <p className="mt-3 text-sm text-center text-background-50/90">
              {lightbox.caption}
            </p>
            {/* Prev/Next */}
            <div className="absolute top-1/2 -translate-y-1/2 left-3 md:-left-12">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = allItems.findIndex((i) => i.image === lightbox.image);
                  const prev = allItems[(idx - 1 + allItems.length) % allItems.length];
                  setLightbox(prev);
                }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background-50/20 text-background-50 hover:bg-background-50/40 transition-colors cursor-pointer"
                aria-label="이전"
              >
                <i className="ri-arrow-left-s-line text-xl"></i>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-3 md:-right-12">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = allItems.findIndex((i) => i.image === lightbox.image);
                  const next = allItems[(idx + 1) % allItems.length];
                  setLightbox(next);
                }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background-50/20 text-background-50 hover:bg-background-50/40 transition-colors cursor-pointer"
                aria-label="다음"
              >
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}