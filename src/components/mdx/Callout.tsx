import type { ReactNode } from "react";

type Variant = "important" | "warning" | "tip";

const LABELS: Record<Variant, string> = {
  important: "สำคัญ",
  warning: "ระวัง",
  tip: "ทิป",
};

const TONE: Record<Variant, string> = {
  important: "border-[color:var(--color-accent)] bg-[color:var(--color-paper-muted)]",
  warning: "border-amber-500 bg-amber-500/10",
  tip: "border-sky-500 bg-sky-500/10",
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
  return (
    <aside
      className={`my-6 border-l-4 px-4 py-3 ${TONE[variant]}`}
      role="note"
    >
      <p className="m-0 text-sm font-semibold tracking-wide uppercase">
        {title ?? LABELS[variant]}
      </p>
      <div className="mt-2 text-base leading-[1.75]">{children}</div>
    </aside>
  );
}
