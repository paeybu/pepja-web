export type DoseRow = {
  phase: string;
  dose: string;
  frequency: string;
  notes?: string;
};

export function DoseTable({ rows }: { rows: DoseRow[] }) {
  return (
    <div className="my-10">
      <h3 className="m-0 mb-3 text-lg font-semibold text-[color:var(--color-ink)]">
        ตารางโดส
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-y border-[color:var(--color-rule-strong)]">
              <th className="py-3 pr-6 text-xs font-medium text-[color:var(--color-ink-soft)]">
                ช่วง
              </th>
              <th className="py-3 pr-6 text-xs font-medium text-[color:var(--color-ink-soft)]">
                โดส
              </th>
              <th className="py-3 pr-6 text-xs font-medium text-[color:var(--color-ink-soft)]">
                ความถี่
              </th>
              <th className="py-3 text-xs font-medium text-[color:var(--color-ink-soft)]">
                หมายเหตุ
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-[color:var(--color-rule)] align-top"
              >
                <td className="py-4 pr-6 font-medium text-[color:var(--color-ink)]">
                  {row.phase}
                </td>
                <td className="py-4 pr-6 font-mono font-medium text-[color:var(--color-brand)]">
                  {row.dose}
                </td>
                <td className="py-4 pr-6 text-[color:var(--color-ink-muted)]">
                  {row.frequency}
                </td>
                <td className="py-4 text-[color:var(--color-ink-muted)]">
                  {row.notes ?? "·"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
