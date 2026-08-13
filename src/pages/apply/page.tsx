import { useEffect, useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "신청서 작성",
    description: "아래 양식을 통해 봉사 신청서를 작성해주세요. 이름, 연락처, 희망 봉사 분야 등을 입력하시면 됩니다.",
  },
  {
    number: "02",
    title: "확인 연락",
    description: "신청 후 담당자가 영업일 2일 이내에 입력하신 연락처로 확인 연락을 드립니다.",
  },
  {
    number: "03",
    title: "봉사 참여",
    description: "일정 확인 후 지정된 날짜와 장소에서 봉사 활동에 참여하시면 됩니다.",
  },
];

export default function ApplyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const honeypot = formData.get("website_alt");
    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      setFormState("success");
      return;
    }
    formData.delete("website_alt");

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const category = String(formData.get("category") || "").trim();
    if (!name || !phone || !category) {
      setFormError("이름, 연락처, 봉사 분야는 필수 항목입니다.");
      return;
    }

    setFormState("submitting");
    setFormError("");

    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.append(key, String(value));
    });

    try {
      const res = await fetch("https://readdy.ai/api/form/d9u2i5f8l97n3eas3g7g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      const responseText = await res.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string } } = {};
      try {
        parsed = JSON.parse(responseText);
      } catch (parseErr) {
        void parseErr;
      }

      const serverMsg =
        parsed?.meta?.message || parsed?.meta?.detail || responseText || "";

      if (res.ok && parsed?.code === "OK") {
        setFormState("success");
        formEl.reset();
      } else {
        setFormState("error");
        setFormError(
          serverMsg.toLowerCase().includes("spam")
            ? "스팸으로 처리되었습니다. 다시 시도해주세요."
            : serverMsg || "신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
        );
      }
    } catch (_) {
      setFormState("error");
      setFormError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="w-full relative overflow-hidden">
        <div className="w-full h-[360px] md:h-[460px]">
          <img
            src="https://static.wixstatic.com/media/17b604_ed9e2d18dbc44c3d956e820c5d1641f9~mv2.png"
            alt="봉사활동 신청 배너"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 bg-background-50/90 backdrop-blur-sm py-8 px-10 rounded-lg max-w-xl">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground-950 font-heading">
              봉사활동 신청
            </h1>
            <p className="mt-3 text-sm md:text-base text-foreground-700">
              한마음으로 하는 아름다운 변화, 지금 함께 하세요
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          {/* Steps */}
          <div className="mb-14 md:mb-18">
            <h2 className="text-xl md:text-2xl font-bold text-foreground-950 text-center font-heading mb-10">
              신청 안내
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center p-6 bg-background-100 rounded-lg">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500 text-background-50 font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-base font-semibold text-foreground-950 mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-background-50 border border-background-200/70 rounded-lg p-6 md:p-10">
            <h2 className="text-lg md:text-xl font-bold text-foreground-950 font-heading mb-6">
              봉사활동 신청하기
            </h2>

            {formState === "success" ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 flex items-center justify-center mx-auto rounded-full bg-accent-100 mb-4">
                  <i className="ri-check-line text-2xl text-accent-600"></i>
                </div>
                <p className="text-base font-semibold text-foreground-950">신청이 완료되었습니다!</p>
                <p className="mt-2 text-sm text-foreground-600">
                  영업일 2일 이내에 확인 연락을 드리겠습니다.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-6 px-6 py-2.5 text-sm font-medium rounded-md bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors cursor-pointer"
                >
                  새로운 신청
                </button>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
                  <input
                    type="text"
                    name="website_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground-800 mb-1.5">
                      이름 <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="이름을 입력해주세요"
                      className="w-full px-3.5 py-2.5 text-sm border border-background-300/80 rounded-md bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-800 mb-1.5">
                      연락처 <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="010-0000-0000"
                      className="w-full px-3.5 py-2.5 text-sm border border-background-300/80 rounded-md bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground-800 mb-1.5">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 text-sm border border-background-300/80 rounded-md bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground-800 mb-1.5">
                    봉사 분야 <span className="text-primary-500">*</span>
                  </label>
                  <select
                    name="category"
                    required
                    className="w-full px-3.5 py-2.5 text-sm border border-background-300/80 rounded-md bg-background-50 text-foreground-900 focus:outline-none focus:border-primary-400 transition-colors cursor-pointer"
                  >
                    <option value="">분야를 선택해주세요</option>
                    <option value="환경 정화 사업">환경 정화 사업</option>
                    <option value="이웃 나눔 사업">이웃 나눔 사업</option>
                    <option value="재능 나눔 사업">재능 나눔 사업</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground-800 mb-1.5">
                    희망 참여 날짜
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    className="w-full px-3.5 py-2.5 text-sm border border-background-300/80 rounded-md bg-background-50 text-foreground-900 focus:outline-none focus:border-primary-400 transition-colors cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground-800 mb-1.5">
                    추가 문의사항
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="문의사항이나 특이사항을 입력해주세요 (최대 500자)"
                    maxLength={500}
                    className="w-full px-3.5 py-2.5 text-sm border border-background-300/80 rounded-md bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 transition-colors resize-none"
                  />
                </div>

                {formError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3.5 py-2.5">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-3 text-sm font-semibold rounded-md bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors disabled:opacity-60 cursor-pointer whitespace-nowrap"
                >
                  {formState === "submitting" ? "신청 중..." : "봉사활동 신청하기"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground-600">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-line text-primary-500"></i>
              </div>
              <span>032-468-5505</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-map-pin-line text-primary-500"></i>
              </div>
              <span>인천시 남동구 구월말로 111, 1층</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}