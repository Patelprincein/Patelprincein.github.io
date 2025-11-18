import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import matter from 'gray-matter'

const siteUrl = 'https://patelprincein.github.io/portfolio'
const siteTitle = 'Prince Patel | Software & Security'
const siteDescription = 'Portfolio + writing hub for Prince Patel — UNB CS student exploring software, AI, and cybersecurity.'

const postsDir = resolve('src', 'content', 'posts')
const files = readdirSync(postsDir).filter((file) => file.endsWith('.mdx'))

const items = files
  .map((file) => {
    const raw = readFileSync(resolve(postsDir, file), 'utf8')
    const { data, content } = matter(raw)
    const slug = file.replace(/\.mdx$/, '')
    return {
      title: data.title ?? slug,
      date: data.date ?? new Date().toISOString(),
      summary: data.summary ?? content.slice(0, 140),
      link: `${siteUrl}/#blog`,
      content,
    }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const rssItems = items
  .map(
    (item) => `  <item>\n    <title><![CDATA[${item.title}]]></title>\n    <link>${item.link}</link>\n    <guid>${item.link}</guid>\n    <pubDate>${new Date(item.date).toUTCString()}</pubDate>\n    <description><![CDATA[${item.summary}]]></description>\n  </item>`,
  )
  .join('\n')

const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>${siteTitle}</title>\n  <link>${siteUrl}</link>\n  <description>${siteDescription}</description>\n${rssItems}\n</channel>\n</rss>`

writeFileSync(resolve('public', 'feed.xml'), rss)
console.log('feed.xml generated')
