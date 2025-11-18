// vite.config.ts (Final Build Fix)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

import type { Pluggable } from 'unified'

// Import only the necessary plugins
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
// NOTE: Removed 'remarkMdxFrontmatter' to avoid double declaration error.

const BASE_PATH = '/' 

export default defineConfig({
  base: BASE_PATH, 
  
  plugins: [
    react({
      jsxRuntime: 'automatic', 
      exclude: /\.mdx$/, 
    }),
    
    // MDX Configuration
    mdx({
      rehypePlugins: [rehypeSlug as Pluggable], 
      remarkPlugins: [
        remarkFrontmatter as Pluggable, // Keeps the YAML/TOML parsing logic
        remarkGfm as Pluggable, 
        // remarkMdxFrontmatter is now REMOVED
      ],
    }),
  ],

  build: {
    chunkSizeWarningLimit: 1500,
  },
})