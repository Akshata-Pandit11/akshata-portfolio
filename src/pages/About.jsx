import {
  ArrowUpRight,
  Brain,
  Camera,
  Code2,
  Database,
  Palette,
  Terminal,
} from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Machine learning, deep learning, NLP, computer vision and intelligent systems.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLP",
    ],
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive interfaces and interactive web experiences.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "REST APIs",
    ],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Working with data pipelines, analysis, visualization and distributed systems.",
    technologies: [
      "SQL",
      "Pandas",
      "Apache Spark",
      "PowerBI",
      "Tableau",
    ],
  },
  {
    icon: Camera,
    title: "Media & Design",
    description:
      "Photography, graphic design, visual storytelling and creative digital work.",
    technologies: [
      "Photography",
      "Graphic Design",
      "Lightroom",
      "Visual Design",
    ],
  },
];

const toolkit = [
  "Python",
  "Java",
  "JavaScript",
  "React",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "SQL",
  "Apache Spark",
  "Hadoop",
  "Hive",
  "PowerBI",
  "Tableau",
  "Git",
];

function About() {
  return (
    <section className="about-page">
      <header id="profile" className="about-header">
        <div>
          <div className="editor-line">
            <span className="line-number">01</span>
            <span className="code-comment">
              // a little about me
            </span>
          </div>

          <h1>
            About<span>.</span>
          </h1>

          <p>
            AI/ML engineer, developer and creative —
            interested in building things across technology
            and visual media.
          </p>
        </div>

        <div className="about-terminal">
          <Terminal size={15} strokeWidth={1.3} />
          <span>profile.md</span>
        </div>
      </header>

      <section id="focus" className="about-intro">
        <div className="about-intro-label">
          <span>02</span>
          <span>// who I am</span>
        </div>

        <div className="about-intro-content">
          <h2>
            I like working where
            <br />
            <em>technology meets creativity.</em>
          </h2>

          <p>
            I'm an AI & Data Science engineer interested in
            building practical solutions with artificial
            intelligence, machine learning and data.
          </p>

          <p>
            Alongside AI and data, I explore web development
            and enjoy creating visual work through photography,
            graphic design and digital media.
          </p>

          <p>
            My interests move between analytical problem
            solving and visual storytelling — from developing
            machine learning models to designing interfaces
            and creative experiences.
          </p>
        </div>
      </section>

      <section className="about-skills">
        <div className="about-section-heading">
          <div>
            <span className="small-label">03 // WHAT I DO</span>
            <h2>Areas of work</h2>
          </div>
        </div>

        <div className="about-skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <article className="about-skill-card" key={skill.title}>
                <div className="skill-card-top">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon size={20} strokeWidth={1.2} />
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>

                <div className="skill-technologies">
                  {skill.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="toolkit" className="about-toolkit">
        <div className="toolkit-heading">
          <span className="small-label">
            04 // TOOLKIT
          </span>

          <h2>Technologies I work with</h2>
        </div>

        <div className="toolkit-grid">
          {toolkit.map((technology, index) => (
            <div className="toolkit-item" key={technology}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{technology}</strong>

              <ArrowUpRight
                size={13}
                strokeWidth={1.2}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default About;
