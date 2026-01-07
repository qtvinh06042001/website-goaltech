"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { usePathname, useRouter } from "next/navigation";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import { motion, animate } from "framer-motion";

export function Header() {
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // build nav items using i18n keys (re-renders on language change)
  const navItems = [
    { label: t("home"), href: "/#home" },
    {
      label: t("product"),
      href: "/#product",
      hasDropdown: true,
      submenu: [
        { label: t("goalme", { defaultValue: "GoalMe" }), href: "/#goalme" },
        { label: t("goaledu", { defaultValue: "GoalEdu" }), href: "/#goaledu" },
      ],
    },
    { label: t("service"), href: "/#services" },
    { label: t("digital"), href: "/#digital-transformation" },
    { label: t("project"), href: "/#consultant" },
  ];

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
              ${isActive(item.href)
                        ? "font-semibold text-[#112639] border-[#112639] pb-2"
                        : "font-normal text-[#112639] hover:text-[#1851C1]"
                      }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${activeDropdown === index ? "rotate-180" : ""
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
            ${isActive(item.href)
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
          <LanguageSwitcher />
        </div>

        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <Button className="h-10 xl:h-12 px-5 xl:px-6 text-white text-sm xl:text-base font-semibold bg-gradient-to-b from-[#FFAF8B] to-[#FF5E15] hover:opacity-90">
            {t("contactnow")}
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
                <LanguageSwitcher />
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
                    className={`block py-2 px-2 rounded-md ${isActive(item.href)
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
