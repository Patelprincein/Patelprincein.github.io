import { siteConfig } from '../config/siteConfig'
import SectionHeading from '../components/shared/SectionHeading'
import Reveal from '../components/animations/Reveal'

const Contact = () => (
  <section id="contact" className="section contact">
    <div className="container contact-grid">
      <SectionHeading
        eyebrow="Contact"
        title="Let's collaborate"
        description="Front-end only form posts to mailto, keeping things simple. Update addresses in siteConfig.contact."
      />
      <Reveal>
        <div className="contact-card">
          <p className="eyebrow">Availability</p>
          <p>{siteConfig.contact.availability}</p>
          <div className="contact-links">
            {siteConfig.contact.emails.map((email) => (
              <a key={email} href={`mailto:${email}`}>
                {email}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <form className="contact-form" action={`mailto:${siteConfig.contact.emails[1]}`} method="post">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me about your project" rows={4} required />
          </label>
          <button className="button" type="submit">Send message</button>
        </form>
      </Reveal>
    </div>
  </section>
)

export default Contact
