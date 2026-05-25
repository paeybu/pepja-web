import type { ReactNode } from "react";

type Variant = "important" | "warning" | "tip";

const LABELS: Record<Variant, string> = {
  important: "สำคัญ",
  warning: "ระวัง",
  tip: "ทิป",
};

const TONE: Record<
  Variant,
  { color: string; soft: string; icon: ReactNode }
> = {
  important: {
    color: "var(--color-brand)",
    soft: "var(--color-brand-soft)",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  warning: {
    color: "var(--color-guide-safety)",
    soft: "var(--color-guide-safety-soft)",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  tip: {
    color: "var(--color-guide-howto)",
    soft: "var(--color-guide-howto-soft)",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
};

export function Callout({
  variant = "important",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const tone = TONE[variant];
  return (
    <aside
      className="my-6 overflow-hidden rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)]"
      role="note"
    >
      <div
        className="h-1"
        style={{
          background: `linear-gradient(90deg, ${tone.color}, color-mix(in oklab, ${tone.color} 30%, transparent))`,
        }}
      />
      <div className="flex gap-3 p-4">
        <div
          aria-hidden
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
          style={{ background: tone.soft, color: tone.color }}
        >
          {tone.icon}
        </div>
        <div className="min-w-0">
          <p
            className="m-0 text-xs font-semibold uppercase tracking-wider"
            style={{ color: tone.color }}
          >
            {title ?? LABELS[variant]}
          </p>
          <div className="mt-1 text-base leading-[1.75] text-[color:var(--color-ink)]">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
