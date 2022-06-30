import { atom } from "recoil";

export const isLoadingAtom = atom<boolean | "loading">({
  key: "isLoading",
  default: false,
});

export const mainTabSelected = atom<number>({
  key: "mainTabIdx",
  default: 0,
});
