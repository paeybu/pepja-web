export type DoseRow = {
  phase: string;
  dose: string;
  frequency: string;
  notes?: string;
};

export function DoseTable({ rows }: { rows: DoseRow[] }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[color:var(--color-rule)] text-xs uppercase tracking-wide text-[color:var(--color-ink-muted)]">
            <th className="py-2 pr-4 font-semibold">ช่วง</th>
            <th className="py-2 pr-4 font-semibold">โดส</th>
            <th className="py-2 pr-4 font-semibold">ความถี่</th>
            <th className="py-2 font-semibold">หมายเหตุ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[color:var(--color-rule)]/60 align-top"
            >
              <td className="py-3 pr-4 font-medium">{row.phase}</td>
              <td className="py-3 pr-4 font-mono">{row.dose}</td>
              <td className="py-3 pr-4">{row.frequency}</td>
              <td className="py-3 text-[color:var(--color-ink-muted)]">
                {row.notes ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
