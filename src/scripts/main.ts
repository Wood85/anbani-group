import { initLangSwitcher } from "./ui/langSwitcher";
import { initBurgerMenu } from "./ui/burgerMenu";
import { updateYear } from "./ui/yearUpdater";
import { initReviews } from "./ui/reviews";
import { setLanguage } from "./i18n/i18n";

window.addEventListener("DOMContentLoaded", () => {
  initLangSwitcher();
  initBurgerMenu();
  updateYear();
  initReviews();

  const savedLang = localStorage.getItem("lang") || "ru";
  setLanguage(savedLang);
});
