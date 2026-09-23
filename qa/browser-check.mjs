import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const viewports = [
  [360, 800], [390, 844], [768, 1024], [1024, 768], [1440, 1000],
];
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('console', (message) => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
page.on('pageerror', (error) => errors.push(`page: ${error.message}`));
await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
await page.locator('h1').waitFor();
if (!(await page.locator('h1').innerText()).includes('Dấu vân')) throw new Error('Hero title missing');
if (await page.locator('#event .speaker').count() !== 3) throw new Error('Event speaker count is not 3');
if (await page.locator('a[href="https://nhanam.vn/dau-van-tay-cua-pho"]').count() < 2) throw new Error('Purchase CTA missing');
const pdfPagePromise = page.waitForEvent('popup');
const pdfResponse = await page.request.get('http://127.0.0.1:5173/assets/read-sample.pdf');
if (pdfResponse.status() !== 200 || !pdfResponse.headers()['content-type']?.includes('application/pdf')) throw new Error('Sample PDF response is invalid');
await page.locator('a[href="/assets/read-sample.pdf"]').click();
const pdfPage = await pdfPagePromise;
await pdfPage.waitForTimeout(500);
await pdfPage.close();
fs.mkdirSync('qa/screenshots', { recursive: true });
for (const [width, height] of viewports) {
  await page.setViewportSize({ width, height });
  await page.screenshot({ path: `qa/screenshots/${width}x${height}.png`, fullPage: true });
}
if (errors.length) throw new Error(errors.join('\n'));
console.log(`Browser QA passed: ${viewports.length} viewports, PDF link, CTA count, event speakers, no console errors.`);
await browser.close();