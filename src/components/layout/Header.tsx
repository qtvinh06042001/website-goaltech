"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react"; // <-- added Search
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, animate } from "framer-motion";

const navItems = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Sản phẩm",
    href: "/#products",
    hasDropdown: true,
    submenu: [
      { label: "GoalMe", href: "/#goalme" },
      { label: "GoalEdu", href: "/#goaledu" },
    ],
  },
  { label: "Dịch vụ", href: "/#services" },
  { label: "Chuyển đổi số", href: "/#digital-transformation" },

  { label: "Dự án", href: "/#consultant" },
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // language selector state + ref
  const langRef = useRef<HTMLDivElement | null>(null);
  const languages = [
    { code: "vi", label: "Tiếng Việt", flag: "/images/flags/vi.svg" },
    { code: "en", label: "English", flag: "/images/flags/en.svg" },
  ];
  const [lang, setLang] = useState(languages[0]);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
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

  // close language dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [langOpen]);

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

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor:
          scrolled || mobileOpen
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0)",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "blur(0px)",
        boxShadow:
          scrolled || mobileOpen
            ? "0 4px 16px rgba(0,0,0,0.1)"
            : "0 0 0 rgba(0,0,0,0)",
        marginLeft: scrolled && screenWidth >= 1024 ? screenWidth * 0.02 : 0,
        marginRight: scrolled && screenWidth >= 1024 ? screenWidth * 0.02 : 0,
        marginTop: scrolled && screenWidth >= 1024 ? "20px" : 0,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
  ${mobileOpen ? " lg:rounded-[2.5rem]" : "  lg:rounded-[2.5rem]"}`}
    >
      <motion.div
        className={`flex items-center justify-between h-[72px] lg:h-[96px]
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:gap-8 lg:gap-10 xl:gap-14">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                    className={`flex items-center gap-2 text-[16px] leading-6 whitespace-nowrap
              ${
                isActive(item.href)
                  ? "font-semibold text-[#112639] border-[#112639] pb-2"
                  : "font-normal text-[#112639] hover:text-[#1851C1]"
              }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === index && (
                    <ul
                      className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50 border-[1px] border-[#C2D9FF]"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.submenu?.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-[#112639] hover:bg-[#F5F8FF] hover:text-[#1851C1]"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 text-[16px] leading-6 whitespace-nowrap
            ${
              isActive(item.href)
                ? "font-semibold text-[#112639] border-b-2 border-[#112639] pb-2"
                : "font-normal text-[#112639] hover:text-[#1851C1]"
            }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* search + language selector */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <button className="p-2 rounded-full hover:bg-slate-100">
            <Search className="h-5 w-5 text-[#334155]" />
          </button>

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-slate-50"
            >
              <Image
                src={lang.flag}
                alt={lang.code}
                width={20}
                height={14}
                className="rounded-sm"
              />
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  langOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow z-50 overflow-hidden">
                {languages.map((l) => (
                  <li key={l.code}>
                    <button
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-3"
                    >
                      <Image
                        src={l.flag}
                        alt={l.code}
                        width={20}
                        height={14}
                        className="rounded-sm"
                      />
                      <span className="text-sm">{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <Button className="h-10 xl:h-12 px-5 xl:px-6 text-white text-sm xl:text-base font-semibold bg-gradient-to-b from-[#FFAF8B] to-[#FF5E15] hover:opacity-90">
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

      {/* Mobile Navigation (no animation) */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl"
        >
          <ul className="flex flex-col p-4 gap-3">
            {/* mobile language selector */}
            <li>
              <div className="flex items-center gap-3 px-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLangOpen((v) => !v)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-white"
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.code}
                      width={20}
                      height={14}
                      className="rounded-sm"
                    />
                    <span className="text-sm">{lang.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 ${langOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {langOpen && (
                    <div className="ml-2 bg-white border rounded-md shadow">
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLang(l);
                            setLangOpen(false);
                            setMobileOpen(false);
                          }}
                          className="flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-50"
                        >
                          <Image
                            src={l.flag}
                            alt={l.code}
                            width={20}
                            height={14}
                            className="rounded-sm"
                          />{" "}
                          {l.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
            {navItems.map((item, index) => (
              <li key={index}>
                {item.hasDropdown ? (
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-2 px-2 text-[#112639]">
                      {item.label}
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="pl-4 mt-1 flex flex-col gap-2">
                      {item.submenu?.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block py-1 text-[#112639] hover:text-[#1851C1]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 px-2 rounded-md ${
                      isActive(item.href)
                        ? "font-semibold text-[#112639]"
                        : "font-normal text-[#112639]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
