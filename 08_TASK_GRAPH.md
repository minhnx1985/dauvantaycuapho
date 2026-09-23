# 08 — TASK GRAPH

AUTONOMOUS FLOW:
`TIP-01 → TIP-02 → TIP-03 → TIP-04 → TIP-05 → TIP-06`

## TIP-01 — Source scan & verification
- inspect all bundled assets;
- inspect the sample PDF visually;
- verify purchase page in browser;
- web-source speaker portraits;
- web-source 6–10 relevant covers of other books by Nguyễn Trương Quý;
- record all sources.

## TIP-02 — Scaffold
- reuse existing project if appropriate, otherwise greenfield;
- if greenfield, prefer Vite vanilla;
- normalize assets;
- centralize config for purchase/sample URL;
- create design tokens from the cover.

## TIP-03 — Core landing page build
Implement:
- header
- hero
- book-intro sections
- TOC/structure section
- why-read section
- quote block

## TIP-04 — Author + event + sample
Implement:
- author profile with circular portrait;
- other books by author with sourced covers;
- event section with three speakers and circular portraits;
- PDF sample section.

## TIP-05 — SEO / accessibility / analytics
- meta and OG;
- Book structured data grounded in facts;
- semantic landmarks;
- keyboard and focus states;
- reduced motion;
- event data in structured/semantic form if useful;
- analytics hooks only if project already uses analytics.

## TIP-06 — Browser QA and refinement
- run full responsive QA;
- verify purchase CTA, PDF opening, speaker portraits, other-book cover rendering;
- capture mobile and desktop screenshots;
- refine until visually convincing.
