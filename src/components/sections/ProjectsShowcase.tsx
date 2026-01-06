"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const products = [
  {
    key: "goalme",
    label: "GoalMe",
    logo: "/images/logo-goalme.png",
    title: "GoalMe - Ứng dụng thể thao",
    description:
      "Ứng dụng được phát triển với mục tiêu kết nối người chơi, huấn luyện viên...",
    features: [
      "Kết nối người chơi thể thao",
      "Quản lý đội & lịch thi đấu",
      "Ứng dụng công nghệ AI",
      "Hệ thống quản lý chuyên nghiệp",
    ],
    image: "/images/goalme_app.png",
    cta: "Xem chi tiết",
  },
  {
    key: "goalmanager",
    label: "GoalManager",
    logo: "/images/logo-goalme.png",
    title: "GoalManager - Quản lý",
    description: "Nền tảng quản lý toàn diện dành cho CLB, trung tâm thể thao.",
    features: ["Quản lý hội viên", "Theo dõi doanh thu", "Báo cáo thông minh"],
    image: "/images/goalme_app.png",
    cta: "Khám phá",
  },
];

export function ProjectsShowcase() {
  const [active, setActive] = useState(products[0].key);
  const product = products.find((p) => p.key === active)!;
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-[#1851C1] border border-[#DDEBFF] px-3 py-1 rounded-md text-sm shadow-sm">
            <Image
              src="/images/icons/head.svg"
              alt="GoalTech"
              width={18}
              height={18}
              className="w-4.5 h-4.5"
            />
            <span>Sản Phẩm</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1724] text-center">
            Sản Phẩm <span className="text-blue-600">Nổi Bật</span>
          </h2>

          <p className="text-center text-[#6B7280] max-w-2xl">
            Giải pháp toàn diện cho mọi nhu cầu công nghệ của doanh nghiệp
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-16">
          {products.map((p) => (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`px-6 py-2 rounded-full font-semibold transition
              ${
                active === p.key
                  ? "bg-blue-600 text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        {/* CONTENT */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          {/* LEFT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={product.key}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={product.logo}
                alt=""
                width={120}
                height={40}
                className="mb-6"
              />

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {product.title}
              </h3>

              <p className="text-slate-600 mb-6">{product.description}</p>

              <ul className="space-y-3 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="text-blue-600 w-5 h-5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button className="bg-gradient-to-b from-[#FFAF8B] to-[#FF5E15] hover:opacity-90 text-white px-8">
                {product.cta}
              </Button>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={product.image}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <Image
                src={product.image}
                alt=""
                width={420}
                height={600}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
