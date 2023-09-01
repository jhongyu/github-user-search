import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const cachedTheme = localStorage.getItem("theme");
    if (cachedTheme) {
      return cachedTheme as Theme;
    }

    return "light";
  });

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      });
  }, []);

  useEffect(() => {
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

  return {
    theme: currentTheme,
    isLight: currentTheme === "light",
    isDark: currentTheme === "dark",
    setTheme,
  };
};

export default useTheme;
