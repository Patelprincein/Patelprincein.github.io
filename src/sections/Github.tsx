// src/sections/Github.tsx (Modified)

import GithubRepoCard from '../components/cards/GithubRepoCard'
import SectionHeading from '../components/shared/SectionHeading'
import { useGithubPinnedRepos } from '../hooks/useGithubPinnedRepos'
import { siteConfig } from '../config/siteConfig'

const Github = () => {
    const { repos, isLoading, error } = useGithubPinnedRepos()

    // ... (fallbackRepos calculation is unchanged) ...
    const fallbackRepos = siteConfig.projects.gallery.slice(0, 3).map((project) => ({
        repo: project.title,
        description: project.summary,
        language: project.stack[0],
        languageColor: '#38bdf8',
        stars: 0,
        forks: 0,
        link: project.repo,
    }))

    const list = !error && !isLoading && repos.length > 0 ? repos : fallbackRepos

    return (
        <section id="github" className="section github">
            <div className="container">
                <SectionHeading
                    eyebrow="Live repos"
                    title="Auto-synced GitHub feed"
                    description="Fetches pinned repositories from GitHub. Falls back to curated gallery data if the API is rate limited."
                />
                
                {isLoading && <p className="muted">Fetching latest repos...</p>}
                
                {/* New conditional feedback: 
                  Show a helpful message only if there was an error 
                  AND we are rendering the fallback list. 
                */}
                {!isLoading && error && list === fallbackRepos && (
                    <p className="muted">
                        ⚠️ **API Unavailable.** Displaying a curated list from the project gallery due to a loading error: {error}
                    </p>
                )}
                
                <div className="github-grid">
                    {list.map((repo) => (
                        <GithubRepoCard key={repo.repo} repo={repo} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Github