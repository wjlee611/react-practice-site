import { atom } from "recoil";

export const isLoadingAtom = atom<boolean | "loading">({
  key: "isLoading",
  default: false,
});
