import { atom } from "recoil";
import { localStorageEffect } from "../utils";

const userAtom = atom({
  key: "userAtom",
  default: {},
  // effects: [localStorageEffect("current_auth")],
});

export { userAtom };
