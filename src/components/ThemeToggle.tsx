"use client";

import { useCallback } from "react";

export function ThemeToggle() {
  const handleClick = useCallback(() => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const resolved = current === "dark" || current === "light" ? current : system;
    const next = resolved === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {}
    root.setAttribute("data-theme", next);
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="สลับโหมดมืด/สว่าง"
      title="สลับโหมดมืด/สว่าง"
      className="theme-toggle inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] text-[color:var(--color-ink-muted)] transition-colors hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
    >
      <SunIcon className="theme-toggle__sun" />
      <MoonIcon className="theme-toggle__moon" />
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
