import LandingPage from "./landing/page";
import I18nProvider from "../i18n/I18nProvider";

export default function Home() {
  return (
    <I18nProvider>
      <LandingPage />
    </I18nProvider>
  );
}
