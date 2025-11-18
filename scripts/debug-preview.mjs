import puppeteer from 'puppeteer'

const url = process.argv[2] ?? 'http://localhost:4173/'
const browser = await puppeteer.launch({ headless: 'new' })
const page = await browser.newPage()
page.on('console', (msg) => console.log('[console]', msg.type(), msg.text()))
page.on('pageerror', (err) => console.error('[pageerror]', err))
await page.goto(url, { waitUntil: 'networkidle2' })
await page.waitForTimeout(2000)
const content = await page.content()
console.log('Page length:', content.length)
await browser.close()
