"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative bg-[#2B7BFF] py-20 overflow-hidden">
      {/* Background Sóng (Tận dụng lại video hoặc pattern chấm của bạn) */}
      <div className="absolute inset-0 opacity-20 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 translate-y-96" // Chỉnh opacity để text dễ đọc
        >
          <source src="/images/data-wave.mp4" type="video/mp4" />
        </video>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CỘT TRÁI: NỘI DUNG */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Heading
              level={2}
              className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Đồng hành cùng <br /> GoalTech
            </Heading>

            <ul className="space-y-6">
              {[
                "Tối ưu chi phí với công nghệ hiện đại",
                "Phương pháp triển khai linh hoạt theo thời gian",
                "Minh bạch chi phí với cam kết chất lượng",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-white/90"
                >
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button className="bg-white text-[#2B7BFF] hover:bg-blue-50 h-12 px-8 font-bold rounded-lg border-none shadow-lg">
                Tư vấn miễn phí
              </Button>
            </div>
          </motion.div>

          {/* CỘT PHẢI: FORM ĐĂNG KÝ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-[#2B7BFF] text-2xl md:text-3xl font-bold mb-8">
              Đăng ký nhận tư vấn miễn phí
            </h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Khu vực"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Sản phẩm quan tâm"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <textarea
                  placeholder="Mô tả nhu cầu"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                ></textarea>
              </div>

              <Button className="w-full h-14 bg-gradient-to-r from-[#FF8A48] to-[#FF6B2C] text-white font-bold text-lg rounded-xl border-none shadow-orange-200 hover:scale-[1.02] transition-transform">
                Gửi yêu cầu
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
