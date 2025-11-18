import { useEffect, useState } from 'react'

export type PinnedRepo = {
  repo: string
  description: string
  language: string
  languageColor?: string
  stars: number
  forks: number
  link: string
}

const API_URL = 'https://gh-pinned-repos.egoist.dev/?username=PatelPrinceIn'

export const useGithubPinnedRepos = () => {
  const [repos, setRepos] = useState<PinnedRepo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const fetchRepos = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Unable to fetch pinned repositories')
        }
        const data = (await response.json()) as PinnedRepo[]
        if (!cancelled) {
          setRepos(data)
          setIsLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error')
          setIsLoading(false)
        }
      }
    }

    fetchRepos()
    return () => {
      cancelled = true
    }
  }, [])

  return { repos, isLoading, error }
}
