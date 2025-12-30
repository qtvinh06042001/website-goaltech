"use client";

import React from "react";
import { Header } from "../layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Điều chỉnh đường dẫn tùy dự án của bạn

export function CompanyIntro() {
  return (
    <div>
      <Header />
      <section className="relative min-h-[120vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#f8fbff] px-4 pt-20">
        <div className="absolute bottom-1.5 inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 translate-y-96" // Chỉnh opacity để text dễ đọc
          >
            <source src="/images/data-wave.mp4" type="video/mp4" />
          </video>
          {/* Lớp phủ gradient nhẹ để hòa quyện video vào nền trắng */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#bbd5f7] via-transparent to-[#F8FBFF]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto -mt-50 md:-mt-58 lg:-mt-64 xl:-mt-72 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="inline-flex items-center gap-2 bg-white/90 text-[#007AFF] border border-[#DDEBFF] px-3 py-1 rounded-full text-sm shadow-sm">
              <Image
                src="/images/icons/buildings.svg"
                alt="GoalTech"
                width={18}
                height={18}
                className="w-4.5 h-4.5"
              />
              <span>Về GoalTech</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] leading-tight mb-6"
          >
            Đồng Hành Kiến Tạo{" "}
            <span className="text-blue-600">Kỷ Nguyên Số</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#4D4D57] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
          >
            GoalTech là đối tác đồng hành cùng bạn xây dựng tương lai số. Với
            công nghệ AI tiên tiến và đội ngũ chuyên gia tận tâm, GoalTech
            chuyển hóa mục tiêu của bạn thành hiện thực. Tạo nên giá trị bền
            vững trong kỷ nguyên chuyển đổi số.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-b from-orange-400 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-200 transition-all active:scale-95">
              Liên hệ với chúng tôi
            </button>

            <button className="px-8 py-3 bg-white text-blue-600 border-2 font-semibold border-blue-200 rounded-lg hover:bg-blue-50 transition-all active:scale-95 shadow-sm">
              Tìm hiểu thêm
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
