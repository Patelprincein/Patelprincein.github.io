import type { ComponentType } from 'react'
import { getReadingStats } from '../../utils/reading'
import PostEthical, { frontmatter as postEthicalFrontmatter } from './01-ethical-hacking.mdx'
import postEthicalRaw from './01-ethical-hacking.mdx?raw'
import PostFer, { frontmatter as postFerFrontmatter } from './02-fer-journal.mdx'
import postFerRaw from './02-fer-journal.mdx?raw'

export type BlogPost = {
  slug: string
  Component: ComponentType
  title: string
  date: string
  tags: string[]
  summary: string
  cover?: string
  readingTime: string
  minutes: number
}

const mapPost = (
  slug: string,
  Component: ComponentType,
  frontmatter: Record<string, any>,
  raw: string,
): BlogPost => {
  const stats = getReadingStats(raw)
  return {
    slug,
    Component,
    title: frontmatter.title as string,
    date: frontmatter.date as string,
    tags: (frontmatter.tags as string[]) ?? [],
    summary: frontmatter.summary as string,
    cover: frontmatter.cover as string,
    readingTime: stats.text,
    minutes: stats.minutes,
  }
}

export const blogPosts: BlogPost[] = [
  mapPost('ethical-hacking', PostEthical, postEthicalFrontmatter, postEthicalRaw),
  mapPost('fer-journal', PostFer, postFerFrontmatter, postFerRaw),
]
