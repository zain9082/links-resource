import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, "project-documentation.html");
const pdfPath = join(__dirname, "Links-Resource-Project-Documentation.pdf");

const chromePaths = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
];

const executablePath = chromePaths.find((p) => existsSync(p));

if (!executablePath) {
  console.error("Chrome not found. Install Google Chrome, then run: npm run docs:pdf");
  process.exit(1);
}

const browser = await puppeteer.launch({
  headless: true,
  executablePath,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--allow-file-access-from-files"],
});

const page = await browser.newPage();
await page.emulateMediaType("print");
await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0", timeout: 120000 });
await page.waitForFunction(() => window.__DOC_READY__ === true, { timeout: 120000 });

await page.pdf({
  path: pdfPath,
  format: "A4",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
  preferCSSPageSize: true,
});

await browser.close();
console.log("PDF created:", pdfPath);
