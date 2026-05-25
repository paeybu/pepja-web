import type {
  Difficulty,
  GuideCategory,
  PeptideCategory,
} from "@/lib/content-types";

export type CategoryTheme = {
  label: string;
  color: string;
  soft: string;
};

export const PEPTIDE_CATEGORY_THEME: Record<PeptideCategory, CategoryTheme> = {
  glp1: {
    label: "GLP-1",
    color: "var(--color-cat-glp1)",
    soft: "var(--color-cat-glp1-soft)",
  },
  healing: {
    label: "ฟื้นตัว",
    color: "var(--color-cat-healing)",
    soft: "var(--color-cat-healing-soft)",
  },
  growth: {
    label: "ฮอร์โมนเติบโต",
    color: "var(--color-cat-growth)",
    soft: "var(--color-cat-growth-soft)",
  },
  longevity: {
    label: "อายุยืน",
    color: "var(--color-cat-longevity)",
    soft: "var(--color-cat-longevity-soft)",
  },
  cosmetic: {
    label: "ผิวพรรณ",
    color: "var(--color-cat-cosmetic)",
    soft: "var(--color-cat-cosmetic-soft)",
  },
  other: {
    label: "อื่นๆ",
    color: "var(--color-cat-other)",
    soft: "var(--color-cat-other-soft)",
  },
};

export const GUIDE_CATEGORY_THEME: Record<GuideCategory, CategoryTheme> = {
  "how-to": {
    label: "วิธีทำ",
    color: "var(--color-guide-howto)",
    soft: "var(--color-guide-howto-soft)",
  },
  concept: {
    label: "ทำความเข้าใจ",
    color: "var(--color-guide-concept)",
    soft: "var(--color-guide-concept-soft)",
  },
  safety: {
    label: "ความปลอดภัย",
    color: "var(--color-guide-safety)",
    soft: "var(--color-guide-safety-soft)",
  },
  sourcing: {
    label: "แหล่งซื้อ",
    color: "var(--color-guide-sourcing)",
    soft: "var(--color-guide-sourcing-soft)",
  },
};

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  beginner: "มือใหม่",
  intermediate: "ปานกลาง",
  advanced: "ขั้นสูง",
};

export function getPeptideTheme(category: string): CategoryTheme {
  return (
    PEPTIDE_CATEGORY_THEME[category as PeptideCategory] ??
    PEPTIDE_CATEGORY_THEME.other
  );
}

export function getGuideTheme(category: string): CategoryTheme {
  return (
    GUIDE_CATEGORY_THEME[category as GuideCategory] ??
    GUIDE_CATEGORY_THEME["how-to"]
  );
}
