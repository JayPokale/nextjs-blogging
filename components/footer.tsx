"use client";
import React from "react";
import { Button } from "./ui/button";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="mt-auto p-6 bg-zinc-100 dark:bg-zinc-950 border-t">
      Footer
      <Button
        onClick={() => {
          document.body.classList.toggle("dark");
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        size={"lg"}
        variant={"ghost"}
        className="p-2"
      >
        <Sun />
      </Button>
    </footer>
  );
}
