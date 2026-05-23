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

export function SourceBox({ items }: { items: SourceItem[] }) {
  return (
    <section className="my-10 border border-[color:var(--color-rule)] bg-[color:var(--color-paper-muted)] p-5">
      <header className="mb-3">
        <h3 className="m-0 text-base font-semibold">แหล่งซื้อแนะนำ</h3>
        <p className="m-0 mt-1 text-xs text-[color:var(--color-ink-muted)]">
          ลิงก์ด้านล่างเป็น affiliate link — เราได้รับค่าคอมมิชชั่นถ้าคุณกดผ่านลิงก์
          แต่ไม่กระทบราคาที่คุณจ่าย
        </p>
      </header>
      <ul className="m-0 list-none space-y-3 p-0">
        {items.map((item) => (
          <li
            key={item.url}
            className="flex flex-col gap-1 border-t border-[color:var(--color-rule)]/70 pt-3 first:border-t-0 first:pt-0"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                {TIER_LABEL[item.tier]}
              </span>
              <a
                href={item.url}
                rel="sponsored noopener noreferrer"
                target="_blank"
                className="font-medium underline underline-offset-4"
              >
                {item.label}
              </a>
            </div>
            {item.note && (
              <p className="m-0 text-sm text-[color:var(--color-ink-muted)]">
                {item.note}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
