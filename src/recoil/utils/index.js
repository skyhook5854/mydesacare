import { atom } from "recoil";

export const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (process.browser) {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

//language atom

const languageAtom = atom({
  key: "languageAtom",
  default: "English (US)",
  effects: [localStorageEffect("active_language")],
});

export { languageAtom };
