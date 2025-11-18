import clsx from 'clsx'
import Reveal from '../animations/Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const SectionHeading = ({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) => (
  <Reveal>
    <div className={clsx('section-heading', `section-heading--${align}`)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  </Reveal>
)

export default SectionHeading
