"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    slug: "it-modernization",
    title: "IT Assessment & Modernization",
    desc: "Evaluate, optimize and modernize legacy IT systems.",
    icon: "/icons/modernization.svg",
  },
  {
    slug: "software-development",
    title: "Custom Software Development",
    desc: "Enterprise-grade software tailored to business needs.",
    icon: "/icons/software.svg",
  },
  {
    slug: "ai-rnd",
    title: "AI & New Technology R&D",
    desc: "Research and apply AI, Data, Blockchain technologies.",
    icon: "/icons/ai.svg",
  },
  {
    slug: "odc",
    title: "Offshore Development Center",
    desc: "Build and scale dedicated offshore engineering teams.",
    icon: "/icons/odc.svg",
  },
];

export function ServicesHighlights() {
  return (
    <section className="relative py-32 bg-[#F7FAFF] overflow-hidden">
      {/* BACKGROUND WAVE / SHAPE */}
      <svg
        className="absolute top-0 left-0 w-full h-[500px] opacity-30"
        viewBox="0 0 1440 400"
        fill="none"
      >
        <path
          d="M0,160 C240,260 480,60 720,120 960,180 1200,140 1440,80"
          stroke="#3B82F6"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT HERO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-wider">
            OUR AREAS OF EXPERTISE
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Dịch vụ & Giải pháp <br /> Công nghệ
          </h2>

          <p className="mt-8 text-lg text-slate-600 max-w-md leading-relaxed">
            Chúng tôi cung cấp các giải pháp công nghệ toàn diện, giúp doanh
            nghiệp tăng tốc chuyển đổi số và phát triển bền vững.
          </p>
        </motion.div>

        {/* RIGHT SERVICES */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className="
                    relative h-full rounded-2xl p-8
                    bg-white
                    border border-slate-200
                    transition-all duration-300
                    group-hover:-translate-y-2
                    group-hover:shadow-2xl
                  "
              >
                {/* BORDER GRADIENT */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-br from-blue-500 to-cyan-400
                    opacity-0 group-hover:opacity-100
                    transition
                    -z-10 blur-[2px]
                  "
                />

                {/* ICON */}
                <div className="mb-8">
                  <div
                    className="
                      w-12 h-12 rounded-lg
                      flex items-center justify-center
                      bg-slate-100
                      group-hover:bg-blue-600 transition
                    "
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="opacity-70 group-hover:invert transition"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
