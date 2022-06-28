import { atom } from "recoil";

export const isFirstLoadAtom = atom({
  key: "isFirstLoaded",
  default: false,
});
