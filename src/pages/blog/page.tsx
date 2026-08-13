import { useEffect, useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { blogPosts } from "@/mocks/blog";

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>(
    Object.fromEntries(blogPosts.map((p) => [p.id, p.likes]))
  );

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) {
        next.delete(postId);
        setLikeCounts((c) => ({ ...c, [postId]: (c[postId] ?? 1) - 1 }));
      } else {
        next.add(postId);
        setLikeCounts((c) => ({ ...c, [postId]: (c[postId] ?? 0) + 1 }));
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />

      {/* Page Header */}
      <section className="w-full py-10 md:py-14 border-b border-background-200/60">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500 font-heading">
            Helping Hands Blog
          </h1>
        </div>
      </section>

      <main className="flex-1 py-10 md:py-14">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          {/* Tabs */}
          <div className="flex items-center justify-between mb-8 border-b border-background-200/70 pb-2">
            <button className="text-sm font-medium text-primary-600 border-b-2 border-primary-500 pb-2 -mb-[9px] cursor-pointer whitespace-nowrap">
              All Posts
            </button>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center text-foreground-500 hover:text-foreground-800 transition-colors cursor-pointer">
                <i className="ri-search-line text-base"></i>
              </button>
            </div>
          </div>

          {/* Post list */}
          <div className="space-y-8 md:space-y-10">
            {blogPosts.map((post) => {
              const isLiked = likedPosts.has(post.id);
              return (
                <article
                  key={post.id}
                  className="flex flex-col sm:flex-row gap-5 border border-background-200/70 rounded-lg overflow-hidden bg-background-50 hover:border-background-300/80 transition-colors cursor-pointer"
                >
                  {/* Image */}
                  <div className="w-full sm:w-[240px] md:w-[300px] flex-shrink-0 h-[180px] sm:h-auto">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-4 md:p-5 flex-1">
                    <div>
                      {/* Author row */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                        <div>
                          <p className="text-xs font-medium text-foreground-800">{post.author}</p>
                          <p className="text-xs text-foreground-500">
                            {post.date} &middot; {post.readTime}
                          </p>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-base md:text-lg font-bold text-foreground-950 hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-foreground-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-background-200/60">
                      <span className="text-xs text-foreground-500">조회수 {post.views}회</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleLike(post.id); }}
                        className={`flex items-center gap-1.5 text-xs transition-colors cursor-pointer ${
                          isLiked ? "text-primary-500" : "text-foreground-500 hover:text-primary-500"
                        }`}
                        aria-label="좋아요"
                      >
                        <i className={`${isLiked ? "ri-heart-fill" : "ri-heart-line"} text-sm`}></i>
                        <span>{likeCounts[post.id]}</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}