"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { usePathname, useRouter } from "next/navigation";
import { motion, animate } from "framer-motion";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/#introduce" },
  { label: "Dịch vụ", href: "/#services" },
  { label: "Sản phẩm", href: "/#products" },
  { label: "Dự án", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Tuyển dụng", href: "/#recruitment" },
  { label: "Liên hệ", href: "/#consultant" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const scrollToTop = () => {
    const currentY = window.scrollY;
    animate(currentY, 0, {
      duration: 0.6,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  const headerPositionClass =
    scrolled || mobileOpen ? "fixed top-0 left-0 right-0" : "relative";

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: "rgba(255,255,255,1)",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "blur(0px)",
        boxShadow:
          scrolled || mobileOpen
            ? "0 4px 16px rgba(0,0,0,0.1)"
            : "0 0 0 rgba(0,0,0,0)",
        marginLeft: scrolled && screenWidth >= 1024 ? screenWidth * 0.02 : 0,
        marginRight: scrolled && screenWidth >= 1024 ? screenWidth * 0.02 : 0,
        marginTop: scrolled && screenWidth >= 1024 ? "20px" : 0,
      }}
      className={`${headerPositionClass} top-0 left-0 right-0 z-50 transition-all duration-300
  ${mobileOpen ? " lg:rounded-[2.5rem]" : "  lg:rounded-[2.5rem]"}`}
    >
      <motion.div
        className={`flex items-center justify-between h-[64px] lg:h-[72px]
      px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
      ${scrolled ? "py-3 lg:py-4" : "py-4 lg:py-6"}
    `}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Logo → giữ scrollToTop */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (pathname === "/") {
              scrollToTop();
            } else {
              router.push("/");
            }
            setMobileOpen(false);
          }}
        >
          <Logo className="h-8 lg:h-10 w-auto cursor-pointer" />
        </Link>

        {/* Desktop Navigation (no dropdown) */}
        <nav className="hidden lg:flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 relative">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2 text-[16px] leading-6 whitespace-nowrap
            ${
              isActive(item.href)
                ? "font-semibold text-[#1851C1] border-[#112639]"
                : "font-normal text-[#112639] hover:text-[#1851C1]"
            }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <Button className="h-10 xl:h-12 px-4 xl:px-5 text-sm xl:text-base font-semibold border-2 border-[#2B7BFF] text-[#2B7BFF] bg-white hover:bg-[#a3ccfa] transition">
            Tư vấn miễn phí
          </Button>
          <Button className="h-10 xl:h-12 px-4 xl:px-5 text-sm xl:text-base font-semibold text-white bg-gradient-to-b from-[#FF8A3A] to-[#FF5A00] shadow-md hover:opacity-95 transition">
            Liên hệ ngay
          </Button>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </motion.div>

      {/* Mobile Navigation (no dropdown) */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl"
        >
          <ul className="flex flex-col p-4 gap-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 px-2 rounded-md ${
                    isActive(item.href)
                      ? "font-semibold text-[#1851C1]"
                      : "font-normal text-[#112639]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
