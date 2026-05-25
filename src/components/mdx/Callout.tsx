import type { ReactNode } from "react";

type Variant = "important" | "warning" | "tip";

const LABELS: Record<Variant, string> = {
  important: "หมายเหตุสำคัญ",
  warning: "ระวัง",
  tip: "ทิป",
};

const TONE: Record<Variant, { color: string; soft: string; symbol: string }> = {
  important: {
    color: "var(--color-brand)",
    soft: "var(--color-brand-soft)",
    symbol: "✦",
  },
  warning: {
    color: "var(--color-guide-safety)",
    soft: "var(--color-guide-safety-soft)",
    symbol: "!",
  },
  tip: {
    color: "var(--color-guide-howto)",
    soft: "var(--color-guide-howto-soft)",
    symbol: "→",
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
      className="my-8 border-y border-[color:var(--color-rule-strong)] py-5"
      role="note"
      style={{
        background: `color-mix(in oklab, ${tone.soft} 60%, transparent)`,
      }}
    >
      <p
        className="m-0 flex items-center gap-3 text-sm font-semibold"
        style={{ color: tone.color }}
      >
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full text-xs"
          style={{ background: tone.color, color: "var(--color-paper)" }}
          aria-hidden
        >
          {tone.symbol}
        </span>
        {title ?? LABELS[variant]}
      </p>
      <div className="mt-3 px-1 text-base leading-[1.85] text-[color:var(--color-ink)]">
        {children}
      </div>
    </aside>
  );
}
