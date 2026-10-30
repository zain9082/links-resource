import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const base = process.env.CHECK_BASE_URL ?? "http://127.0.0.1:3000";
const chrome = process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const screenshotDir = path.resolve("docs/screenshots");
await fs.mkdir(screenshotDir, { recursive: true });

const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ["--no-sandbox"] });
try {
  for (const [width, height] of [[1366, 700], [1366, 768], [1920, 1080]]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.goto(base, { waitUntil: "networkidle2" });
    const triggers = await page.$$('nav button[aria-controls^="header-dropdown-"]');
    assert.equal(triggers.length, 4, "Four desktop dropdowns must be present");
    for (const trigger of triggers) {
      await trigger.click();
      await page.waitForFunction(() => !!document.querySelector('nav button[aria-expanded="true"]'));
      await new Promise((resolve) => setTimeout(resolve, 250));
      const result = await page.evaluate(() => {
        const button = document.querySelector('nav button[aria-expanded="true"]');
        const panel = document.getElementById(button.getAttribute("aria-controls"));
        const rect = panel.getBoundingClientRect();
        const grid = panel.querySelector(".grid");
        const columns = getComputedStyle(grid).gridTemplateColumns.split(" ").length;
        const items = panel.querySelectorAll("a");
        return { label: button.textContent.trim(), top: rect.top, bottom: rect.bottom, scrollHeight: panel.scrollHeight, clientHeight: panel.clientHeight, columns, items: items.length, titleSize: getComputedStyle(items[0].querySelector("span")).fontSize, descriptionSize: getComputedStyle(items[0].querySelectorAll("span")[1]).fontSize, bottomLinks: [...panel.querySelectorAll("a")].filter((link) => /Industries|Locations/.test(link.textContent)).map((link) => link.getBoundingClientRect().bottom) };
      });
      assert.ok(result.top >= 0 && result.bottom <= height, `${result.label} panel must fit ${width}×${height}`);
      assert.ok(result.scrollHeight <= result.clientHeight + 1, `${result.label} panel must not scroll`);
      assert.equal(result.columns, result.items >= 6 ? 3 : 2, `${result.label} grid columns`);
      assert.equal(result.titleSize, "15px");
      assert.equal(result.descriptionSize, "13px");
      if (result.label === "SEO") {
        assert.equal(result.bottomLinks.length, 2);
        assert.ok(result.bottomLinks.every((bottom) => bottom <= height), "SEO bottom links must be visible");
        if (width === 1366) await page.screenshot({ path: path.join(screenshotDir, "seo-dropdown-1366x768.png") });
      }
      console.log(`PASS ${width}×${height} ${result.label}: ${Math.round(result.bottom - result.top)}px panel, no scrollbar`);
    }
    await page.keyboard.press("Escape");
    assert.equal(await page.$('nav button[aria-expanded="true"]'), null, "Escape closes dropdown");
    await triggers[0].focus();
    assert.ok(await page.$('nav button[aria-expanded="true"]'), "Focus opens dropdown");
    await page.mouse.click(12, height - 12);
    assert.equal(await page.$('nav button[aria-expanded="true"]'), null, "Outside click closes dropdown");
    console.log(`PASS ${width}×${height} keyboard focus, Escape and outside click`);
    await page.close();
  }

  const mobile = await browser.newPage();
  await mobile.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  await mobile.goto(base, { waitUntil: "networkidle2" });
  await mobile.click('button[aria-label="Toggle menu"]');
  await mobile.waitForFunction(() => document.querySelector('button[aria-label="Toggle menu"]')?.getAttribute("aria-expanded") === "true");
  await new Promise((resolve) => setTimeout(resolve, 250));
  await mobile.screenshot({ path: path.join(screenshotDir, "mobile-menu-390x844.png") });
  const mobileButtons = await mobile.$$('#mobile-site-menu button[aria-expanded][type="button"]');
  const labels = await Promise.all(mobileButtons.map((button) => button.evaluate((element) => element.textContent.trim())));
  assert.ok(["SEO", "Link Building", "For agencies", "More Services"].every((label) => labels.includes(label)), "Mobile accordion structure");
  await mobile.evaluate(() => [...document.querySelectorAll("#mobile-site-menu button")].find((button) => button.textContent.trim() === "SEO")?.click());
  await mobile.waitForFunction(() => [...document.querySelectorAll("#mobile-site-menu button")].some((button) => button.textContent.trim() === "SEO" && button.getAttribute("aria-expanded") === "true"));
  await new Promise((resolve) => setTimeout(resolve, 250));
  await mobile.screenshot({ path: path.join(screenshotDir, "mobile-seo-390x844.png") });
  const horizontalOverflow = await mobile.evaluate(() => document.documentElement.scrollWidth > innerWidth);
  assert.equal(horizontalOverflow, false, "No horizontal overflow on mobile");
  console.log("PASS 390×844 mobile accordion and no horizontal overflow");
  await mobile.close();
} finally {
  await browser.close();
}
