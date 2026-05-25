export type SourceTier = "clinic" | "pharmacy" | "research";

export type SourceItem = {
  tier: SourceTier;
  label: string;
  url: string;
  note?: string;
};

const TIER_LABEL: Record<SourceTier, string> = {
  clinic: "คลินิก",
  pharmacy: "ร้านยา",
  research: "Research-grade",
};

const TIER_COLOR: Record<SourceTier, { color: string; soft: string }> = {
  clinic: {
    color: "var(--color-guide-howto)",
    soft: "var(--color-guide-howto-soft)",
  },
  pharmacy: {
    color: "var(--color-cat-healing)",
    soft: "var(--color-cat-healing-soft)",
  },
  research: {
    color: "var(--color-cat-longevity)",
    soft: "var(--color-cat-longevity-soft)",
  },
};

export function SourceBox({ items }: { items: SourceItem[] }) {
  return (
    <section className="my-10 overflow-hidden rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] shadow-[var(--shadow-card)]">
      <div
        className="h-1"
        style={{
          background:
            "linear-gradient(90deg, var(--color-brand), var(--color-cat-longevity))",
        }}
      />
      <header className="px-5 pt-5">
        <h3 className="m-0 text-base font-semibold">แหล่งซื้อแนะนำ</h3>
        <p className="m-0 mt-1 text-xs text-[color:var(--color-ink-soft)]">
          ลิงก์ด้านล่างเป็น affiliate link — เราได้รับค่าคอมมิชชั่นถ้าคุณกดผ่านลิงก์
          แต่ไม่กระทบราคาที่คุณจ่าย
        </p>
      </header>
      <ul className="m-0 list-none divide-y divide-[color:var(--color-rule)] p-0">
        {items.map((item) => {
          const tone = TIER_COLOR[item.tier];
          return (
            <li key={item.url} className="px-5 py-4">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="chip"
                  style={{ color: tone.color, background: tone.soft }}
                >
                  {TIER_LABEL[item.tier]}
                </span>
                <a
                  href={item.url}
                  rel="sponsored noopener noreferrer"
                  target="_blank"
                  className="font-medium text-[color:var(--color-ink)] underline decoration-[color:var(--color-rule-strong)] decoration-2 underline-offset-4 transition-colors hover:decoration-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
                >
                  {item.label}
                </a>
              </div>
              {item.note && (
                <p className="m-0 mt-2 text-sm text-[color:var(--color-ink-muted)]">
                  {item.note}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
