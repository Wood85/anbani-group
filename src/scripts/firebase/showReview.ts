import { db } from "./firebase";
import { ref, push } from "firebase/database";

export const sendReview = async (name: string, text: string) => {
  await push(ref(db, "reviews"), {
    name,
    text,
    createdAt: Date.now(),
  });
};
