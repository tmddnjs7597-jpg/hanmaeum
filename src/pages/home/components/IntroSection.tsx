import { introText } from "@/mocks/home";

export default function IntroSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background-50">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        {introText.lines.map((line, idx) => (
          <p
            key={idx}
            className={`text-base md:text-lg lg:text-xl text-foreground-700 leading-relaxed ${
              idx > 0 ? "mt-1" : ""
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}