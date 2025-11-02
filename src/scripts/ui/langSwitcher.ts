import { setLanguage } from "../i18n/i18n";

export function initLangSwitcher() {
  const langSwitcher = document.getElementById("langSwitcher") as HTMLElement;
  const button = langSwitcher.querySelector(".lang-switcher__button") as HTMLButtonElement;
  const dropdown = langSwitcher.querySelector(".lang-switcher__dropdown") as HTMLElement;
  const label = langSwitcher.querySelector(".lang-switcher__label") as HTMLElement;
  const flag = langSwitcher.querySelector(".lang-switcher__flag") as HTMLImageElement;

  function updateLang(lang: string) {
    setLanguage(lang);
    label.textContent = lang.toUpperCase();
    flag.src = `/flags/${lang}.svg`; // ⚠️ без /public/
    flag.alt = lang === "ru" ? "Русский" : "English";
  }

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    langSwitcher.classList.toggle("lang-switcher--open");
  });

  dropdown.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const option = target.closest(".lang-switcher__option") as HTMLElement;
    if (!option) return;
    const lang = option.dataset.lang!;
    updateLang(lang);
    langSwitcher.classList.remove("lang-switcher--open");
  });

  window.addEventListener("click", () => {
    langSwitcher.classList.remove("lang-switcher--open");
  });

  const savedLang = localStorage.getItem("lang") || "ru";
  updateLang(savedLang);
}