export function updateYear() {
  const yearEl = document.getElementById("year") as HTMLElement;
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}