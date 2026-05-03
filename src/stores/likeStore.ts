import { atom } from "nanostores";

export const totalLikeCount = atom(0);

const countStores = new Map<string, ReturnType<typeof atom<number>>>();
const likedStores = new Map<string, ReturnType<typeof atom<boolean>>>();

export function getLikeCount(slug: string) {
  if (!countStores.has(slug)) {
    const store = atom(0);
    let prev = 0;
    store.listen((newVal) => {
      totalLikeCount.set(totalLikeCount.get() + (newVal - prev));
      prev = newVal;
    });
    countStores.set(slug, store);
  }
  return countStores.get(slug)!;
}

export function getLiked(slug: string) {
  if (!likedStores.has(slug)) {
    likedStores.set(slug, atom(false));
  }
  return likedStores.get(slug)!;
}
