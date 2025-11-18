import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 720 })
await page.goto('https://patelprincein.github.io/', { waitUntil: 'networkidle2' })
await page.waitForTimeout(2000)
await page.screenshot({ path: '../site.png', fullPage: true })
await browser.close()
