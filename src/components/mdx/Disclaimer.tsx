export const DISCLAIMER_TEXT =
  "เนื้อหาในเว็บไซต์นี้เป็นการแปลและเรียบเรียงข้อมูลที่มีอยู่แล้วในชุมชนระดับโลก ไม่ใช่คำแนะนำทางการแพทย์ เปปไทด์หลายชนิดในไทยมีสถานะทางกฎหมายและทางการแพทย์ที่ซับซ้อน คุณต้องรับผิดชอบในการตัดสินใจของตัวเอง";

export function Disclaimer() {
  return (
    <div className="flex gap-3 rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-paper-muted)] p-4 text-sm leading-[1.75] text-[color:var(--color-ink-muted)]">
      <div
        aria-hidden
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
        style={{
          background: "var(--color-guide-safety-soft)",
          color: "var(--color-guide-safety)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
      <p className="m-0">
        <span className="font-semibold text-[color:var(--color-ink)]">
          ข้อจำกัดความรับผิดชอบ:
        </span>{" "}
        {DISCLAIMER_TEXT}
      </p>
    </div>
  );
}
