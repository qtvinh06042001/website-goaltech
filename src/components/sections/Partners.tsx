"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { Container } from "@/components/ui/container";

const partners = [
  { src: "/images/partners_logo/lg-cns.svg", alt: "LGCNS" },
  { src: "/images/partners_logo/lg-cns.svg", alt: "LGCNS" },
  { src: "/images/partners_logo/lg-cns.svg", alt: "LGCNS" },
  { src: "/images/partners_logo/lg-cns.svg", alt: "LGCNS" },
  { src: "/images/partners_logo/lg-cns.svg", alt: "LGCNS" },
  { src: "/images/partners_logo/lg-cns.svg", alt: "LGCNS" },
  { src: "/images/partners_logo/lg-cns.svg", alt: "LGCNS" },
];

export function Partners() {
  const x = useMotionValue(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const SPEED = 80; // px / giây

  const start = () => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;
    const currentX = x.get();

    animationRef.current = animate(x, -trackWidth, {
      duration: Math.abs(-trackWidth - currentX) / SPEED,
      ease: "linear",
      onComplete: () => {
        x.set(0); // reset logic để loop mượt
        start();
      },
    });
  };

  const pause = () => {
    animationRef.current?.stop(); // đứng yên
  };

  const resume = () => {
    animationRef.current?.stop();
    start(); // chạy tiếp từ vị trí hiện tại
  };

  useEffect(() => {
    start();
    return () => animationRef.current?.stop();
  }, []);

  return (
    <section className="py-20 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-[#1851C1] border border-[#DDEBFF] px-3 py-1 rounded-md text-sm shadow-sm">
            <Image
              src="/images/icons/group-user.svg"
              alt="GoalTech"
              width={18}
              height={18}
              className="w-4.5 h-4.5"
            />
            <span>Đối tác</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1724] text-center">
            <span className="text-blue-600">Đối Tác </span> Của Chúng Tôi
          </h2>

          <p className="text-center text-[#6B7280] max-w-2xl">
            Được tin tưởng bởi hàng trăm doanh nghiệp từ nhiều lĩnh vực khác
            nhau
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden">
          {/* Fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-10 w-max"
          >
            {[...partners, ...partners].map((p, i) => (
              <div
                key={p.alt + i}
                onMouseEnter={pause}
                onMouseLeave={resume}
                className="p-6 bg-white flex items-center justify-center w-[180px] cursor-pointer"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={140}
                  height={40}
                  className="object-contain opacity-90 hover:grayscale-0 transition"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
