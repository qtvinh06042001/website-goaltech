"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Headphones, PenLine, Layout, FileCheck, Users2 } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Tư vấn khách hàng",
    icon: Headphones,
  },
  {
    id: "02",
    title: "Ký hợp đồng & Lên kế hoạch",
    icon: PenLine,
  },
  {
    id: "03",
    title: "Phát triển sản phẩm/ giải pháp",
    icon: Layout,
  },
  {
    id: "04",
    title: "Bàn giao & Hướng dẫn sử dụng",
    icon: FileCheck,
  },
  {
    id: "05",
    title: "Hỗ trợ lâu dài",
    icon: Users2,
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        {/* HEADER */}
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-[#1851C1] border border-[#DDEBFF] px-3 py-1 rounded-full text-sm shadow-sm">
            <Image
              src="/images/icons/cpu.svg"
              alt="GoalTech"
              width={18}
              height={18}
            />
            <span>Quy trình</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1724] text-center">
            Quy trình Cộng Tác{" "}
            <span className="text-blue-600">Cùng GoalTech</span>
          </h2>

          <p className="text-center text-[#6B7280] max-w-2xl">
            Quy trình chuyên nghiệp đảm bảo chất lượng và tiến độ dự án
          </p>
        </div>

        {/* TIMELINE */}
        <div
          className="relative mt-32"
          style={{ "--timeline-y": "140px" } as React.CSSProperties}
        >
          {/* ĐƯỜNG KẺ NGANG */}
          <div
            className="absolute left-0 w-full h-[1.5px] bg-blue-400 hidden md:block"
            style={{ top: "var(--timeline-y)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -40 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.3,
                      boxShadow: "0 12px 28px rgba(37, 99, 235, 0.25)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="w-20 h-20 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center text-blue-500 z-10"
                  >
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                    >
                      <Icon size={32} strokeWidth={1.5} />
                    </motion.div>
                  </motion.div>

                  {/* CONNECTOR DỌC */}
  
                  <motion.div
                    style={{
                      originY: 0,
                      height: "calc(var(--timeline-y) - 80px)",
                    }}
                    className="w-[1.5px] bg-blue-400 hidden md:block"
                  />

                  {/* DOT TRÊN TIMELINE */}
                  <div
                    className="absolute w-3.5 h-3.5 rounded-full bg-blue-500 hidden md:block"
                    style={{ top: "calc(var(--timeline-y) - 7px)" }}
                  />

                  {/* TEXT */}
                  <div className="mt-10">
                    <span className="text-xl font-black text-blue-600 block mb-2">
                      {step.id}
                    </span>
                    <h4 className="text-slate-800 font-bold leading-tight px-4">
                      {step.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
