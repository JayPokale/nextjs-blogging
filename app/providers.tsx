"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") document.body.classList.add("dark");
  });

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
