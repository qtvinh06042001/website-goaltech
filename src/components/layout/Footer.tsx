"use client";

import Image from "next/image";
import { Logo } from "@/components/shared/Logo";

const socialIcons = [
  { src: "/images/facebook.svg", alt: "Facebook" },
  { src: "/images/messenger.svg", alt: "Messenger" },
  { src: "/images/tiktok.svg", alt: "TikTok" },
  { src: "/images/instagram.svg", alt: "Instagram" },
  { src: "/images/linkedin.svg", alt: "LinkedIn" },
];

const cols = [
  {
    title: "Giới thiệu",
    links: ["Về chúng tôi", "Câu chuyện thương hiệu", "Đội ngũ nhân viên", "Sản phẩm"],
  },
  {
    title: "Dịch vụ",
    links: [
      "Phát triển Web/App",
      "Chuyển đổi số",
      "AI & Automation",
      "Cloud & DevOps",
    ],
  },
  {
    title: "Dự án",
    links: ["Đối tác", "Dự án nổi bật"],
  },
  {
    title: "Tin tức",
    links: ["Blog", "Về công nghệ"],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* LEFT: logo + contact + social */}
          <div className="w-full lg:w-[320px] flex flex-col gap-6">
            <Logo className="h-12 w-auto" />
            <div className="text-[#7B849F] text-sm space-y-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/phone.svg"
                  alt="phone"
                  width={18}
                  height={18}
                />
                <span>0123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/mail.svg"
                  alt="email"
                  width={18}
                  height={18}
                />
                <span>edtech@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/location.svg"
                  alt="address"
                  width={18}
                  height={18}
                />
                <span>100 Flinders Street, Melbourne VIC</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              {socialIcons.map((icon) => (
                <div
                  key={icon.alt}
                  className="h-9 w-9 rounded-full bg-[#F3F6FB] flex items-center justify-center"
                >
                  <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: link columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {cols.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
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
          <p className="text-black text-sm text-center">
            © 2025 GoalTech
          </p>
        </div>
      </div>
    </footer>
  );
}
