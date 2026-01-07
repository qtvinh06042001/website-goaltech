"use client";

import Image from "next/image";
import { Logo } from "@/components/shared/Logo";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("home");

  const socialIcons = [
    { src: "/images/facebook.svg", key: "facebook" },
    { src: "/images/tiktok.svg", key: "tiktok" },
    { src: "/images/instagram.svg", key: "instagram" },
    { src: "/images/linkedin.svg", key: "linkedin" },
  ];

  // cols is an array returned from i18n (returnObjects: true)
  const cols = t("footer.cols", { returnObjects: true }) as {
    title: string;
    links: string[];
  }[];

  const aboutText = t("footer.about.text");
  const address = t("footer.contact.address");
  const email = t("footer.contact.email");
  const phone = t("footer.contact.phone");

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* LEFT: logo + contact + social */}
          <div className="w-full lg:w-[350px] flex flex-col gap-6">
            <Logo className="h-12 cursor-pointer" />
            <div className="flex items-center gap-3">
              <span>{aboutText}</span>
              <br />
            </div>
            <div className="text-[#7B849F] text-sm space-y-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/location.svg"
                  alt="address"
                  width={18}
                  height={18}
                />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/mail.svg"
                  alt="email"
                  width={18}
                  height={18}
                />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/phone.svg"
                  alt="phone"
                  width={18}
                  height={18}
                />
                <span>{phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              {socialIcons.map((icon) => (
                <div
                  key={icon.key}
                  className="h-9 w-9 rounded-full bg-[#F3F6FB] flex items-center justify-center"
                >
                  <Image src={icon.src} alt={icon.key} width={20} height={20} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: link columns */}
          <div className="flex-1 grid grid-cols-3 gap-8">
            {cols.map((col) => (
              <div key={col.title} className="flex flex-col gap-3 mx-auto">
                <h3 className="text-[#112639] font-semibold text-lg">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li
                      key={l}
                      className="text-[#7B849F] text-sm leading-6 hover:text-[#1792ED] cursor-pointer"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="w-full bg-gray-100 py-4 lg:py-6">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 items-center justify-center sm:justify-between gap-3">
          <p className="text-black text-sm text-center">© 2025, GoalTech</p>
        </div>
      </div>
    </footer>
  );
}
