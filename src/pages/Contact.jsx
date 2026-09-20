import {
  ArrowUpRight,
  Mail,
  Send,
  Terminal,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact-page">
      <header className="contact-header">
        <div>
          <div className="editor-line">
            <span className="line-number">01</span>
            <span className="code-comment">
              // let's connect
            </span>
          </div>

          <h1>
            Contact<span>.</span>
          </h1>

          <p>
            Have an idea, opportunity or project in mind?
            Let's start a conversation.
          </p>
        </div>

        <div className="contact-terminal">
          <Terminal size={15} strokeWidth={1.3} />
          <span>contact.sh</span>
        </div>
      </header>

      <section id="message" className="contact-intro">
        <div className="contact-label">
          <span>02</span>
          <span>// GET IN TOUCH</span>
        </div>

        <div className="contact-intro-content">
          <h2>
            Let's build
            <br />
            <em>something interesting.</em>
          </h2>

          <p>
            Whether it's an AI project, a web experience,
            a creative collaboration or simply an idea worth
            discussing — I'm always open to interesting
            conversations.
          </p>

          <a
            href="mailto:your.email@example.com"
            className="contact-email"
          >
            <Mail size={17} strokeWidth={1.3} />

            <span>your.email@example.com</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.3}
            />
          </a>
        </div>

        <aside className="contact-links">
          <span className="small-label">
            FIND ME ONLINE
          </span>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-symbol">in</span>

            <span>LinkedIn</span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.3}
            />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-symbol">gh</span>

            <span>GitHub</span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.3}
            />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-symbol">ig</span>

            <span>Instagram</span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.3}
            />
          </a>
        </aside>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-heading">
          <span className="small-label">
            03 // SEND A MESSAGE
          </span>

          <h2>Start a conversation.</h2>

          <p>
            Tell me a little about what you're working on,
            what you're looking for, or simply say hello.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-row">
            <label>
              <span>01 / NAME</span>

              <input
                type="text"
                name="name"
                placeholder="Your name"
              />
            </label>

            <label>
              <span>02 / EMAIL</span>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label>
            <span>03 / MESSAGE</span>

            <textarea
              name="message"
              rows="7"
              placeholder="Tell me what you're working on..."
            />
          </label>

          <button type="submit">
            <Send
              size={14}
              strokeWidth={1.3}
            />

            <span>SEND MESSAGE</span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.3}
            />
          </button>
        </form>
      </section>

      <footer id="availability" className="contact-footer">
        <div>
          <span className="small-label">
            CURRENTLY INTERESTED IN
          </span>

          <div className="interest-tags">
            <span>AI / ML</span>
            <span>WEB DEVELOPMENT</span>
            <span>DATA</span>
            <span>CREATIVE WORK</span>
          </div>
        </div>

        <span className="contact-status">
          ● OPEN TO OPPORTUNITIES
        </span>
      </footer>
    </section>
  );
}

export default Contact;
