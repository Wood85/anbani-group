import { db } from "./../firebase/firebase";
import { ref, push, onValue } from "firebase/database";

export const sendReview = async (name: string, text: string) => {
  await push(ref(db, "reviews"), {
    name,
    text,
    createdAt: Date.now(),
  });
};

export const subscribeToReviews = (render: (data: any) => void) => {
  const reviewsRef = ref(db, "reviews");
  onValue(reviewsRef, (snapshot) => {
    render(snapshot.val());
  });
};

export function initReviews() {
  const form = document.getElementById("reviewForm") as HTMLFormElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const textInput = document.getElementById("text") as HTMLTextAreaElement;
  const list = document.getElementById("reviewsList")!;

  // отправка формы
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!nameInput.value.trim() || !textInput.value.trim()) return;

    await sendReview(nameInput.value, textInput.value);

    form.reset();
  });

  // обновление в реальном времени
  subscribeToReviews((data) => {
    list.innerHTML = "";

    if (!data) return;

    Object.values(data).forEach((review: any) => {
      const card = document.createElement("div");
      card.className = "review reviews__card";

      card.innerHTML = `
      <h4 class="reviews__card-name">${review.name}</h4>
      <div class="reviews__card-text">${review.text}</div>
      <div class="reviews__card-date">${new Date(
        review.createdAt
      ).toLocaleDateString()}</div>
    `;

      list.appendChild(card);
    });
  });
}
