import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const viewports = [
  [360, 800], [390, 844], [430, 932], [768, 1024], [1024, 768], [1440, 1000],
];
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('console', (message) => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
page.on('pageerror', (error) => errors.push(`page: ${error.message}`));
await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
await page.locator('h1').waitFor();

if (await page.locator('script[src*="speed-insights/script"]').count() !== 1) throw new Error('Vercel Speed Insights is not loaded exactly once');
if (!(await page.locator('h1').innerText()).includes('Dấu vân tay của phố')) throw new Error('Hero title missing');
if (await page.locator('#event .speaker').count() !== 3) throw new Error('Event speaker count is not 3');
if (await page.locator('a[href="https://nhanam.vn/dau-van-tay-cua-pho"]').count() < 2) throw new Error('Purchase CTA missing');
if (!(await page.locator('body').innerText()).includes('350.000đ')) throw new Error('Book price missing');
if (await page.locator('.marquee, #why, .book-placeholder').count()) throw new Error('Removed template elements are still present');
if (await page.locator('text=/Một chuyến du ngoạn|quen mà chưa bao giờ cũ|Mở một trang sách|trước khi đi xa/').count()) throw new Error('Removed marketing copy is still present');
if (await page.locator('#books .book-list > a').count() !== 2) throw new Error('Other-books section must contain exactly two books');
if (await page.locator('#books img[src*="ha-noi-bao-the-la-thuong"], #books img[src*="trieu-dau-chan-qua-nhung-cua-o"]').count() !== 2) throw new Error('Other-books covers are incomplete');
if (await page.locator('.final-cta img[src*="book-mockup-square"]').count()) throw new Error('Final CTA still uses the mockup image');
if (await page.locator('.page-gallery img').count() < 3) throw new Error('Interior page gallery is incomplete');
if (await page.locator('.page-gallery img').first().isVisible() === false) throw new Error('Interior page preview is hidden');
if (await page.locator('img[loading="lazy"]').count() < 8) throw new Error('Below-fold images are not lazy loaded');
if (await page.locator('.hero img[loading="lazy"]').count()) throw new Error('Hero image must not be lazy loaded');

const pdfResponse = await page.request.get('http://127.0.0.1:5173/assets/read-sample.pdf');
if (pdfResponse.status() !== 200 || !pdfResponse.headers()['content-type']?.includes('application/pdf')) throw new Error('Sample PDF response is invalid');
const pdfPagePromise = page.waitForEvent('popup');
await page.locator('a[href="/assets/read-sample.pdf"]').click();
const pdfPage = await pdfPagePromise;
await pdfPage.waitForTimeout(500);
await pdfPage.close();

fs.mkdirSync('qa/screenshots', { recursive: true });
for (const [width, height] of viewports) {
  await page.setViewportSize({ width, height });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  if (overflow) throw new Error(`Horizontal overflow at ${width}x${height}`);
  await page.screenshot({ path: `qa/screenshots/${width}x${height}.png`, fullPage: true });
}

await page.setViewportSize({ width: 390, height: 844 });
await page.locator('.menu-toggle').click();
if (await page.locator('#site-nav.open').count() !== 1) throw new Error('Mobile menu did not open');
if (await page.locator('.menu-toggle').getAttribute('aria-expanded') !== 'true') throw new Error('Mobile menu aria state is incorrect');

if (errors.length) throw new Error(errors.join('\n'));
console.log(`Browser QA passed: ${viewports.length} viewports, no overflow, interior gallery, PDF, CTAs, event speakers, mobile menu, and no console errors.`);
await browser.close();