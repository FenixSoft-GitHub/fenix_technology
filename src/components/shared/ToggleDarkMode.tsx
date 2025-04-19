import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Cambiar modo"
    >
      {isDark ? (
        <FaSun className="text-yellow-500 w-6 h-6" />
      ) : (
        <FaMoon className="text-gray-700 w-6 h-6" />
      )}
    </button>
  );
};

export default ToggleDarkMode;
