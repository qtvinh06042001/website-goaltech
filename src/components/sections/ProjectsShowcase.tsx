"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const projects = [
  {
    title: "GoalMe - Ứng dụng thể thao",
    subtitle: "Ứng dụng công nghệ để cải thiện trải nghiệm người dùng thể thao",
    bullets: [
      "Giao diện người dùng thân thiện",
      "Tích hợp thanh toán & định vị",
      "Quản lý sự kiện & lịch tập",
    ],
    img: "/images/goalme_app.png",
  },
  {
    title: "GoalPay - Thanh toán số",
    subtitle: "Giải pháp thanh toán nhanh, an toàn cho doanh nghiệp vừa và nhỏ",
    bullets: [
      "Tích hợp nhiều cổng thanh toán",
      "Bảo mật & tuân thủ chuẩn quốc tế",
      "Báo cáo & phân tích giao dịch",
    ],
    img: "/images/goalme_app.png",
  },
  {
    title: "GoalCloud - Hạ tầng & DevOps",
    subtitle: "Triển khai hạ tầng đám mây, tối ưu CI/CD và giám sát hệ thống",
    bullets: [
      "Cloud migration & management",
      "CI/CD pipeline tối ưu",
      "Monitoring & security",
    ],
    img: "/images/goalme_app.png",
  },
];

export function ProjectsShowcase() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col gap-16">
          {projects.map((p, idx) => {
            // image left for idx 0, image right for idx 1, alternate thereafter
            const isImageLeft = idx % 2 === 0;

            return (
              <motion.div
                key={p.title}
                className={`grid grid-cols-1 md:grid-cols-12 items-center gap-8 ${
                  !isImageLeft ? "md:mt-12" : ""
                }`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                {/* Image column */}
                <motion.div
                  className={`md:col-span-6 flex ${
                    isImageLeft ? "justify-start" : "justify-end"
                  } relative md:transform ${
                    isImageLeft ? "md:-translate-y-6" : "md:translate-y-6"
                  }`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: isImageLeft ? -24 : 24,
                      scale: 0.98,
                    },
                    show: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.9,
                        type: "spring",
                        stiffness: 120,
                      },
                    },
                  }}
                  // place image first when left on md+
                  style={{ order: isImageLeft ? 1 : 2 }}
                >
                  <div
                    aria-hidden
                    className={`absolute rounded-full filter blur-[64px] opacity-80 ${
                      isImageLeft
                        ? "left-0 md:-left-10"
                        : "right-0 md:-right-10"
                    } -z-10`}
                    style={{
                      width: 520,
                      height: 520,
                      background:
                        "radial-gradient(closest-side, rgba(40,140,255,0.22), rgba(40,140,255,0.08) 40%, rgba(255,255,255,0) 60%)",
                    }}
                  />

                  <div className="relative w-[260px] sm:w-[340px] md:w-[380px] lg:w-[440px]">
                    <div className="rounded-3xl overflow-visible drop-shadow-2xl">
                      <Image
                        src={p.img}
                        alt={p.title}
                        width={820}
                        height={680}
                        className="w-full h-auto relative z-10"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text column */}
                <motion.div
                  className={`md:col-span-6 relative px-4`}
                  variants={{
                    hidden: { opacity: 0, x: isImageLeft ? 24 : -24 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
                  }}
                  // order opposite of image on md+
                  style={{ order: isImageLeft ? 2 : 1 }}
                >
                  <div className="inline-flex items-center gap-2 bg-white/90 text-[#1851C1] border border-[#DDEBFF] px-3 py-1 rounded-full text-sm shadow-sm mb-4 w-max">
                    <svg
                      className="w-4 h-4 text-[#2BA9FA]"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 2v20M2 12h20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Dự án nổi bật</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F1724] mb-4">
                    {p.title}
                  </h3>
                  <p className="text-[#6B7280] max-w-2xl mb-6">{p.subtitle}</p>

                  <ul className="space-y-3 text-sm text-[#374151] mb-6">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex w-5 h-5 rounded-full bg-white border border-[#2BA9FA] text-[#2BA9FA] items-center justify-center text-xs">
                          ✓
                        </span>
                        <span className="leading-tight">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#FF6B2D] font-medium"
                    aria-label={`Xem chi tiết ${p.title}`}
                  >
                    Xem chi tiết
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
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
