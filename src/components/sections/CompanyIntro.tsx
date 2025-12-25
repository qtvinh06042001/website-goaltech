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
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
  };

  return (
    <div className="relative order-0 overflow-hidden">
      {/* Background + Cube */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/company_intro_background.png"
          alt="Company Background"
          fill
          priority
          className="object-cover"
        />

        {/* Cube overlay: chỉ mobile */}
        <div className="absolute inset-x-0 top-[110px] flex justify-center md:hidden overflow-hidden">
          <Image
            src="/images/cube_intro.png"
            alt="Cube Intro"
            width={420}
            height={420}
            priority
            className="w-[92%] max-w-[420px] h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Header */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* Content */}
      <section className="relative z-10 pt-28 sm:pt-32 md:pt-20 pb-16 md:pb-32">
        <Container>
          <div
            className="
              grid grid-cols-1
              md:grid-cols-[1.2fr_0.8fr]
              gap-12 md:gap-16 items-center
              min-h-[70vh]
              xl:mr-36
            "
          >
            {/* ---- Desktop Content (slide từ trên xuống) ---- */}
            <motion.div
              className="hidden md:block space-y-6 mt-3 md:space-y-8"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="space-y-2">
                <Heading
                  level={1}
                  className="font-semibold text-[#1792ED] uppercase tracking-wide leading-tight
                             text-2xl sm:text-3xl md:text-4xl lg:text-[56px]"
                >
                  Đổi mới sáng tạo
                </Heading>
                <Heading
                  level={2}
                  className="
    font-semibold text-[#112639] uppercase tracking-wide leading-tight
    text-2xl sm:text-3xl md:text-4xl lg:text-[56px]
    text-center md:text-left
    break-words whitespace-normal md:whitespace-nowrap
  "
                >
                  Kỷ nguyên vươn mình
                </Heading>
              </div>

              <Paragraph className="font-inter font-normal text-base leading-6 text-[#7B849F] max-w-2xl">
                Antco đồng hành cùng chính phủ và doanh nghiệp trên hành trình
                chuyển đổi số, mang đến các giải pháp công nghệ tùy chỉnh và
                tiên tiến. Chúng tôi tích hợp trí tuệ nhân tạo thông minh, điện
                toán đám mây, hạ tầng bảo mật và phân tích dữ liệu lớn để tối ưu
                hóa quy trình vận hành, nâng cao trải nghiệm người dùng và đảm
                bảo hiệu quả bền vững cho đối tác.
              </Paragraph>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg mt-8">
                <div
                  className="flex-1 flex items-center px-4 py-3
                              bg-white/40 border border-white rounded-full
                              backdrop-blur-md shadow-sm w-full"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                    className="flex-1 bg-transparent outline-none border-none
                     font-inter text-base leading-6 text-[#7B849F]
                     placeholder:text-[#7B849F]"
                  />
                </div>

                <Button
                  withArrow
                  onClick={handleSubmit}
                  className="inline-flex justify-center items-center px-6 py-4 gap-2 w-full sm:w-[165px] h-[56px]
                   font-inter font-semibold text-base leading-6 text-white
                   rounded-full bg-gradient-to-r from-[#2BA9FA] to-[#1851C1]"
                >
                  Liên hệ ngay
                </Button>
              </div>
            </motion.div>

            {/* ---- Mobile Card (slide từ dưới lên) ---- */}
            <motion.div
              className="
                md:hidden
                relative z-20
                mx-auto mt-[360px]
                w-[92%] max-w-[380px]
                p-6
                rounded-[24px]
                bg-white/30 border border-white
                backdrop-blur-[5px]
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                flex flex-col gap-6
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="space-y-2">
                <Heading
                  level={1}
                  className="font-semibold text-[#1792ED] uppercase tracking-wide leading-tight text-2xl"
                >
                  Đổi mới sáng tạo
                </Heading>
                <Heading
                  level={2}
                  className="
                      font-semibold text-[#112639] uppercase tracking-wide leading-tight
                      text-2xl sm:text-3xl md:text-4xl lg:text-[56px]
                      md:whitespace-nowrap
                      "
                >
                  Kỷ nguyên vươn mình
                </Heading>
              </div>

              <Paragraph className="font-inter font-normal text-base leading-6 text-[#7B849F]">
                Antco đồng hành cùng chính phủ và doanh nghiệp trên hành trình
                chuyển đổi số, mang đến các giải pháp công nghệ tùy chỉnh và
                tiên tiến. Chúng tôi tích hợp trí tuệ nhân tạo thông minh, điện
                toán đám mây, hạ tầng bảo mật và phân tích dữ liệu lớn để tối ưu
                hóa quy trình vận hành, nâng cao trải nghiệm người dùng và đảm
                bảo hiệu quả bền vững cho đối tác.
              </Paragraph>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <div
                  className="flex-1 flex items-center px-4 py-3
                              bg-white/40 border border-white rounded-full
                              backdrop-blur-md shadow-sm w-full"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                    className="flex-1 bg-transparent outline-none border-none
                     font-inter text-base leading-6 text-[#7B849F]
                     placeholder:text-[#7B849F]"
                  />
                </div>

                <Button
                  withArrow
                  onClick={handleSubmit}
                  className="inline-flex justify-center items-center px-6 py-4 gap-2 w-full sm:w-[165px] h-[56px]
                   font-inter font-semibold text-base leading-6 text-white
                   rounded-full bg-gradient-to-r from-[#2BA9FA] to-[#1851C1]"
                >
                  Liên hệ ngay
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
