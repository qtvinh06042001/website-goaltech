"use client";
import "./i18n"; // chỉ import i18n trên client
import { PropsWithChildren } from "react";

export default function I18nProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
}
