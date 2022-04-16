#!/usr/bin/env node
import puppeteer from 'puppeteer';
const urlToScrape = process.argv[2];
if (urlToScrape === undefined || urlToScrape === '') {
    console.error('Usage: scrape-text <URL>');
    process.exit(1);
}
const browser = await puppeteer.launch();
const page = await browser.newPage();
const headlessUserAgent = await page.evaluate(() => navigator.userAgent);
const chromeUserAgent = headlessUserAgent.replace('HeadlessChrome', 'Chrome');
await page.setUserAgent(chromeUserAgent);
await page.setExtraHTTPHeaders({
    'accept-language': 'en-US,en;q=0.8'
});
await page.goto(urlToScrape);
const name = await page.$eval('body', el => el.innerText);
console.log(name);
await browser.close();
