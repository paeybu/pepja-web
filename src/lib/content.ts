import "server-only";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import type {
  GuideFrontmatter,
  PeptideFrontmatter,
} from "./content-types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function normalize(value: unknown): unknown {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  if (Array.isArray(value)) return value.map(normalize);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [
        k,
        normalize(v),
      ])
    );
  }
  return value;
}

function readFrontmatter<T>(absolutePath: string): T {
  const raw = readFileSync(absolutePath, "utf8");
  return normalize(matter(raw).data) as T;
}

function listMdxSlugs(dir: string): string[] {
  return readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export const listPeptides = cache((): PeptideFrontmatter[] => {
  const dir = path.join(CONTENT_ROOT, "peptides");
  const slugs = listMdxSlugs(dir);
  const items = slugs.map((slug) =>
    readFrontmatter<PeptideFrontmatter>(path.join(dir, `${slug}.mdx`))
  );
  return items.sort((a, b) => (a.updated < b.updated ? 1 : -1));
});

export const getPeptideFrontmatter = cache(
  (slug: string): PeptideFrontmatter => {
    return readFrontmatter<PeptideFrontmatter>(
      path.join(CONTENT_ROOT, "peptides", `${slug}.mdx`)
    );
  }
);

export const listGuides = cache((): GuideFrontmatter[] => {
  const dir = path.join(CONTENT_ROOT, "guides");
  const slugs = listMdxSlugs(dir);
  const items = slugs.map((slug) =>
    readFrontmatter<GuideFrontmatter>(path.join(dir, `${slug}.mdx`))
  );
  return items.sort((a, b) => (a.updated < b.updated ? 1 : -1));
});

export const getGuideFrontmatter = cache((slug: string): GuideFrontmatter => {
  return readFrontmatter<GuideFrontmatter>(
    path.join(CONTENT_ROOT, "guides", `${slug}.mdx`)
  );
});

export const SITE_NAME = "Thai Peptide Knowledge Hub";
