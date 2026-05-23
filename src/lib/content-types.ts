export type PeptideCategory =
  | "glp1"
  | "healing"
  | "growth"
  | "longevity"
  | "cosmetic"
  | "other";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type LegalStatusTH = "prescription" | "research" | "both";

export type GuideCategory = "how-to" | "concept" | "safety" | "sourcing";

export type PeptideFrontmatter = {
  slug: string;
  name_th: string;
  name_en: string;
  brand_names: string[];
  category: PeptideCategory;
  difficulty: Difficulty;
  legal_status_th: LegalStatusTH;
  short_desc: string;
  updated: string;
  reviewed_by: string | null;
};

export type GuideFrontmatter = {
  slug: string;
  title: string;
  category: GuideCategory;
  difficulty: Difficulty;
  related_peptides: string[];
  updated: string;
};
