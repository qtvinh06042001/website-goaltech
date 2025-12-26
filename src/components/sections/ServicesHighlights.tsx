"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Container } from "@/components/ui/container";

const services = [
  {
    title: "Phát triển phần mềm",
    bullets: [
      "Website & Web Application",
      "Mobile App (iOS & Android)",
      "Hệ thống ERP, CRM",
    ],
    icon: "/images/cpu.svg",
  },
  {
    title: "Chuyển đổi số",
    bullets: [
      "Tư vấn chiến lược số hoá",
      "Tối ưu quy trình nghiệp vụ",
      "Triển khai hệ thống quản lý",
    ],
    icon: "/images/global.svg",
  },
  {
    title: "AI & Automation",
    bullets: [
      "Chatbot & AI Assistant",
      "Phân tích dữ liệu & Dự đoán",
      "Tự động hóa quy trình",
    ],
    icon: "/images/head.svg",
  },
  {
    title: "Cloud & DevOps",
    bullets: [
      "Cloud Migration & Management",
      "CI/CD Pipeline",
      "Monitoring & Security",
    ],
    icon: "/images/cloud.svg",
  },
];

export function ServicesHighlights() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className="relative py-20"
      initial="hidden"
      animate={controls}
      // variants defined inline
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.08, when: "beforeChildren" },
        },
      }}
    >
      {/* subtle background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      />

      <Container>
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-[#1851C1] border border-[#DDEBFF] px-3 py-1 rounded-full text-sm shadow-sm">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M12 2v20M2 12h20"
                stroke="#2BA9FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Dịch vụ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1724] text-center">
            Dịch vụ nổi bật
          </h2>

          <p className="text-center text-[#6B7280] max-w-2xl">
            Giải pháp toàn diện cho mọi nhu cầu công nghệ của doanh nghiệp
          </p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          // reuse same inline variant name (children will follow hidden->show)
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
        >
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-white/60 p-6"
              custom={idx}
              // card variants inline
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.99 },
                show: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 140,
                    damping: 20,
                    delay: i * 0.06,
                  },
                }),
              }}
              whileHover={{
                translateY: -6,
                boxShadow: "0 18px 40px rgba(16,24,40,0.08)",
              }}
              role="article"
              aria-label={s.title}
            >
              {/* icon square */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E6EF6] to-[#2BA9FA] grid place-items-center text-white shadow-md">
                <Image
                  src={s.icon}
                  alt={`${s.title} icon`}
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-6 text-[#0F1724] font-semibold text-xl">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[#6B7280]">
                {/* short description optional */}
              </p>

              <ul className="mt-4 space-y-3 text-sm text-[#374151]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex w-5 h-5 rounded-full bg-white border border-[#2BA9FA] text-[#2BA9FA] items-center justify-center text-xs">
                      ✓
                    </span>
                    <span className="leading-tight">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#FF6B2D] font-medium hover:underline"
                  aria-label={`Tìm hiểu thêm về ${s.title}`}
                >
                  Tìm hiểu thêm
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="#FF6B2D"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
