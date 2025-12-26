"use client";
import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { Header } from "../layout/Header";
import { motion } from "framer-motion";

export function CompanyIntro() {
  const [slide, setSlide] = useState(0);

  return (
    <div>
      <Header />
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative overflow-hidden rounded-2xl">
        {/* Background image / blue grid */}
        <div className="absolute inset-0 -z-20 overflow-hidden rounded-2xl">
          <Image
            src="/images/company_intro_background.png"
            alt="background"
            fill
            priority
            className="object-cover object-center transform scale-[1.02] lg:scale-[1.08]"
          />
        </div>

        {/* Header (transparent over background) */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-[#3696FF] to-[#0039D5]/80 mix-blend-multiply"></div>

        {/* Main content */}
        <section className="relative z-20 py-24 lg:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
              {/* Left: content */}
              <motion.div
                className="md:col-span-8 lg:col-span-8 text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="max-w-3xl">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/30 text-sm text-white mb-4">
                    Chào mừng đến với GoalTech
                  </div>

                  <Heading
                    level={1}
                    className="font-bold text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px] mb-4"
                  >
                    Giải Pháp Công Nghệ Hiện Đại
                    <br />
                    <br />
                    Cho Doanh Nghiệp
                  </Heading>

                  <Paragraph className="text-white/85 mb-8 max-w-[680px]">
                    Chúng tôi mang đến giải pháp phần mềm, chuyển đổi số và công
                    <br />
                    nghệ AI giúp doanh nghiệp phát triển bền vững.
                  </Paragraph>

                  <div className="flex flex-wrap gap-4 items-center">
                    <Button className="h-12 px-5 border-2 border-[#2B7BFF] text-[#2B7BFF] bg-white hover:bg-[#a3ccfa] shadow-md">
                      Tư vấn miễn phí
                    </Button>

                    <Button className="h-12 px-5 border-2 border-[#ffffff] text-[#ffffff]  bg-white/30 hover:bg-[#2B7BFF]">
                      Xem dịch vụ
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Right: hero illustration */}
              <motion.div
                className="md:col-span-4 lg:col-span-4 relative flex justify-end items-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-full max-w-[520px] lg:max-w-[620px]">
                  <Image
                    src="/images/hero_ai_3d.png"
                    alt="Hero"
                    width={820}
                    height={580}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
