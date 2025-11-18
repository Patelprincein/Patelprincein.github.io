import { useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { blogPosts } from '../content/posts'
import { MDXComponents } from '../components/blog/MDXComponents'
import BlogPostCard from '../components/blog/BlogPostCard'
import SectionHeading from '../components/shared/SectionHeading'
import Reveal from '../components/animations/Reveal'
import { siteConfig } from '../config/siteConfig'

const Blog = () => {
  const [activePost, setActivePost] = useState(blogPosts[0])

  return (
    <section id="blog" className="section blog">
      <div className="container">
        <SectionHeading eyebrow="Writing" title={siteConfig.blog.title} description={siteConfig.blog.description} />
        <div className="blog-layout">
          <div className="blog-list">
            {blogPosts.map((post) => (
              <button
                type="button"
                key={post.slug}
                className={`blog-list__item ${post.slug === activePost.slug ? 'is-active' : ''}`}
                onClick={() => setActivePost(post)}
              >
                <BlogPostCard post={post} />
              </button>
            ))}
          </div>
          <div className="blog-viewer">
            <Reveal>
              <div className="blog-viewer__meta">
                <p className="eyebrow">{new Date(activePost.date).toLocaleDateString()}</p>
                <p className="muted">{activePost.readingTime}</p>
              </div>
              <h3>{activePost.title}</h3>
              <MDXProvider components={MDXComponents}>
                <activePost.Component />
              </MDXProvider>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
