"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const services = [
  {
    key: 1,
    title: "Tư vấn triển khai chuyển đổi số toàn diện",
    image: "/images/digital.png",
    desc: "Đồng hành cùng doanh nghiệp trong hành trình số hóa - từ đánh giá hiện trạng, xây dựng lộ trình, đến triển khai công nghệ AI vào quy trình thực tế , giúp tối ưu vận hành và gia tăng năng suất",
  },
  {
    key: 2,
    title: "Hạ tầng số & giải pháp Cloud linh hoạt",
    image: "/images/cloud.png",
    desc: "Thiế t kế kiến trúc cloud tối ưu với mô hình kết hợp đám mây công cộng và riêng tư, đảm bảo an toàn dữ liệu, giảm chi phí cơ sở hạ tầng và tăng khả năng co giãn theo quy mô",
  },
  {
    key: 3,
    title: "Hệ sinh thái AI thông minh & Tự động hóa",
    image: "/images/ai.png",
    desc: "Phát triển giải pháp trí tuệ nhân tạo tích hợp - Chatbot đa nền tảng, AI Agent xử lý nghiệp vụ, và hệ thống phân tích thông minh - giúp doanh nghiệp tương tác liên tục và giảm thiểu chi phí nhân sự",
  },
  {
    key: 4,
    title: "Quản trị dữ liệu & phân tích kinh doanh",
    image: "/images/data.png",
    desc: "Chuyển đổi dữ liệu thô thành insight có giá trị thông qua hệ thống tích hợp đa nguồn, dashboard tổng hợp thông minh, và công cụ phân tích chuyên sâu để hỗ trợ định hướng chiến lược",
  },
  {
    key: 5,
    title: "Nền tảng số & Ứng dụng theo yêu cầu",
    image: "/images/platform.png",
    desc: "Xây dựng giải pháp nền tảng số chuyên sâu cho từng mô hình kinh doanh - marketplace, booking platform, enterprise system - với kiến trúc linh hoạt và khả năng tùy biến cao theo nhu cầu phát triển",
  },
];

export function ServicesHighlights() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const isLocked = useRef(false);
  const touchStartY = useRef(0);
  const hasInteracted = useRef(false);

  // Parallax image
  const scrollY = useMotionValue(0);
  const bgOffset = useTransform(scrollY, [0, 500], [0, -80]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Snap desktop active content vào giữa viewport
  const snapToCenter = () => {
    const el = sectionRef.current;
    if (!el) return;

    // Lấy bounding của section
    const rect = el.getBoundingClientRect();

    // Tính offset để active content nằm giữa màn hình
    const offset =
      rect.top + window.scrollY - (window.innerHeight / 2 - rect.height / 2);

    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  // Only for desktop
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const threshold = 0.55;
        isLocked.current = entry.intersectionRatio > threshold;
      },
      { threshold: [0.5, 0.6, 0.7] }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  const lockBodyScroll = () => (document.body.style.overflow = "hidden");
  const unlockBodyScroll = () => (document.body.style.overflow = "");

  // Desktop wheel
  useEffect(() => {
    if (isMobile) return;

    const onWheel = (e: WheelEvent) => {
      if (!isLocked.current || isAnimating.current) return;

      const threshold = 60;
      if (Math.abs(e.deltaY) < threshold) return;

      if (e.deltaY < 0 && active === 0) return;
      if (e.deltaY > 0 && active === services.length - 1) return;

      e.preventDefault();
      hasInteracted.current = true;

      if (e.deltaY > 0) setActive((p) => p + 1);
      else setActive((p) => p - 1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [active, isMobile]);

  // Desktop touch swipe
  useEffect(() => {
    if (isMobile) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!isLocked.current || isAnimating.current) return;

      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 30) return;

      if (delta > 0 && active < services.length - 1) setActive((p) => p + 1);
      else if (delta < 0 && active > 0) setActive((p) => p - 1);
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, isMobile]);

  // Update URL hash only desktop
  useEffect(() => {
    if (!isMobile)
      window.history.replaceState(null, "", `#${services[active].key}`);
  }, [active, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white pt-32 md:pt-58 pb-24 md:pb-32 overflow-hidden"
    >
      {/* HEADER */}
      <div className="text-center mt-6 md:mt-12 mb-12 md:mb-20 px-6 md:px-0">
        <div className="inline-flex items-center gap-2 bg-white/90 text-[#1851C1] border border-[#DDEBFF] px-3 py-1 rounded-md text-sm shadow-sm">
          <Image
            src="/images/icons/cpu.svg"
            alt="GoalTech"
            width={18}
            height={18}
          />
          <span>Dịch vụ & Giải pháp</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span className="text-blue-600">Dịch vụ</span> & Giải pháp
        </h2>
        <p className="text-slate-500 mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Giải pháp công nghệ toàn diện cho doanh nghiệp hiện đại
        </p>
      </div>

      {/* DESKTOP: LIST SERVICE STICKY */}
      {!isMobile && (
        <div className="services-list sticky top-24 z-20 bg-white px-6 md:px-0 flex justify-center flex-wrap gap-4 md:gap-6 mb-12">
          {services.map((service, idx) => (
            <div
              key={service.key}
              onClick={() => setActive(idx)}
              className={clsx(
                "flex-none w-56 md:w-48 flex flex-col items-center text-left cursor-pointer transition",
                idx === active
                  ? "text-blue-600 font-semibold"
                  : "text-slate-600 hover:text-blue-500"
              )}
            >
              <span className="font-bold text-lg mb-2">0{service.key}</span>
              <span className="text-sm sm:text-base md:text-sm">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* CONTENT */}
      <div className="content-container max-w-7xl mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {isMobile ? (
          services.map((service) => (
            <div key={service.key} className="mb-12">
              <p className="text-blue-600 text-xl sm:text-3xl font-semibold mb-4">
                0{service.key}
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#0B2B6B]">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg md:text-lg text-slate-600 mb-6 max-w-xl">
                {service.desc}
              </p>
              <div className="relative h-[240px] sm:h-[320px] md:h-[520px] flex items-center justify-center mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={650}
                  height={500}
                  className="w-full max-w-[650px] h-auto object-contain rounded-2xl"
                />
              </div>
              <Button className="px-6 py-4 text-lg rounded-xl bg-gradient-to-r from-[#FF8A48] to-[#FF6B2C] shadow-lg hover:scale-[1.03] transition">
                Xem chi tiết
              </Button>
            </div>
          ))
        ) : (
          <>
            {/* Desktop only active content */}
            <div className="md:col-span-6 md:sticky top-32 self-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onAnimationStart={() => {
                    if (!hasInteracted.current) return;
                    isAnimating.current = true;
                    lockBodyScroll();
                    snapToCenter();
                  }}
                  onAnimationComplete={() => {
                    isAnimating.current = false;
                    unlockBodyScroll();
                  }}
                >
                  <p className="text-blue-600 text-xl sm:text-3xl font-semibold mb-4">
                    0{services[active].key}
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#0B2B6B]">
                    {services[active].title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-lg text-slate-600 mb-8 max-w-xl">
                    {services[active].desc}
                  </p>
                  <Button className="px-6 py-6 text-lg rounded-xl bg-gradient-to-r from-[#FF8A48] to-[#FF6B2C] shadow-lg hover:scale-[1.03] transition">
                    Xem chi tiết
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="md:col-span-6 relative h-[320px] sm:h-[400px] md:h-[520px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={services[active].image}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ y: bgOffset }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={services[active].image}
                    alt={services[active].title}
                    width={650}
                    height={500}
                    className="w-full max-w-[650px] h-auto object-contain rounded-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
