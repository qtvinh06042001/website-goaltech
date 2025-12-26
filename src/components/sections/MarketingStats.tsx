"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Dự án thành công" },
  { value: "200+", label: "Dự án thành công" },
  { value: "50+", label: "Dự án thành công" },
  { value: "99%", label: "Dự án thành công" },
];

export function MarketingStats() {
  return (
    <motion.section
      className="relative overflow-hidden py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-blue-50 to-white" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* small pill tag + heading */}
        <div className="flex flex-col items-center gap-6">
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
            <span>Số liệu đo lường</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1724] text-center">
            Đo Lường Hiệu Quả Marketing
          </h2>
        </div>

        {/* cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.value}
              className="bg-white rounded-xl border-2 shadow-lg p-6 sm:p-8 flex flex-col justify-center min-h-[120px] will-change-transform"
              role="group"
              aria-label={`${s.value} ${s.label}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover="hover"
            >
              <div className="text-[#1E6EF6] font-extrabold text-4xl sm:text-5xl md:text-6xl leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-[#6B7280]">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
