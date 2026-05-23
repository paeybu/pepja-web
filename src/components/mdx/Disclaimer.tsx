export const DISCLAIMER_TEXT =
  "เนื้อหาในเว็บไซต์นี้เป็นการแปลและเรียบเรียงข้อมูลที่มีอยู่แล้วในชุมชนระดับโลก ไม่ใช่คำแนะนำทางการแพทย์ เปปไทด์หลายชนิดในไทยมีสถานะทางกฎหมายและทางการแพทย์ที่ซับซ้อน คุณต้องรับผิดชอบในการตัดสินใจของตัวเอง";

export function Disclaimer() {
  return (
    <div className="border border-[color:var(--color-rule)] bg-[color:var(--color-paper-muted)] px-4 py-3 text-sm leading-[1.75] text-[color:var(--color-ink-muted)]">
      <p className="m-0">
        <span className="font-semibold text-[color:var(--color-ink)]">
          ข้อจำกัดความรับผิดชอบ:
        </span>{" "}
        {DISCLAIMER_TEXT}
      </p>
    </div>
  );
}
