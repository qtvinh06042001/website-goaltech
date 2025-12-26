"use client";
// ...existing code...
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Container } from "@/components/ui/container";

const features = [
  {
    title: "Đổi mới sáng tạo",
    desc: "Giải pháp toàn diện về công nghệ và nền tảng",
    img: "/images/Icons/setting_cube.png",
  },
  {
    title: "Bảo mật tối đa",
    desc: "Đảm bảo an toàn dữ liệu và tuân thủ tiêu chuẩn bảo mật quốc tế",
    img: "/images/Icons/shield_cube.png",
  },
  {
    title: "Đội ngũ chuyên nghiệp",
    desc: "Đội ngũ kỹ sư giàu kinh nghiệm, tận tâm và luôn cập nhật công nghệ",
    img: "/images/Icons/cubes.png",
  },
];

export function AboutFeatures() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className="relative py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* subtle bg */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-blue-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <Container>
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
            <span>Giới thiệu chung</span>
          </div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1724] text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Về GoalTech
          </motion.h2>

          <motion.p
            className="text-center max-w-2xl text-[#6B7280]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Chúng tôi là đội ngũ chuyên gia công nghệ với sứ mệnh giúp doanh
            nghiệp Việt Nam chuyển đổi số thành công.
          </motion.p>
        </motion.div>

        <motion.div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.article
              key={f.title}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-white/60"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 20,
                duration: 0.6,
                delay: idx * 0.08,
              }}
              whileHover={{ scale: 1.03 }}
              role="article"
            >
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-[#1851C1] font-semibold text-xl mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[#6B7280] mb-6">{f.desc}</p>

                <div className="mt-auto">
                  <div className="bg-white/50 rounded-lg p-4 grid place-items-center">
                    <Image
                      src={f.img}
                      alt={f.title}
                      width={220}
                      height={140}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
