"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const langRef = useRef<HTMLDivElement | null>(null);

  const languages = [
    {
      code: "vi",
      flag: "/images/flags/vi.svg",
      labelKey: "language.vietnamese",
    },
    { code: "en", flag: "/images/flags/en.svg", labelKey: "language.english" },
  ];

  const getLabel = (l: { labelKey: string; code: string }) =>
    t(l.labelKey, l.code === "vi" ? "Tiếng Việt" : "English");

  const [lang, setLang] = useState(() => {
    const initCode =
      (typeof window !== "undefined" &&
        (localStorage.getItem("i18nextLng") || "").split("-")[0]) ||
      (i18n?.language ? i18n.language.split("-")[0] : "vi");
    return languages.find((l) => l.code === initCode) || languages[0];
  });
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const code =
      (i18n?.language && i18n.language.split("-")[0]) ||
      (typeof window !== "undefined" &&
        (localStorage.getItem("i18nextLng") || "").split("-")[0]) ||
      "";
    const found = languages.find((l) => l.code === code);
    if (found) setLang(found);
  }, [i18n?.language]);

  const change = (lng: string) => {
    if (!lng) return;
    i18n.changeLanguage(lng).catch(() => {});
    try {
      localStorage.setItem("i18nextLng", lng);
    } catch {
      /* ignore */
    }
    const found = languages.find((l) => l.code === lng);
    if (found) setLang(found);
  };

  useEffect(() => {
    if (!langOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  return (
    <div className="relative" ref={langRef}>
      <button
        type="button"
        onClick={() => setLangOpen((v) => !v)}
        aria-expanded={langOpen}
        aria-haspopup="menu"
        aria-label={t("language.label", "Language")}
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-slate-50"
      >
        <Image
          src={lang.flag}
          alt={getLabel(lang)}
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
        <ul
          role="menu"
          className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow z-50 overflow-hidden"
        >
          {languages.map((l) => (
            <li key={l.code} role="none">
              <button
                role="menuitem"
                type="button"
                onClick={() => {
                  change(l.code);
                  setLangOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-3"
              >
                <Image
                  src={l.flag}
                  alt={getLabel(l)}
                  width={20}
                  height={14}
                  className="rounded-sm"
                />
                <span className="text-sm">{getLabel(l)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
