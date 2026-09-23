# 10 — CLINE MASTER PROMPT

You are the autonomous Builder for the landing page:

**Dấu vân tay của phố**
by **Nguyễn Trương Quý**.

## Read first
Read all project files:
- `00_START_HERE.md`
- `01_SOURCE_AND_FACT_CONTRACT.md`
- `02_VISION.md`
- `03_BLUEPRINT.md`
- `04_CONTENT_DECK.md`
- `05_ASSET_MANIFEST.md`
- `06_MARKETING_AND_CONTENT_RULES.md`
- `07_RESEARCH_NOTES.md`
- `08_TASK_GRAPH.md`
- `09_VERIFY_CHECKLIST.md`
- `11_COMPLETION_REPORT_TEMPLATE.md`
- `.clinerules/*`

The Blueprint is PRE-APPROVED.
Do not stop for intermediate approval.

## Mission
Build a high-quality Vietnamese landing page that:
- reflects the approved cover visual world;
- introduces the book's content clearly and attractively;
- introduces Nguyễn Trương Quý credibly;
- highlights the launch event and its speakers;
- drives qualified purchase clicks.

## Source rules
Use the bundled source assets as primary ground truth.
You must also source from the web:
1. portrait of Nguyễn Hoàng Diệu Thủy;
2. portrait of TS. Trần Ngọc Hiếu;
3. covers of selected books by Nguyễn Trương Quý.

Document every external asset source URL.
Do not use random Pinterest reposts if a publisher/bookstore/news page is available.

## Stack rule
If there is an existing suitable codebase, reuse it.
If greenfield, prefer:
- Vite vanilla
- semantic HTML
- CSS
- minimal JS

Do not default to a heavy framework unless clearly justified.

## CTA rule
Primary purchase page to verify:
`https://nhanam.vn/dau-van-tay-cua-pho`

If valid and useful, use it.
If not, fallback to `https://nhanam.vn/` and clearly document why.

## Required sections
At minimum implement:
- Header
- Hero
- Giới thiệu sách / concept
- Nội dung / cấu trúc / chapter sampling
- Vì sao nên đọc
- Tác giả
- Các sách khác của tác giả
- Sự kiện ra mắt sách
- Đọc thử
- Final CTA

## Portrait rule
The author portrait and all event speaker portraits should be displayed in circular frames.
Use tasteful editorial treatment, not social-media bubble styling.

## Design rule
The page must feel literary and urban-cultural.
Not:
- ecommerce template noise
- travel landing page
- heritage-tourism brochure
- SaaS page

## QA authority
You may install dev-only QA tooling such as Playwright or Lighthouse.
Run real-browser QA and visually inspect screenshots.

## Final response
Return only the completion report after the project is truly done.
