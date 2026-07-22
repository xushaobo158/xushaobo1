const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 860, height: 898 }, deviceScaleFactor: 1 });
  await page.goto('https://shaobo-xu.com/projects/social-app?cb=' + Date.now(), { waitUntil: 'networkidle', timeout: 60000 });
  await page.screenshot({ path: , fullPage: false });
  await browser.close();
})();
