import { initLangSwitcher } from "./ui/langSwitcher";
import { initBurgerMenu } from "./ui/burgerMenu";
import { updateYear } from "./ui/yearUpdater";
import { setLanguage } from "./i18n/i18n";

window.addEventListener("DOMContentLoaded", () => {
  initLangSwitcher();
  initBurgerMenu();
  updateYear();

  const savedLang = localStorage.getItem("lang") || "ru";
  setLanguage(savedLang);
});