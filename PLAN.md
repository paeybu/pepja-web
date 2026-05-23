# Thai Peptide Knowledge Hub — Project Plan

> Source of truth for the project. Read this first before making structural decisions.

---

## 1. What this is

A plain-Thai knowledge hub about peptides, written for adults who have already decided to look into the topic. Same lane as [gray.guide](https://www.gray.guide) and [stairwaytogray.com](https://www.stairwaytogray.com) — but for a Thai-speaking audience.

The information already exists in English (Reddit, Gray Guide, STG, forum posts). A curious Thai person currently has to either read English fluently to navigate that, or piece things together from Thai clinic marketing pages. This site is the bridge.

## 2. Positioning

**Plain-Thai information about peptides for adults who've decided to look into it. No clinic sales pitch, no panic, no gatekeeping. Just what the global community already knows, translated for Thais.**

Stance:

- **Harm reduction over gatekeeping.** Adults can read, decide, and act for themselves.
- **Information, not advice.** We translate and organize existing community knowledge — we don't generate new medical claims.
- **Honest about tradeoffs.** Every path (clinic / pharmacy / research-grade) has real costs and real risks. We name them.
- **No fear-driven boilerplate.** One honest footer disclaimer covers the site. Articles don't lecture.

Tagline candidate (homepage):
> **"เขียนเพื่อให้คุณตัดสินใจเองได้ ไม่ใช่เพื่อขายของหรือกันคุณออกจากข้อมูล"**
> (Written so you can decide for yourself — not to sell you something or keep information from you.)

## 3. Audience

Primary: **beginners to intermediate**, Thai-speaking, adults curious about peptides — most likely entry point is GLP-1 weight loss (semaglutide, tirzepatide), secondary entry is recovery/healing (BPC-157, TB-500).

Not the audience: advanced researchers, clinical professionals, people looking for English-language content.

## 4. Monetization

**Affiliate / vendor referrals only.** No paywall, no premium tier, no ads in v1.

Mix, in rough priority:

1. **Research-grade vendor affiliates** — primary revenue. Highest commissions, aligns with the audience that comes for sourcing info.
2. **Supplies affiliates** — BAC water, insulin syringes, alcohol swabs. Boring but converts well next to how-to content.
3. **Lab testing service affiliates** — third-party COA / purity testing.
4. **Thai clinic partnerships** — secondary, for readers who decide they want the supervised route.

Every peptide deep-dive ends with a `<SourceBox />` listing 2–3 vetted partner options at different price/legality tiers. Disclosure built into the component.

---

## 5. Tech stack

- **Next.js** (App Router) — already bootstrapped
- **MDX** content authored in-repo
  - Recommended: `contentlayer2` for typed frontmatter and auto-generated indexes
  - Fallback: `next-mdx-remote` if contentlayer setup is painful
- **Tailwind CSS** for styling
- **Thai fonts:** IBM Plex Sans Thai Looped (primary) or Noto Sans Thai Looped. Use looped variants for body text — they're more readable for long-form Thai.
- **Hosting:** Vercel or Cloudflare Pages
- **Analytics:** Plausible (privacy-respecting, no cookie banner needed)
- **Language:** Thai only. Set `lang="th"` on `<html>`. No i18n setup needed in v1.

### Typography notes

- Line height ~1.7–1.8 for Thai body text (more than English's 1.5)
- Avoid unlooped Thai fonts for body — only acceptable for short headlines
- Mix in English jargon in parentheses on first use: `การผสมยา (reconstitution)`. Don't pretend the English terms don't exist.

---

## 6. Sitemap (v1)

Keep it small. Resist adding pages — empty sections hurt trust.

```
/                          หน้าแรก — positioning + entry points
/start                     เริ่มที่นี่ — beginner funnel page
/peptides                  index of all peptide deep-dives
/peptides/[slug]           individual peptide pages
/guides                    index of guides
/guides/[slug]             individual guide articles
/sources                   เรื่องแหล่งซื้อ — sourcing framework + partners
/about                     about + editorial stance + disclaimer
```

Header nav: **เริ่มที่นี่** / **เปปไทด์** / **คู่มือ** / **แหล่งซื้อ**

Not in v1: blog, news, community/forum, multi-language, search (add later if needed).

The dosage calculator lives separately — link to it prominently from `/guides/dosage-math` and the global header.

---

## 7. Content model

Three content types, all MDX files with typed frontmatter.

### `content/peptides/*.mdx`

```yaml
---
slug: semaglutide
name_th: เซมากลูไทด์
name_en: Semaglutide
brand_names: [Ozempic, Wegovy, Rybelsus]
category: glp1                    # glp1 | healing | growth | longevity | cosmetic | other
difficulty: beginner              # beginner | intermediate | advanced
legal_status_th: prescription     # prescription | research | both
short_desc: "ตัวยา GLP-1 สำหรับลดน้ำหนักและเบาหวานชนิดที่ 2"
updated: 2026-05-23
reviewed_by: null
---
```

### `content/guides/*.mdx`

```yaml
---
slug: reconstitution-basics
title: วิธีผสมเปปไทด์ (Reconstitution) ฉบับเริ่มต้น
category: how-to                  # how-to | concept | safety | sourcing
difficulty: beginner
related_peptides: [bpc-157, semaglutide]
updated: 2026-05-23
---
```

### `content/sources/*.mdx` (later, v2+)

Vendor / clinic reviews with affiliate links. Schema TBD.

### Folder layout

```
content/
  peptides/
    semaglutide.mdx
    tirzepatide.mdx
    bpc-157.mdx
    ...
  guides/
    what-are-peptides.mdx
    reconstitution-basics.mdx
    dosage-math.mdx
    ...
components/
  mdx/
    Callout.tsx          # "สำคัญ" / "ระวัง" / "ทิป" boxes
    Disclaimer.tsx       # global, one source of truth
    DoseTable.tsx        # reusable dose-range table
    SourceBox.tsx        # affiliate CTA at article end
    RelatedPeptides.tsx  # links to other peptide pages
```

---

## 8. First 10 articles (priority order)

Write in this exact order. Each builds on the previous; early ones earn search traffic fastest.

1. **`/start` — เริ่มที่นี่: คู่มือเปปไทด์สำหรับมือใหม่**
   Landing page, not really an article. Routes users by goal: "ลดน้ำหนัก → GLP-1," "ฟื้นตัวจากบาดเจ็บ → BPC-157," etc.

2. **`guides/what-are-peptides` — เปปไทด์คืออะไร และทำไมคนถึงใช้กัน**
   Pillar piece. What peptides are, why they're not quite supplements and not quite drugs, the three grades (pharmaceutical / compounded / research), why the same molecule can be all three.

3. **`guides/thailand-landscape` — เปปไทด์ในไทย: คลินิก, ร้านยา, หรือสั่งเอง**
   **The biggest differentiator.** Three routes compared honestly: clinic (legal, expensive, supervised), pharmacy (rare, limited), research-grade self-source (cheapest, you carry all risk). Real costs in baht. Customs reality. Tradeoffs named.

4. **`peptides/semaglutide` — เซมากลูไทด์ (Ozempic/Wegovy)**
   Highest search volume. Mechanism, typical dose ranges, titration, side effects (especially GI), what to expect month by month, comparison to tirzepatide.

5. **`peptides/tirzepatide` — เทอร์เซพาไทด์ (Mounjaro)**
   Second highest demand. Same structure as #4. Thai FDA approval status noted.

6. **`guides/reconstitution-basics` — วิธีผสมเปปไทด์ฉบับเริ่มต้น**
   Most-googled how-to in the grey market. BAC water, vial math, sterile technique, common mistakes. Links to calculator.

7. **`guides/dosage-math` — คำนวณโดสยังไงไม่ให้พลาด**
   Companion to #6. Units (mg, mcg, IU), syringe markings, "how many ticks?" question. Links to calculator as the "do this for me" option.

8. **`guides/injection-technique` — วิธีฉีดใต้ผิวหนัง (subq) สำหรับมือใหม่**
   Injection sites, needle sizes available in Thailand, rotation, bruising, hitting a blood vessel.

9. **`peptides/bpc-157` — BPC-157**
   Gateway non-GLP-1 peptide. Healing/recovery audience (gym, sports, injury).

10. **`guides/storage` — เก็บเปปไทด์ยังไงไม่ให้เสีย**
    Reconstituted vs lyophilized, fridge vs freezer, travel, shelf life, signs it's gone bad.

After these 10, the site is real and coherent. Evaluate traffic before committing more content.

---

## 9. Content pillars (the full taxonomy)

Articles in #8 above slot into these pillars. Expand each pillar later based on traffic data.

| Pillar | Thai | Purpose |
|---|---|---|
| 1. Peptides 101 | เปปไทด์เบื้องต้น | Top-of-funnel concepts |
| 2. Thailand-specific | เปปไทด์ในไทย | **The moat.** Legal status, clinic/pharmacy/research-grade comparison, customs, payment norms |
| 3. Practical how-to | วิธีใช้จริง | Reconstitution, dosing, injection, storage |
| 4. Peptide deep-dives | เปปไทด์แต่ละชนิด | One page per peptide. SEO long tail + affiliate placement |
| 5. Safety & red flags | ความปลอดภัย | Contraindications, bad product signs, when to stop. Linked from every peptide page. |
| 6. Sourcing & vendors | แหล่งซื้อ | How to evaluate a source. Vendor evaluation framework. Where affiliate revenue lives. |

---

## 10. Thai voice / style guide

Five rules. Tape this to the monitor.

1. **Address the reader as คุณ, not "ผู้ที่สนใจ" or "ผู้ใช้."** Clinic marketing talks at people. We talk to them.

2. **Mix Thai with the English term in parentheses on first use.** `การผสมยา (reconstitution)` — then just use the Thai for the rest of the article. Thais researching this are already half-fluent in the jargon.

3. **No "ควรปรึกษาแพทย์" reflex.** One honest disclaimer in the footer covers the site. Don't sprinkle it through articles — it signals you don't trust the reader. Where real medical danger exists, be specific: `อย่าใช้ถ้าคุณ...` not `ปรึกษาแพทย์ก่อน`.

4. **Numbers are concrete, not hedged.** `โดสเริ่มต้นปกติคือ 0.25 mg/สัปดาห์ ฉีดติดต่อกัน 4 สัปดาห์ก่อนเพิ่ม` beats `ควรเริ่มจากโดสต่ำ`. The whole point is that clinic pages refuse to give numbers.

5. **Acknowledge tradeoffs out loud.** Every path has downsides. Naming them makes the rest of the writing more believable.

---

## 11. SEO basics (day one)

- **Title pattern (peptide pages):** `[Name TH] ([Name EN]) — ข้อมูล โดส วิธีใช้ | [Sitename]`
- **Title pattern (guide pages):** `[Article Title] | [Sitename]`
- Open Graph images auto-generated per page using Next.js `opengraph-image.tsx`
- Auto-generated `sitemap.xml`, submitted to Google Search Console
- Schema.org `Article` JSON-LD on every guide and peptide page
- Canonical URLs set on every page
- All images: `alt` text in Thai

---

## 12. Phased rollout

**Phase 0 — Foundations (this is where we are)**
- ✅ Stack picked (Next.js)
- Lock name and domain
- Set up MDX content pipeline + frontmatter schemas
- Build the 4 core MDX components (`Callout`, `Disclaimer`, `DoseTable`, `SourceBox`)
- Design system: homepage mock + article template
- Write articles #1 and #2 to lock voice

**Phase 1 — Knowledge base v1 (4–8 weeks)**
- Articles #3–#10 written
- Launch publicly
- Submit sitemap, start SEO
- Add Plausible analytics

**Phase 2 — Expansion (after launch traction)**
- Expand peptide library (retatrutide, TB-500, CJC-1295, ipamorelin, GHK-Cu, etc.)
- Expand how-to library
- Add search if traffic warrants

**Phase 3 — Sourcing & affiliates (after content authority is established)**
- Build out `/sources` with vendor evaluation framework
- Layer in affiliate partners
- `<SourceBox />` populated on peptide pages

**Phase 4 — Community (optional, much later)**
- LINE OpenChat or Discord
- User Q&A
- Only after audience is worth gathering

---

## 13. What's explicitly out of scope

These are deliberate omissions, not oversights:

- ❌ **Multi-language.** Thai only.
- ❌ **The dosage calculator.** Lives as a separate project, linked to from this site.
- ❌ **User accounts / login.**
- ❌ **Comments / forum.**
- ❌ **E-commerce / cart.** Affiliate links only.
- ❌ **CMS UI.** MDX in git is the authoring interface.
- ❌ **Newsletter** in v1. Add later if there's demand.
- ❌ **Defensive medical disclaimer language** in every article. One footer disclaimer.

---

## 14. Open decisions

Things to lock before going deep:

- [ ] **Domain name.** Brainstorm separately.
- [ ] **Visual identity.** Logo, color palette, illustration style. Aim for clean / clinical-but-not-corporate. Closer to gray.guide's restraint than to clinic marketing.
- [ ] **Contentlayer vs next-mdx-remote** — pick one early
- [ ] **Where the calculator lives** (subdomain like `calc.[domain]` vs separate domain) so we can wire the link correctly
- [ ] **Disclaimer wording** — one final Thai draft, used in `<Disclaimer />` component

---

## 15. Immediate next steps for Claude Code

In this order:

1. Confirm the Next.js App Router setup is in place
2. Install and configure MDX pipeline (contentlayer2 recommended)
3. Set up Thai fonts (IBM Plex Sans Thai Looped) and base Tailwind config with appropriate line-height defaults for Thai body text
4. Create the 4 core MDX components (`Callout`, `Disclaimer`, `DoseTable`, `SourceBox`) as stubs
5. Build the article template at `/peptides/[slug]` and `/guides/[slug]`
6. Build the listing pages at `/peptides` and `/guides`
7. Create one placeholder peptide MDX (`semaglutide.mdx`) and one placeholder guide MDX (`what-are-peptides.mdx`) to validate the pipeline end-to-end
8. Set up sitemap, OG image generation, and Plausible
9. Hand back for content drafting

Voice and content rules from sections 2 and 10 above apply to every page rendered.
