# DẤU VÂN TAY CỦA PHỐ — CLINE AUTONOMOUS CODER PACK

## Goal

Build a polished Vietnamese landing page for:

# **Dấu vân tay của phố**
## Nguyễn Trương Quý

Primary goals:
1. introduce the book's idea and reading value;
2. introduce the author with credibility and depth;
3. present the book-launch event clearly;
4. drive readers toward the purchase CTA.

This is not a generic ecommerce page and not a museum database.
It is a **book landing page with strong editorial storytelling**.

---

## Core business outcome

Optimize for:
- qualified click to the purchase page on Nhã Nam.

Secondary actions:
- open/read sample PDF;
- view event details;
- recognize the author's other books.

---

## Execution mode

Cline must run autonomously:

**SCAN → SOURCE VALIDATION → BUILD → BROWSER QA → REFINE → DONE**

Do not stop for routine approval.
Only stop for a Level-3 blocker:
- exact product URL cannot be verified;
- critical speaker/author image cannot be sourced from a trustworthy page;
- essential source files are corrupted/unreadable;
- architecture must materially change.

---

## Included assets

Inside `source-assets/`:
- `cover-front.jpg`
- `full-cover-spread.jpg`
- `book-mockup-square.jpg`
- `promo-square.jpg`
- `author-portrait.jpg`
- `book-launch-poster.png`
- `read-sample.pdf`
- selected preview renders from the sample PDF

These are approved source assets and must be treated as the primary visual ground truth.

---

## Purchase URL

An exact Nhã Nam product page appears to exist for this title:

`https://nhanam.vn/dau-van-tay-cua-pho`

Use it as the primary purchase CTA unless browser verification proves otherwise.
If it fails in browser QA, temporarily fallback to `https://nhanam.vn/` and document the issue.
