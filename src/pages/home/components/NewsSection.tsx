import { newsPosts } from "@/mocks/home";

export default function NewsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {newsPosts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              className="group block bg-background-50 rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-background-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 md:p-5">
                  <div className="text-white">
                    <div className="flex items-center gap-2 text-xs text-white/80 mb-2">
                      <span>{post.author}</span>
                      <span className="w-1 h-1 rounded-full bg-white/60"></span>
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/60"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-semibold leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}