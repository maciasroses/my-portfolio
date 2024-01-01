"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "./icons";

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark/white Mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="md:p-4 hover:text-gray-600 dark:hover:text-gray-300 hover:animate-pulse hover:scale-105 duration-300"
    >
      {resolvedTheme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}
