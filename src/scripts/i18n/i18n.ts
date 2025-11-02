import { translations } from "./translations";

export function setLanguage(lang: string) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n")!;
    (el as HTMLElement).textContent = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
}