import {
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";



function Home() {
  return (
    <section id="intro" className="home-page">
      <div className="home-grid">

        <div id="capabilities" className="home-content">

          <div className="home-code-label">
            <span className="line-number">01</span>
            <span className="comment">// hello, world.</span>
          </div>

          <div className="hero-heading">
            <p className="hero-intro">I'm</p>

            <h1>
              Akshata
              <span>Pandit.</span>
            </h1>
          </div>

          <div className="hero-role">
            <span className="role-line" />

            <p>AI & Data Science Graduate</p>
          </div>

          <p className="hero-description">
            I build with data, experiment with intelligent systems,
            and create visual stories when I'm away from the code.
          </p>

          <div className="hero-actions">

            <Link
              to="/projects"
              className="primary-button"
            >
              Explore my work

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
              />
            </Link>

            <Link
              to="/contact"
              className="secondary-button"
            >
              Let's connect

              <ChevronRight
                size={15}
                strokeWidth={1.8}
              />
            </Link>

          </div>

          <div className="hero-meta">

            <div>
              <span className="meta-label">
                FOCUS
              </span>

              <span>
                AI · ML · Data
              </span>
            </div>

            <div>
              <span className="meta-label">
                ALSO
              </span>

              <span>
                Photography · Design
              </span>
            </div>

          </div>

        </div>

        <div id="highlights" className="home-visual">

          <div className="visual-code">
            <span>const</span>{" "}
            <strong>akshata</strong> = {"{"}
            <br />

            &nbsp;&nbsp;curious: <em>true</em>,
            <br />

            &nbsp;&nbsp;creative: <em>true</em>,
            <br />

            &nbsp;&nbsp;alwaysLearning: <em>true</em>
            <br />

            {"}"};
          </div>

          <div className="profile-card">

            <div className="profile-image">
              <img
                src="/images/profile/profile.jpeg"
                alt="Akshata Pandit"
              />
            </div>

            <div className="profile-caption">

              <div>
                <span>
                  AKSHATA PANDIT
                </span>

                <small>
                  AI / DATA / CREATIVE
                </small>
              </div>

              <Sparkles
                size={16}
                strokeWidth={1.4}
              />

            </div>

          </div>

          <div className="floating-note">
            <span>currently</span>
            <strong>building things</strong>
          </div>

        </div>

      </div>

      <div className="home-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
      </div>

    </section>
  );
}

export default Home;
