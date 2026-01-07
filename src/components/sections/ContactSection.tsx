"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation("home");

  const rawBenefits = t("contact.benefits", { returnObjects: true });

  const benefits: string[] = Array.isArray(rawBenefits)
    ? rawBenefits
    : [
      t(
        "contact.benefit1",
        "Tối ưu chi phí với công nghệ hiện đại"
      ),
      t(
        "contact.benefit2",
        "Phương pháp triển khai linh hoạt theo thời gian"
      ),
      t(
        "contact.benefit3",
        "Minh bạch chi phí với cam kết chất lượng"
      ),
    ];
  const formTitle = t("contact.form.title", "Đăng ký nhận tư vấn miễn phí");
  const placeholders = {
    name: t("contact.form.placeholders.name", "Họ và tên"),
    phone: t("contact.form.placeholders.phone", "Số điện thoại"),
    email: t("contact.form.placeholders.email", "Email"),
    area: t("contact.form.placeholders.area", "Khu vực"),
    product: t("contact.form.placeholders.product", "Sản phẩm quan tâm"),
    message: t("contact.form.placeholders.message", "Mô tả nhu cầu"),
  };
  const submitText = t("contact.form.submit", "Gửi yêu cầu");
  const ctaText = t("contact.cta", "Tư vấn miễn phí");

  return (
    <section className="relative bg-[#2B7BFF] py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/data-wave.gif"
          alt="data wave"
          className="w-full h-full object-cover opacity-40 translate-y-60"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: CONTENT */}
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
              {t("contact.titlePart1", "Đồng hành cùng")} <br />
              {t("contact.titlePart2", "GoalTech")}
            </Heading>

            <ul className="space-y-6">
              {(Array.isArray(benefits)
                ? benefits
                : [
                  t(
                    "contact.benefit1",
                    "Tối ưu chi phí với công nghệ hiện đại"
                  ),
                  t(
                    "contact.benefit2",
                    "Phương pháp triển khai linh hoạt theo thời gian"
                  ),
                  t(
                    "contact.benefit3",
                    "Minh bạch chi phí với cam kết chất lượng"
                  ),
                ]
              ).map((item, index) => (
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
                {ctaText}
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-[#2B7BFF] text-2xl md:text-3xl font-bold mb-8">
              {formTitle}
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder={placeholders.name}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={placeholders.phone}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <input
                  type="email"
                  placeholder={placeholders.email}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder={placeholders.area}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder={placeholders.product}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <textarea
                  placeholder={placeholders.message}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                ></textarea>
              </div>

              <Button className="w-full h-14 bg-gradient-to-r from-[#FF8A48] to-[#FF6B2C] text-white font-bold text-lg rounded-xl border-none shadow-orange-200 hover:scale-[1.02] transition-transform">
                {submitText}
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
