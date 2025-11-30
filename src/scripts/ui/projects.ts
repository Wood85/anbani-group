const categories = [
  { id: "All", label: "All" },
  { id: "projects", label: "Projects" },
  { id: "kitchens", label: "Kitchens" },
  { id: "hallways", label: "Hallways" },
  { id: "bedrooms", label: "Bedrooms" },
  { id: "kidsRooms", label: "Kids’ Rooms" },
  { id: "wardrobes", label: "Wardrobes" },
  { id: "dressingRoom", label: "Dressing Room" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "workspaces", label: "Workspaces" },
  { id: "b2b", label: "B2B" },
];

const items = [
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "projects",
    img: "./src/assets/categories/projects/IMG_2943.JPG",
  },
  {
    category: "kitchens",
    img: "./src/assets/categories/kitchens/IMG_2944.JPG",
  },
  {
    category: "kitchens",
    img: "./src/assets/categories/kitchens/IMG_2944.JPG",
  },
  {
    category: "kitchens",
    img: "./src/assets/categories/kitchens/IMG_2944.JPG",
  },
  {
    category: "kitchens",
    img: "./src/assets/categories/kitchens/IMG_2944.JPG",
  },
  {
    category: "kitchens",
    img: "./src/assets/categories/kitchens/IMG_2944.JPG",
  },
  {
    category: "kitchens",
    img: "./src/assets/categories/kitchens/IMG_2944.JPG",
  },
  {
    category: "kitchens",
    img: "./src/assets/categories/kitchens/IMG_2944.JPG",
  },
];

const ITEMS_PER_PAGE = 9;
let currentPage = 1;
let filteredItems = [...items];
let activeCategory = "All";

function renderFilters() {
  const container = document.querySelector(".tabs");
  const template = document.querySelector(
    ".tabs__btn-template"
  ) as HTMLTemplateElement | null;
  if (!container || !template) return;
  container.innerHTML = "";

  categories.forEach((cat) => {
    const fragment = template.content.cloneNode(true) as DocumentFragment;
    const btn = fragment.querySelector(".tabs__button") as HTMLElement | null;
    if (!btn) return;

    btn.dataset.category = cat.id;
    btn.firstChild!.textContent = cat.label;

    const countDiv = btn.querySelector(
      ".tabs__button-count"
    ) as HTMLElement | null;
    if (countDiv) {
      const count =
        cat.id === "All"
          ? items.length
          : items.filter((item) => item.category === cat.id).length;
      countDiv.textContent = String(count);
    }

    if (cat.id === activeCategory) btn.classList.add("active");

    btn.addEventListener("click", () => {
      activeCategory = cat.id;
      currentPage = 1;
      setActiveTab(btn);
      filterAndRender();
    });

    container.appendChild(fragment);
  });
}

function setActiveTab(btn: HTMLElement) {
  document
    .querySelector<HTMLElement>(".tabs__button.active")
    ?.classList.remove("active");
  btn.classList.add("active");
}

function filterAndRender() {
  filteredItems = [...items];
  if (activeCategory !== "All") {
    filteredItems = filteredItems.filter(
      (item) => item.category === activeCategory
    );
  }

  currentPage = 1;
  renderCardsPage();
}

function renderCardsPage() {
  const container = document.querySelector(".cards") as HTMLElement | null;
  const template = document.querySelector(
    ".cards__card-template"
  ) as HTMLTemplateElement | null;
  if (!container || !template) return;
  container.innerHTML = "";

  const end = currentPage * ITEMS_PER_PAGE;
  const itemsToShow = filteredItems.slice(0, end);

  itemsToShow.forEach((item) => {
    const fragment = template.content.cloneNode(true) as DocumentFragment;
    const img = fragment.querySelector(
      ".card__image"
    ) as HTMLImageElement | null;
    if (!img || !fragment) return;
    img.src = item.img;
    img.alt = `${item.category} image`;

    container.appendChild(fragment);
  });

  const loadMoreBtn = document.querySelector(
    ".content__load-more"
  ) as HTMLButtonElement | null;
  if (itemsToShow.length >= filteredItems.length) {
    if (!loadMoreBtn) return;
    loadMoreBtn.style.display = "none";
  } else {
    if (!loadMoreBtn) return;
    loadMoreBtn.style.display = "block";
  }
}

const loadMoreBtn = document.querySelector<HTMLButtonElement>(
  ".content__load-more"
);

loadMoreBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  currentPage++;
  renderCardsPage();
});

renderFilters();
filterAndRender();
