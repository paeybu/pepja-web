export type DoseRow = {
  phase: string;
  dose: string;
  frequency: string;
  notes?: string;
};

export function DoseTable({ rows }: { rows: DoseRow[] }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-[color:var(--color-paper-muted)]">
            <tr className="text-xs uppercase tracking-wider text-[color:var(--color-ink-soft)]">
              <th className="px-4 py-3 font-semibold">ช่วง</th>
              <th className="px-4 py-3 font-semibold">โดส</th>
              <th className="px-4 py-3 font-semibold">ความถี่</th>
              <th className="px-4 py-3 font-semibold">หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-t border-[color:var(--color-rule)] align-top transition-colors hover:bg-[color:var(--color-paper-muted)]"
              >
                <td className="px-4 py-3 font-medium text-[color:var(--color-ink)]">
                  {row.phase}
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block rounded-md bg-[color:var(--color-brand-soft)] px-2 py-0.5 font-mono text-[color:var(--color-brand-ink)]">
                    {row.dose}
                  </span>
                </td>
                <td className="px-4 py-3 text-[color:var(--color-ink-muted)]">
                  {row.frequency}
                </td>
                <td className="px-4 py-3 text-[color:var(--color-ink-muted)]">
                  {row.notes ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
