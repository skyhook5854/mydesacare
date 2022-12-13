import { atom } from "recoil";
import { localStorageEffect } from "../utils";

const authAtom = atom({
  key: "authAtom",
  default: null,
  effects: [localStorageEffect("current_auth")],
});

export { authAtom };
