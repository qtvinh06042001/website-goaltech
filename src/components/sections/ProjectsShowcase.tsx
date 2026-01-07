"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const products = [
  {
    key: "goalme",
    logo: "/images/logo-goalme.png",
    image: "/images/goalme_app.png",
  },
  {
    key: "goalmanager",
    logo: "/images/logo-goalme.png",
    image: "/images/goalme_app.png",
  },
];

export function ProjectsShowcase() {
  const { t } = useTranslation("home");
  const [active, setActive] = useState(products[0].key);
  const productMeta = products.find((p) => p.key === active)!;

  const product = {
    label: t(`projects.${productMeta.key}.label`, {
      defaultValue: productMeta.key,
    }),
    title: t(`projects.${productMeta.key}.title`),
    description: t(`projects.${productMeta.key}.description`),
    features: t(`projects.${productMeta.key}.features`, {
      returnObjects: true,
    }) as string[],
    cta: t(`projects.${productMeta.key}.cta`),
    logo: productMeta.logo,
    image: productMeta.image,
    key: productMeta.key,
  };

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-[#1851C1] border border-[#DDEBFF] px-3 py-1 rounded-md text-sm shadow-sm">
            <Image
              src="/images/icons/head.svg"
              alt={t("projects.badge", "Sản Phẩm")}
              width={18}
              height={18}
              className="w-4.5 h-4.5"
            />
            <span>{t("projects.badge", "Sản Phẩm")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1724] text-center">
            {t("projects.titlePart1", "Sản phẩm")}{" "}
            <span className="text-blue-600">
              {t("projects.titlePart2", "Nổi Bật")}
            </span>
          </h2>

          <p className="text-center text-[#6B7280] max-w-2xl">
            {t(
              "projects.subtitle",
              "Giải pháp toàn diện cho mọi nhu cầu công nghệ của doanh nghiệp"
            )}
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
              {t(`projects.${p.key}.label`, p.key)}
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
                {product.features?.map((f, i) => (
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
                alt={product.title}
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
