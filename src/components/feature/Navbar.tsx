import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "단체소개", href: "/about", children: [
    { label: "회장 인사말", href: "/about/greeting" },
    { label: "연혁", href: "/about/history" },
  ]},
  { label: "사업소개", href: "/projects" },
  { label: "봉사활동", href: "/activities" },
  { label: "봉사활동 신청", href: "/apply", children: [
    { label: "봉사활동 신청 안내", href: "/apply/guide" },
    { label: "봉사활동 신청하기", href: "/apply/form" },
  ]},
  { label: "소식지", href: "/blog" },
  { label: "갤러리", href: "/gallery" },
];

const socialLinks = [
  { icon: "ri-facebook-fill", href: "https://www.facebook.com/wix", label: "facebook" },
  { icon: "ri-twitter-x-fill", href: "https://www.twitter.com/Wix", label: "twitter" },
  { icon: "ri-youtube-fill", href: "https://www.youtube.com/user/Wix", label: "youtube" },
  { icon: "ri-instagram-fill", href: "https://www.instagram.com/wix", label: "instagram" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 ${
        scrolled
          ? "fixed top-0 left-0 z-50 bg-background-50/95 backdrop-blur-md shadow-sm"
          : "relative z-50 bg-background-50"
      }`}
    >
      {/* Top bar */}
      <div className="w-full border-b border-background-200/70">
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-3 max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="https://public.readdy.ai/ai/img_res/ac27defa-9526-41d8-92d1-83c5ef05f90f.png"
              alt="한마음 봉사단"
              className="h-9 md:h-10 w-auto object-contain"
            />
            <span className="text-base md:text-lg font-bold text-foreground-950 tracking-tight">
              한마음 봉사단
            </span>
          </Link>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Login */}
            <button className="flex items-center gap-1.5 text-sm text-foreground-700 hover:text-primary-600 transition-colors cursor-pointer">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-secondary-100">
                <i className="ri-user-line text-sm text-secondary-700"></i>
              </div>
              <span className="font-label">로그인</span>
            </button>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="w-7 h-7 flex items-center justify-center text-foreground-500 hover:text-primary-600 transition-colors"
                >
                  <i className={`${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-md bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors whitespace-nowrap"
            >
              봉사신청하기
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground-800 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <i className={`${mobileOpen ? "ri-close-line" : "ri-menu-line"} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="hidden md:block border-b border-background-200/50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <ul className="flex items-center gap-0">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`block px-4 lg:px-5 py-3 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary-600"
                      : "text-foreground-800 hover:text-primary-600"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <i className="ri-arrow-down-s-line ml-0.5 text-xs inline-block w-3 h-3 align-middle"></i>
                  )}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <ul className="absolute top-full left-0 bg-background-50 border border-background-200/70 shadow-sm rounded-md py-2 min-w-[180px] z-50">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.href}
                          className="block px-4 py-2 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <button className="px-4 lg:px-5 py-3 text-sm font-medium text-foreground-800 hover:text-primary-600 transition-colors cursor-pointer">
                More
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200/50">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block py-2.5 text-sm font-medium text-foreground-800 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block py-1.5 text-sm text-foreground-600 hover:text-primary-600 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-background-200/50 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center text-foreground-500 hover:text-primary-600 transition-colors"
                >
                  <i className={`${s.icon} text-base`}></i>
                </a>
              ))}
            </div>
            <Link
              to="/donate"
              className="block mt-3 text-center px-5 py-2.5 text-sm font-medium rounded-md bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              봉사신청하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}