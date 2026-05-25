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

const TIER_COLOR: Record<SourceTier, string> = {
  clinic: "var(--color-guide-howto)",
  pharmacy: "var(--color-cat-healing)",
  research: "var(--color-cat-longevity)",
};

export function SourceBox({ items }: { items: SourceItem[] }) {
  return (
    <section className="my-12 border-y border-[color:var(--color-rule-strong)] py-8">
      <header className="mb-6">
        <h3 className="m-0 text-lg font-semibold text-[color:var(--color-ink)]">
          แหล่งซื้อแนะนำ
        </h3>
        <p className="m-0 mt-2 max-w-[58ch] text-sm text-[color:var(--color-ink-soft)]">
          ลิงก์ด้านล่างเป็น affiliate link เราได้รับค่าคอมมิชชั่นถ้าคุณกดผ่านลิงก์
          แต่ไม่กระทบราคาที่คุณจ่าย
        </p>
      </header>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li
            key={item.url}
            className="border-t border-[color:var(--color-rule)] py-4 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <a
                href={item.url}
                rel="sponsored noopener noreferrer"
                target="_blank"
                className="editorial-link text-base text-[color:var(--color-ink)]"
              >
                {item.label} ↗
              </a>
              <span
                className="cat-tag"
                style={{ ["--cat-tag-color" as string]: TIER_COLOR[item.tier] }}
              >
                {TIER_LABEL[item.tier]}
              </span>
            </div>
            {item.note && (
              <p className="m-0 mt-2 text-sm text-[color:var(--color-ink-muted)]">
                {item.note}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
