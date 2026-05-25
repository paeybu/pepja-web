---
name: Pepja
description: Thai-language harm-reduction reference for peptide users, in the spirit of gray.guide and Stairway to Gray.
colors:
  notebook-ink: "#1a1611"
  pencil-brown: "#5c5042"
  margin-fade: "#8a7d6b"
  notebook-cream: "#f7f1de"
  dogeared-cream: "#ede4ca"
  page-cream: "#fdfaf0"
  ruled-line: "#d4c9b3"
  margin-rule: "#b8a988"
  marginalia-forest: "#1f5f4d"
  highlight-moss: "#d6e5dc"
  deep-forest: "#163e33"
  glp1-terracotta: "#b8543b"
  glp1-terracotta-soft: "#f4dbcf"
  healing-forest: "#3d6b3f"
  healing-forest-soft: "#d8e3d2"
  growth-ochre: "#b8862e"
  growth-ochre-soft: "#f0e2bc"
  longevity-aubergine: "#5d3a6b"
  longevity-aubergine-soft: "#e3d4ec"
  cosmetic-rose: "#a85c6c"
  cosmetic-rose-soft: "#f0d8dc"
  other-stone: "#6b6457"
  other-stone-soft: "#e0dccf"
  howto-dustblue: "#3a5d7c"
  howto-dustblue-soft: "#d4dfea"
  concept-inkviolet: "#4a3e6e"
  concept-inkviolet-soft: "#ddd5e8"
  safety-brick: "#8c3d2e"
  safety-brick-soft: "#ecd5cd"
  sourcing-mustard: "#9c7a1a"
  sourcing-mustard-soft: "#ece0b8"
typography:
  display:
    fontFamily: "IBM Plex Sans Thai Looped, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "IBM Plex Sans Thai Looped, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "IBM Plex Sans Thai Looped, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.005em"
  body:
    fontFamily: "IBM Plex Sans Thai Looped, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "normal"
  body-large:
    fontFamily: "IBM Plex Sans Thai Looped, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Sans Thai Looped, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.2em"
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.9em"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  pill: "9999px"
  card: "1rem"
  hero: "1.5rem"
  chip: "9999px"
  control: "0.5rem"
  inset: "0.375rem"
components:
  button-primary:
    backgroundColor: "{colors.marginalia-teal}"
    textColor: "{colors.page-white}"
    rounded: "{rounded.pill}"
    padding: "0.625rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.deep-marginalia}"
    textColor: "{colors.page-white}"
    rounded: "{rounded.pill}"
    padding: "0.625rem 1.25rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.notebook-ink}"
    rounded: "{rounded.pill}"
    padding: "0.625rem 1.25rem"
  button-secondary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.marginalia-teal}"
    rounded: "{rounded.pill}"
    padding: "0.625rem 1.25rem"
  chip-brand:
    backgroundColor: "{colors.highlighter-teal}"
    textColor: "{colors.deep-marginalia}"
    rounded: "{rounded.chip}"
    padding: "0.125rem 0.625rem"
  card:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.notebook-ink}"
    rounded: "{rounded.card}"
    padding: "1.25rem"
  callout:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.notebook-ink}"
    rounded: "{rounded.card}"
    padding: "1rem"
---

# Design System: Pepja

## 1. Overview

**Creative North Star: "The Reader's Notebook"**

Pepja's surface is a reader's notebook. Warm cream page, ruled lines in restrained warm gray, marginalia in teal, color-coded tabs along the edge for category at a glance. The aesthetic descends from gray.guide and Stairway to Gray, two community-written harm-reduction references where the writing is the product and the page exists to amplify reading. The system carries that posture into Thai, with a Thai-optimized body face (IBM Plex Sans Thai Looped) set at 1.85 leading so the script breathes correctly.

The personality is lifted and responsive without being app-like. Card surfaces rest nearly flat and lift on touch. Components recede when not needed; color is wayfinding, not decoration. Every peptide category and guide type owns a hue so a reader can orient by glance. Dark mode is a first-class theme designed for late-night phone reading, not an afterthought toggle.

What Pepja explicitly refuses to feel like, from PRODUCT.md: hype supplement and bro-science sites (no neon, no transformation photos, no urgency banners), fearmongering health blogs (no red-block warnings on every page, no paternalistic "consult a doctor" sprinkled into every paragraph), and generic AI-template SaaS (no hero-metric block, no three-up identical icon cards, no gradient-on-dark "Get started free" pattern). The site must read as a single voice, not as a template.

**Key Characteristics:**
- Warm cream paper, never pure white in non-card surfaces.
- One reader-friendly Thai face across every type role; weight varies, family does not.
- Color coded by content category; ten named hues that always carry meaning.
- Cards rest flat and lift on hover with diffuse shadow.
- Mobile-first reading rhythm with 1.85 body leading.

## 2. Colors

The palette is two layers. A warm-cream neutral system tinted slightly toward the brand teal, plus ten content-coded hues that map directly to peptide categories and guide types. If a color is on the page, it is identifying something: a category, a state, a link, an emphasis. Color is never decoration.

### Primary
- **Marginalia Teal** (#0d9488): The single brand color. Used for primary buttons, links, hover accents, the brand chip, and the logo gradient origin. Named for the teal pen a reader uses for marginalia.
- **Highlighter Teal** (#ccfbf1): The tinted backdrop for brand chips, inline code spans, dose pills, and active-link affordances. Never a primary surface.
- **Deep Marginalia** (#0f766e): The text-on-highlighter tone for chip labels and ink on the soft brand backdrop.

### Secondary (Peptide Category Wayfinding)
Six peptide-category hues. Each owns exactly one role: identifying its peptide category at a glance. Soft variants (`-soft`) back the chip fill and the blurred backdrop blob on detail-page headers.

- **GLP-1 Rose** (#e11d48): Weight-loss peptides (semaglutide, tirzepatide, retatrutide).
- **Healing Emerald** (#059669): Recovery peptides (BPC-157).
- **Growth Amber** (#d97706): Growth-hormone peptides.
- **Longevity Violet** (#7c3aed): Longevity peptides (klow, glow, cagrilintide).
- **Cosmetic Magenta** (#db2777): Skin and cosmetic peptides.
- **Other Slate** (#475569): Uncategorized peptides.

### Tertiary (Guide Category Wayfinding)
Four guide-category hues, the same wayfinding role for guides instead of peptides.

- **How-to Blue** (#2563eb): Practical guides (injection, reconstitution, dosage math).
- **Concept Indigo** (#4f46e5): Conceptual guides ("what are peptides").
- **Safety Red** (#dc2626): Safety guides, warning callouts, the disclaimer icon.
- **Sourcing Gold** (#ca8a04): Sourcing and Thailand-landscape guides.

### Neutral
- **Notebook Ink** (#0f172a): Body text and all heading colors.
- **Pencil Slate** (#475569): Muted secondary text, descriptions, dates.
- **Margin Gray** (#64748b): Faint footnote-class text, "last updated" timestamps, label captions.
- **Notebook Cream** (#fbfaf7): The body background. Warm, tinted slightly toward the teal hue. Never pure white at this scale.
- **Dog-eared Cream** (#f1efe9): The footer fill and table-header surface. A step darker than the body for soft tonal layering.
- **Page White** (#ffffff): Card and hero-surface fill only. Reserved for elevated surfaces against the cream body; never the page itself.
- **Ruled Line** (#e7e2d6): The default card border and divider.
- **Margin Rule** (#d4cdbb): A stronger rule weight for focused or active borders.

### Named Rules

**The Category-Color Rule.** Every peptide category and every guide category owns one hue. The hue appears on the index card (top-stripe and chip), on the detail-page header (top-stripe and blurred backdrop blob), and on the in-text chip. Nowhere else. A reader who learns that violet means longevity learns it once.

**The Cream-Not-White Rule.** The page background is Notebook Cream (#fbfaf7), never Page White. Page White is reserved for elevated card and hero surfaces. The tonal step from cream to white is how depth is conveyed without shadow at rest.

**The One-Voice Rule.** Marginalia Teal is the only brand color. Category colors identify content; they do not represent the brand. A new component that needs a default accent uses teal, not a category color.

## 3. Typography

**Display Font:** IBM Plex Sans Thai Looped (with ui-sans-serif, system-ui, Helvetica Neue, Arial fallback). The looped variant is critical. Thai script is rendered with the looped terminals required for natural Thai reading, not the loopless modernist variant which reads as cold and computational to Thai eyes.

**Body Font:** Same family across every type role. One face, weight contrast carries hierarchy.

**Label / Mono Font:** Geist Mono for dose values and inline code only. Sized at 0.9em so it does not protrude.

**Character:** A single Thai-optimized humanist sans, set at extremely generous leading (1.85) because Thai script sits taller than Latin and needs room to breathe. Weight contrast (400 body, 600 headings) carries hierarchy. Tracking is tight on display sizes (-0.01em) and very wide on uppercase labels (0.2em).

### Hierarchy

- **Display** (600, clamp(2.25rem, 5vw, 3.75rem), 1.15, -0.01em): The home-page hero headline. One per page maximum.
- **Headline** (600, clamp(1.875rem, 3.5vw, 2.25rem), 1.2, -0.01em): Page H1 on every non-home page.
- **Title** (600, 1.5rem, 1.35): Section H2 in long-form articles.
- **Body** (400, 1rem, 1.85): The default reading face. Thai script depends on the 1.85 leading.
- **Body Large** (400, 1.125rem, 1.85): Lead paragraphs under hero or section headers.
- **Label** (600, 0.6875rem, uppercase, 0.2em letter-spacing): All-caps eyebrow text, chip labels, table headers. The widely-tracked label is the system's strongest hierarchical signal after weight.
- **Mono** (400, 0.9em, 1.5): Dose values in tables and inline code only.

### Named Rules

**The 1.85 Rule.** Body line-height is 1.85, not the Latin-default 1.5. Thai script ascends and descends further than Latin; tighter leading collides characters and reads as cramped.

**The Looped Rule.** Only the looped variant of IBM Plex Sans Thai is acceptable. The loopless variant fails the brand-personality test (cold, computational) and is harder for Thai readers at long reading lengths.

**The One-Face Rule.** One family across display, body, label. Weight, size, and tracking carry every hierarchical signal. No serif display, no second sans for "polish".

## 4. Elevation

The elevation philosophy is **flat-by-default, lift on response**. Surfaces are tonally layered at rest. Notebook Cream for the page, Page White for elevated cards. Shadows do not appear until interaction. On hover, cards translate up by 2px and gain a diffuse, deeper shadow. The motion is the cue, not the resting state.

### Shadow Vocabulary

- **Resting card** (`box-shadow: 0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)`): Subtle tonal grounding, barely visible. The card already separates from the page via the cream-to-white tonal step; the shadow is a whisper, not a statement.
- **Lifted card** (`box-shadow: 0 10px 30px -10px rgb(15 23 42 / 0.18), 0 4px 10px -4px rgb(15 23 42 / 0.1)`): Diffuse, drops below the card. Only on hover or active focus.

### Named Rules

**The Flat-By-Default Rule.** Cards rest nearly flat. Lift is a response to state (hover, focus), never a resting decoration. A card with a heavy resting shadow is the SaaS-template tell from PRODUCT.md and is forbidden.

**The No-Glow-On-Text Rule.** Text never carries shadow, glow, or text-shadow of any kind. Glow-on-headings is the supplement-bro tell.

## 5. Components

### Buttons

- **Shape:** Pill (9999px radius). Every button variant is fully rounded.
- **Primary:** Filled Marginalia Teal background, Page White text, 0.625rem vertical and 1.25rem horizontal padding. Hover translates up 2px and adds Resting Card shadow. Used once per page maximum, on the dominant call to action.
- **Secondary / Ghost:** Transparent background, Margin Rule border (1px), Notebook Ink text. Hover swaps border to Marginalia Teal and shifts text to Marginalia Teal.
- **Pill Action (header "คำนวณโดส"):** Teal border, teal text. Hover fills to teal background, white text. Used for utility links to external tools.

### Chips

- **Style:** Pill (9999px), inline-flex with a 6px dot before the label. Background is the soft variant of the role color, text is the saturated variant. Uppercase, 0.2em letter-spacing, 0.6875rem.
- **Roles:** brand (highlighter-teal background, deep-marginalia text), category (each category's `-soft` background plus the saturated text), guide (each guide's `-soft` background plus the saturated text).
- **Behavior:** Static. Chips are tags, not interactive controls.

### Cards / Containers

- **Corner Style:** 1rem radius for content cards, 1.5rem for hero surfaces.
- **Background:** Page White card on Notebook Cream page.
- **Shadow Strategy:** Flat-By-Default. Resting Card shadow is barely visible. Hover transitions to Lifted Card shadow with a 2px upward translate, 200ms ease.
- **Border:** 1px Ruled Line at rest, transitions to Margin Rule on hover.
- **Internal Padding:** 1.25rem standard, 1.5rem on hero cards.
- **Top-Stripe Variant:** Detail-page headers and category cards carry a 4px gradient stripe along the top edge, fading from the category color to a transparent mix. The stripe is the prominent visual carrier of category identity.

### Callouts

Three variants, each carrying its color from the existing palette.

- **Important:** Marginalia Teal stripe and icon-tile. Used for synthesis, "the point of this section".
- **Warning:** Safety Red stripe and icon-tile. Used for irreversible-action warnings, contraindications, hard limits.
- **Tip:** How-to Blue stripe and icon-tile. Used for tactical advice that improves an outcome but is not safety-critical.
- **Shape:** 1rem radius card, 4px gradient top-stripe, 28px rounded icon-tile against the soft variant, label in the saturated color above the body text.

### Dose Table

A signature component for peptide pages.

- **Shape:** 1rem rounded card wrap with overflow:hidden.
- **Header:** Dog-eared Cream fill, label-style header text (uppercase, 0.6875rem, 0.2em tracking, Margin Gray).
- **Rows:** Top-bordered with Ruled Line, hover swaps row background to Dog-eared Cream.
- **Dose Cell:** A teal pill (Highlighter Teal background, Deep Marginalia text, Geist Mono, 0.375rem radius). The dose value is the load-bearing data; the pill is the visual anchor for it.

### Source Box

Affiliate-link container for peptide pages.

- **Shape:** 1rem rounded card with overflow:hidden, Resting Card shadow.
- **Top-Stripe:** Linear gradient from Marginalia Teal to Longevity Violet, the brand-plus-research-grade signal.
- **Tier Chips:** Clinic uses How-to Blue, Pharmacy uses Healing Emerald, Research-grade uses Longevity Violet.
- **Disclosure:** Affiliate-link disclosure sits in the card header, not buried below.

### Navigation

- **Style:** Sticky top bar with backdrop-blur on a semi-transparent Notebook Cream background. The blur is functional (maintains hierarchy as content scrolls beneath), not decorative.
- **Logo:** "เปปจาพอร์ทัล" with a 28px gradient glyph that rotates 6 degrees on group-hover. The gradient runs from Marginalia Teal to Longevity Violet; this is the one place a non-text gradient is allowed.
- **Links:** Pencil Slate, transition to Marginalia Teal on hover.
- **Action Button:** The "คำนวณโดส" pill belongs to the nav, not a separate utility.

### Theme Toggle

A 32px circular button with Page White background and Ruled Line border. Sun and moon icons swap based on `data-theme`. Hover transitions border to Marginalia Teal.

## 6. Do's and Don'ts

### Do:

- **Do** use Marginalia Teal (#0d9488) as the only brand color. Category colors identify content, not the brand.
- **Do** set body line-height to 1.85 for Thai script. Tighter leading collides characters and reads as cramped.
- **Do** carry the category color through index card (top-stripe and chip), detail-page header (top-stripe and blurred backdrop blob), and active states. Nowhere else.
- **Do** use Page White only for elevated card surfaces. Page backgrounds are Notebook Cream.
- **Do** lift cards on hover by translating up 2px and transitioning to the diffuse Lifted Card shadow.
- **Do** keep buttons pill-shaped (9999px radius) across primary, secondary, and utility variants.
- **Do** test every layout at phone width first. PRODUCT.md commits to mobile-first as the baseline.
- **Do** match dark-mode contrast to light mode. Dark is not a dim afterthought, it is a first-class theme.

### Don't:

- **Don't** use any side-stripe (border-left or border-right greater than 1px as a colored accent) on cards or callouts. Use a top-edge gradient stripe instead.
- **Don't** apply gradient backgrounds clipped to text (`background-clip: text` over a gradient). Use solid Marginalia Teal or Notebook Ink. Emphasis is carried by weight and size. The current homepage `.gradient-text` utility is a deviation, flag and remediate.
- **Don't** decorate with glassmorphism. The one allowed blur is the sticky-nav backdrop, which is functional, not decorative.
- **Don't** build the hero-metric template (big number, small label, supporting stats). Pepja is editorial, not a SaaS dashboard. PRODUCT.md anti-reference: **Generic AI-template SaaS**.
- **Don't** build identical three-up icon-card grids. If three cards must appear together, they must differ in role, color, and content shape. PRODUCT.md anti-reference: **Generic AI-template SaaS**.
- **Don't** use red warning blocks on every page. Safety Red is reserved for genuine safety callouts and the disclaimer. Overusing red collapses into the fearmongering-blog tell. PRODUCT.md anti-reference: **Fearmongering health blogs**.
- **Don't** use loud all-caps "BUY NOW", urgency banners, transformation photos, or testosterone-bro voice. PRODUCT.md anti-reference: **Hype supplement and bro-science sites**.
- **Don't** introduce a second font family. Weight and size are the only hierarchy controls.
- **Don't** use pure #000 or #fff for text or borders. Neutrals are tinted toward Marginalia Teal.
- **Don't** apply heavy resting shadows on cards. Shadows are a response to state, not a default.
- **Don't** use the loopless IBM Plex Sans Thai variant. Only the looped variant.
- **Don't** use em dashes in UI copy or article body. Use commas, colons, semicolons, periods, or parentheses.
