// export function initBurgerMenu() {
//   const burgerBtn = document.getElementById("burgerBtn") as HTMLButtonElement;
//   const mainNav = document.getElementById("mainNav") as HTMLElement;
//   const overlay = document.getElementById("overlay") as HTMLElement;

//   burgerBtn.addEventListener("click", () => {
//     burgerBtn.classList.toggle("active");
//     mainNav.classList.toggle("header__nav_open");
//     overlay.classList.toggle("active");
//   });

//   overlay.addEventListener("click", () => {
//     burgerBtn.classList.remove("active");
//     mainNav.classList.remove("header__nav_open");
//     overlay.classList.remove("active");
//   });
// }

export function initBurgerMenu() {
  const burgerBtn = document.getElementById("burgerBtn") as HTMLButtonElement;
  const mainNav = document.getElementById("mainNav") as HTMLElement;
  const overlay = document.getElementById("overlay") as HTMLElement;

  if (!burgerBtn || !mainNav || !overlay) return;

  const toggleMenu = (isOpen: boolean) => {
    burgerBtn.classList.toggle("active", isOpen);
    mainNav.classList.toggle("header__nav_open", isOpen);
    overlay.classList.toggle("active", isOpen);

    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  burgerBtn.addEventListener("click", () => {
    const isOpen = !burgerBtn.classList.contains("active");
    toggleMenu(isOpen);
  });

  overlay.addEventListener("click", () => {
    toggleMenu(false);
  });

  // Если при ресайзе ширина больше 990px — возвращаем скролл
  window.addEventListener("resize", () => {
    if (window.innerWidth > 990) {
      toggleMenu(false);
    }
  });
}