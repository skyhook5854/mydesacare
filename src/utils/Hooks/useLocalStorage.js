export const useLocalStorage = () => {
  const getItem = (key) => {
    if (typeof window !== "undefined") {
      const currentData = JSON.parse(localStorage.getItem("customer")) || {};
      return currentData[key];
    }
  };

  const setItem = (key, val) => {
    if (typeof window !== "undefined") {
      const currentData = JSON.parse(localStorage.getItem("customer")) || {};
      currentData[key] = val;
      localStorage.setItem("customer", JSON.stringify(currentData));
    }
  };

  const clear = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("customer", null);
    }
  };

  return {
    getItem: (key) => getItem(key),
    setItem: (key, val) => setItem(key, val),
    clear: () => clear(),
  };
};
