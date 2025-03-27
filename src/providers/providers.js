"use client";

import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../locales/en.json";
import idMessage from "../locales/id.json";

const messages = {
  en: enMessages,
  id: idMessage,
};


export function LocalizationProvider({ children }) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    setLocale(savedLocale);
  }, []);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}