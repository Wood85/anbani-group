import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

export const subscribeToReviews = (callback: (data: any) => void) => {
  const reviewsRef = ref(db, "reviews");

  onValue(reviewsRef, (snapshot) => {
    callback(snapshot.val());
  });
};
