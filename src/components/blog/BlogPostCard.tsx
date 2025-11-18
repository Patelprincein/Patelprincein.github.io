import { FiClock } from 'react-icons/fi'
import type { BlogPost } from '../../content/posts'
import Reveal from '../animations/Reveal'

const BlogPostCard = ({ post }: { post: BlogPost }) => (
  <Reveal>
    <article className="blog-card">
      <div className="blog-card__meta">
        <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        <span>
          <FiClock /> {post.readingTime}
        </span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <ul className="tag-list">
        {post.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  </Reveal>
)

export default BlogPostCard
