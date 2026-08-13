import { Link } from "react-router-dom";
import { footerData } from "@/mocks/home";

const socialIcons: Record<string, string> = {
  facebook: "ri-facebook-fill",
  twitter: "ri-twitter-x-fill",
  youtube: "ri-youtube-fill",
  instagram: "ri-instagram-fill",
};

export default function Footer() {
  return (
    <footer className="w-full bg-background-100 border-t border-background-200/70">
      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Brand info */}
          <div>
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src="https://public.readdy.ai/ai/img_res/ac27defa-9526-41d8-92d1-83c5ef05f90f.png"
                alt="한마음 봉사단"
                className="h-8 w-auto object-contain"
              />
              <span className="text-lg md:text-xl font-bold text-foreground-950">
                한마음 봉사단
              </span>
            </Link>
            <p className="mt-3 text-sm text-foreground-700">{footerData.phone}</p>
            <div className="mt-1 text-sm text-foreground-700">
              {footerData.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          {/* Right - Social & Legal */}
          <div className="md:text-right">
            {/* Social icons */}
            <div className="flex items-center gap-3 md:justify-end">
              {footerData.socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center text-foreground-500 hover:text-primary-600 transition-colors"
                >
                  <i className={`${socialIcons[s.label]} text-base`}></i>
                </a>
              ))}
            </div>

            {/* Legal links */}
            <div className="mt-4 md:mt-5 space-y-1.5">
              {footerData.legalLinks.map((link) => (
                <p key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-background-200/50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 py-4 text-center">
          <p className="text-xs text-foreground-500">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}