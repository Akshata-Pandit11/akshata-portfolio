import {
  ArrowUpRight,
  Brain,
  Database,
  GitBranch,
  Sparkles,
  Terminal,
  Trophy,
} from "lucide-react";

const workItems = [
  {
    icon: Brain,
    number: "01",
    text: "Developed AI solutions using real-world healthcare datasets.",
  },
  {
    icon: Database,
    number: "02",
    text: "Supported data preprocessing and analysis as part of the model development process.",
  },
  {
    icon: GitBranch,
    number: "03",
    text: "Contributed to the development and exploration of AI-driven solutions.",
  },
];

const tags = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Preprocessing",
  "Healthcare AI",
];

function Experience() {
  return (
    <section className="experience-page">

      {/* PAGE HEADER */}

      <header className="experience-header">
        <div>
          <div className="editor-line">
            <span className="line-number">01</span>

            <span className="code-comment">
              // things I've worked on
            </span>
          </div>

          <h1>
            Experience<span>.</span>
          </h1>

          <p>
            A look at where I've applied AI, machine learning and
            data-driven problem solving.
          </p>
        </div>

        <div className="experience-terminal">
          <Terminal size={15} strokeWidth={1.3} />
          <span>experience.log</span>
        </div>
      </header>


      {/* INTERNSHIP */}

      <div id="internship" className="experience-layout">

        <div className="timeline">

          <div className="timeline-line" />

          <article className="experience-entry">

            <div className="timeline-marker">
              <span />
            </div>

            <div className="experience-content">

              <div className="experience-top">

                <div>
                  <span className="experience-type">
                    INTERNSHIP · AI / ML
                  </span>

                  <h2>AI/ML Intern</h2>

                  <h3>Savemom Private Limited</h3>
                </div>

                <span className="experience-date">
                  JAN 2026 — APR 2026
                </span>

              </div>

              <p className="experience-summary">
                Worked on AI solutions in the healthcare domain using
                real-world datasets, supporting model development,
                preprocessing and analysis.
              </p>

              <div className="experience-work">

                {workItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="work-item" key={item.number}>

                      <Icon size={17} strokeWidth={1.4} />

                      <div>
                        <span>{item.number}</span>

                        <p>{item.text}</p>
                      </div>

                    </div>
                  );
                })}

              </div>

              <div className="experience-tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

            </div>
          </article>

        </div>


        {/* SIDE CARDS */}

        <aside className="experience-side">

          <div className="side-card">

            <span className="small-label">
              01 //
            </span>

            <strong>AI/ML Engineer</strong>

            <p>
              Building practical AI solutions across machine
              learning, deep learning, NLP and Generative AI.
            </p>

          </div>

          <div className="side-card accent-card">

            <span className="small-label">
              02 //
            </span>

            <strong>Always learning.</strong>

            <p>
              Exploring intelligent systems, web development
              and new ways to turn ideas into useful products.
            </p>

            <ArrowUpRight
              size={17}
              strokeWidth={1.3}
            />

          </div>

        </aside>

      </div>


      {/* IBM SECTION */}

      <section id="ibm-datathon" className="ibm-section">

        <div className="ibm-heading">

          <div>

            <div className="ibm-section-label">
              <span>02</span>

              <span>
                // selected experiences
              </span>
            </div>

            <h2>
              IBM Z Datathon 2024
            </h2>

            <p>
              Team Oasis&nbsp; · &nbsp;Runner-Up
            </p>

          </div>

          <span className="ibm-year">
            2024
          </span>

        </div>


        {/* IBM HERO */}

        <div className="ibm-hero">

          <div className="ibm-hero-image">

            <img
              src="/images/experience/IBM/lab.jpg"
              alt="Team Oasis at IBM India Systems Development Lab"
            />

            <span className="image-label">
              TEAM OASIS AT IBM INDIA SYSTEMS DEVELOPMENT LAB
            </span>

          </div>


          <div className="ibm-hero-info">

            <span className="small-label">
              THE PROJECT
            </span>

            <h3>
              Lake Encroachment
              <br />
              Detection
            </h3>

            <p>
              Built as part of IBM Z Datathon 2024, our team
              worked on detecting lake encroachment using image
              processing and data-driven techniques.
            </p>


            <div className="ibm-tags">

              <span>Image Processing</span>
              <span>Apache Spark</span>
              <span>LinuxONE</span>
              <span>AI for Sustainability</span>

            </div>


            <div className="ibm-achievement">

              <span>ACHIEVEMENT</span>

              <strong>
                <Trophy size={16} strokeWidth={1.4} />
                RUNNER-UP
              </strong>

            </div>

          </div>

        </div>


        {/* IBM PHOTO GRID */}

        <div className="ibm-gallery">

          <figure>
            <img
              src="/images/experience/IBM/presentation.jpg"
              alt="IBM Z Datathon presentation"
            />

            <figcaption>
              IBM Z DATATHON PRESENTATION
            </figcaption>
          </figure>


          <figure>
            <img
              src="/images/experience/IBM/group.jpg"
              alt="IBM Z Datathon participants"
            />

            <figcaption>
              IBM Z DATATHON PARTICIPANTS
            </figcaption>
          </figure>


          <figure>
            <img
              src="/images/experience/IBM/panel.jpeg"
              alt="IBM Technical Exchange 2024"
            />

            <figcaption>
              IBM TECHNICAL EXCHANGE 2024
            </figcaption>
          </figure>

        </div>


        {/* IBM PANEL */}

        <div className="ibm-panel">

          <div className="ibm-panel-image">

            <img
              src="/images/experience/IBM/panel-portrait.jpeg"
              alt="Akshata participating in an IBM panel"
            />

            <span className="image-label">
              AKSHATA PARTICIPATING IN AN IBM PANEL
            </span>

          </div>


          <div className="ibm-panel-content">

            <span className="small-label">
              BEYOND THE DATATHON
            </span>

            <h3>
              IBM Z Day &amp;
              <br />
              Technical Exchange
            </h3>

            <p>
              The IBM experience continued beyond the competition,
              including participation in IBM technical events and
              panel discussions around IBM Z and emerging technology.
            </p>


            <div className="ibm-events">

              <div>
                <span>01</span>
                <p>IBM Z Day — 8 April 2025</p>
              </div>

              <div>
                <span>02</span>
                <p>IBM Technical Exchange 2024</p>
              </div>

            </div>


            <div className="ibm-quote">
              “Great learning experiences,
              insightful discussions and a deeper
              understanding of how technology can
              create real impact.”
            </div>

          </div>

        </div>
        <div className="ibm-certificate">

  <div className="certificate-heading">

    <div>
      <span className="small-label">
        RECOGNITION
      </span>

      <h3>
        IBM Z Datathon 2024
      </h3>

      <p>
        Second Position · GAT College, Bengaluru
      </p>
    </div>

    <div className="certificate-badge">
      <Trophy size={15} strokeWidth={1.3} />
      <span>RUNNER-UP</span>
    </div>

  </div>


  <div className="certificate-frame">

    <img
      src="/images/experience/IBM/certificate.png"
      alt="Certificate of Achievement for IBM Z Datathon 2024"
    />

  </div>
  <div className="ibm-publication">
  <div className="publication-icon">
    <Sparkles size={18} strokeWidth={1.3} />
  </div>

  <div className="publication-content">
    <span className="small-label">PUBLISHED ON IBM COMMUNITY</span>

    <h3>
      Our Experience Using IBM LinuxONE:
      <br />
      From Datathon Participants to Project Winners
    </h3>

    <p>
      A detailed account of Team Oasis's journey through the
      IBM Z Datathon — from building a lake encroachment
      detection solution to deploying and evolving it on
      IBM LinuxONE.
    </p>

    <div className="publication-meta">
      <span>AKSHATA PANDIT</span>
      <span>APRIL 24, 2025</span>
    </div>

    <a
      href="https://community.ibm.com/community/user/blogs/akshata-pandit/2025/04/24/our-experience-using-ibm-linuxone-from-datathon-pa?communityKey=b8b88f20-24c8-49f0-9021-4a8c6247a067"
      target="_blank"
      rel="noopener noreferrer"
      className="publication-link"
    >
      Read the article
      <ArrowUpRight size={15} strokeWidth={1.3} />
    </a>
  </div>
</div>

  </div>

      </section>

    </section>
  );
}

export default Experience;
