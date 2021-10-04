import { useState } from "react";
const themes = { light: "light", dark: "dark" };

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (newTheme) => {
    if (newTheme && ![themes.light, themes.dark].includes(newTheme)) {
      throw Error("Invalid Theme");
    }
    if (!newTheme) {
      setTheme(theme === "light" ? themes.dark : themes.light);
    } else {
      setTheme(newTheme);
    }
  };

  return { theme, toggleTheme };
};

export default useTheme;
