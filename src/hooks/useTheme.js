import { useState } from "react";
const themes = { light: "light", dark: "dark" };

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (theme) => {
    setTheme(theme === "light" ? themes.dark : themes.light);
  };

  return { theme, toggleTheme };
};

export default useTheme;
