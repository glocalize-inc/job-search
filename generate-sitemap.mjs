import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.tsx',
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/404.tsx'
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => {
        const path = page
          .replace('pages', '')
          .replace('.tsx', '')
          .replace('index', '')
        const route = path === 'index' ? '' : path
  
        return `
          <url>
            <loc>https://dev.gloground.com/job-search${route}</loc>
            <changefreq>weekly</changefreq>
          </url>
        `
      }).join('')}
    </urlset>
  `
  
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted)
}

generate()


