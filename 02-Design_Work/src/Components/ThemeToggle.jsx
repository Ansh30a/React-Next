import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Set initial theme from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved ? saved === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldBeDark);
    setIsDark(shouldBeDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-sm"
      aria-label="Toggle color theme"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
