"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const partners = [
  { src: "/images/partners/chat_sphere.svg", alt: "ChatSphere" },
  { src: "/images/partners/orbit_shift.svg", alt: "OrbitShift" },
  { src: "/images/partners/eco_revive.svg", alt: "EcoRevive" },
  { src: "/images/partners/rhythm_rise.svg", alt: "Rhythm Rise" },
  { src: "/images/partners/metal_might.svg", alt: "MetalMight" },
  { src: "/images/partners/unity_sync.svg", alt: "UnitySync" },
  { src: "/images/partners/tri_fold.svg", alt: "TriFold" },
];

export function Partners() {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Container>
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-[#1851C1] border border-[#DDEBFF] px-3 py-1 rounded-full text-sm shadow-sm">
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
            <span>Đối tác</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1724] text-center">
            Đối Tác Của Chúng Tôi
          </h2>

          <p className="text-center text-[#6B7280] max-w-2xl">
            Được tin tưởng bởi hàng trăm doanh nghiệp từ nhiều lĩnh vực khác
            nhau
          </p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {partners.map((p, i) => (
            <motion.div
              key={p.alt + i}
              className="p-6 rounded-lg bg-white/60 hover:bg-white shadow-sm flex items-center justify-center w-full max-w-[180px]"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: i * 0.04 },
                },
              }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={140}
                height={40}
                className="object-contain grayscale-[0.12] contrast-[1.05] opacity-90"
                priority={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
