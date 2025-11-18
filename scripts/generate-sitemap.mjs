import { writeFileSync } from "node:fs"
import { resolve } from "node:path"

const baseUrl = "https://patelprincein.github.io/portfolio"
const routes = ["/", "/#about", "/#skills", "/#projects", "/#learning", "/#github", "/#blog", "/#experience", "/#contact"]

const entries = routes
  .map((route) => {
    const fullPath = route === "/" ? "" : route
    return `  <url>\n    <loc>${baseUrl}${fullPath}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`
  })
  .join("\n")

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`

writeFileSync(resolve("public", "sitemap.xml"), xml)
console.log("sitemap.xml generated")
