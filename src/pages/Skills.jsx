import { useState } from "react";
import {
  Activity,
  BarChart3,
  Brain,
  Code2,
  Database,
  Image,
  Layers3,
  Terminal,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const skillDistribution = [
  {
    name: "AI / ML",
    value: 6,
    description:
      "Machine learning, deep learning and intelligent systems.",
    projects: [
      "Leukemia Classification",
      "Depression Classification",
      "Alzheimer's Fuzzy Inference",
    ],
  },
  {
    name: "Data Science",
    value: 5,
    description:
      "Data analysis, preprocessing, modeling and visualization.",
    projects: [
      "PowerBI Data Warehouse",
      "Market Basket Analysis",
      "Leukemia Classification",
    ],
  },
  {
    name: "Computer Vision",
    value: 4,
    description:
      "Image processing, image-based learning and visual analysis.",
    projects: [
      "Lake Encroachment Detection",
      "Leukemia Image Classification",
    ],
  },
  {
    name: "Web Development",
    value: 3,
    description:
      "Frontend development, interfaces and interactive web experiences.",
    projects: [
      "Portfolio Website",
      "React Applications",
    ],
  },
  {
    name: "Big Data",
    value: 3,
    description:
      "Distributed data processing and large-scale data technologies.",
    projects: [
      "Lake Encroachment Detection",
      "PowerBI Data Warehouse",
    ],
  },
  {
    name: "Creative / Media",
    value: 5,
    description:
      "Photography, graphic design, visual storytelling and media.",
    projects: [
      "Krishna Stage Photography",
      "Kaane Aagiddare",
      "Ticgetz Campaign",
      "GAT Media Team",
    ],
  },
];

const capabilityData = [
  {
    name: "AI / ML",
    value: 6,
  },
  {
    name: "Data",
    value: 5,
  },
  {
    name: "Computer Vision",
    value: 4,
  },
  {
    name: "Development",
    value: 3,
  },
  {
    name: "Creative",
    value: 5,
  },
];

const technologies = [
  {
    name: "Python",
    category: "AI / ML",
    usedIn: 6,
    description:
      "Primary language for machine learning, data analysis and experimentation.",
  },
  {
    name: "Java",
    category: "Development",
    usedIn: 2,
    description:
      "Used for software development and strengthening programming fundamentals.",
  },
  {
    name: "JavaScript",
    category: "Web Development",
    usedIn: 3,
    description:
      "Used for interactive frontend experiences and web applications.",
  },
  {
    name: "React",
    category: "Web Development",
    usedIn: 2,
    description:
      "Used to build component-based interactive interfaces.",
  },
  {
    name: "TensorFlow",
    category: "Deep Learning",
    usedIn: 3,
    description:
      "Used for CNNs, deep learning experiments and image-based models.",
  },
  {
    name: "PyTorch",
    category: "Deep Learning",
    usedIn: 2,
    description:
      "Used for experimentation with deep learning workflows.",
  },
  {
    name: "Scikit-learn",
    category: "Machine Learning",
    usedIn: 5,
    description:
      "Used for classical machine learning, preprocessing and evaluation.",
  },
  {
    name: "Pandas",
    category: "Data",
    usedIn: 6,
    description:
      "Used extensively for dataset preparation, transformation and analysis.",
  },
  {
    name: "NumPy",
    category: "Data",
    usedIn: 5,
    description:
      "Used for numerical operations and machine learning workflows.",
  },
  {
    name: "SQL",
    category: "Data",
    usedIn: 3,
    description:
      "Used for querying, managing and analyzing structured data.",
  },
  {
    name: "Apache Spark",
    category: "Big Data",
    usedIn: 2,
    description:
      "Used for distributed data processing and large datasets.",
  },
  {
    name: "Hadoop",
    category: "Big Data",
    usedIn: 1,
    description:
      "Used as part of distributed data processing workflows.",
  },
  {
    name: "Hive",
    category: "Big Data",
    usedIn: 1,
    description:
      "Used for querying and managing data within Hadoop ecosystems.",
  },
  {
    name: "Power BI",
    category: "Visualization",
    usedIn: 2,
    description:
      "Used for dashboards, business intelligence and data storytelling.",
  },
  {
    name: "Tableau",
    category: "Visualization",
    usedIn: 1,
    description:
      "Used for interactive data visualization and analytical dashboards.",
  },
  {
    name: "Git",
    category: "Development",
    usedIn: 6,
    description:
      "Used for version control and project development workflows.",
  },
];

const projectMapping = {
  Python: [
    "Leukemia Classification",
    "Lake Encroachment Detection",
    "Depression Classification",
    "Market Basket Analysis",
  ],
  "Machine Learning": [
    "Leukemia Classification",
    "Depression Classification",
    "Alzheimer's Fuzzy Inference",
  ],
  "Computer Vision": [
    "Lake Encroachment Detection",
    "Leukemia Classification",
  ],
  "Data Analytics": [
    "PowerBI Data Warehouse",
    "Market Basket Analysis",
  ],
  Photography: [
    "Krishna Stage Photography",
    "Krishna Flute Performance",
    "Event & Cultural Photography",
    "Wildlife Photography",
  ],
  "Web Development": [
    "Portfolio Website",
    "React Applications",
  ],
};

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(
    skillDistribution[0]
  );

  const [selectedTechnology, setSelectedTechnology] =
    useState(null);

  const [selectedMapping, setSelectedMapping] =
    useState("Python");

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setSelectedTechnology(null);
  };

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <main className="skills-page">

      {/* HEADER */}

      <header className="skills-header">

        <div className="skills-file">
          <span className="line-number">01</span>
          <span className="comment">
            // skills.analysis
          </span>
        </div>

        <div className="skills-title-row">

          <div>

            <p className="eyebrow">
              ANALYSIS / SKILLSET
            </p>

            <h1>
              Skills<span>.</span>
            </h1>

            <p className="skills-intro">
              A visual analysis of the tools, technologies
              and creative disciplines I work with.
            </p>

          </div>

          <div className="skills-status">

            <Terminal size={15} />

            <span>skills.json</span>

            <span className="status-dot" />

            <span>active</span>

          </div>

        </div>

      </header>


      {/* OVERVIEW */}

      <section id="intro" className="skills-overview">

        <div className="skill-stat">

          <span className="stat-index">
            01
          </span>

          <Brain size={18} />

          <div>
            <strong>AI / ML</strong>
            <span>
              Machine learning & intelligent systems
            </span>
          </div>

        </div>


        <div className="skill-stat">

          <span className="stat-index">
            02
          </span>

          <Database size={18} />

          <div>
            <strong>DATA</strong>
            <span>
              Analytics, processing & visualization
            </span>
          </div>

        </div>


        <div className="skill-stat">

          <span className="stat-index">
            03
          </span>

          <Code2 size={18} />

          <div>
            <strong>DEVELOPMENT</strong>
            <span>
              Web & software development
            </span>
          </div>

        </div>


        <div className="skill-stat">

          <span className="stat-index">
            04
          </span>

          <Image size={18} />

          <div>
            <strong>CREATIVE</strong>
            <span>
              Photography, design & media
            </span>
          </div>

        </div>

      </section>


      {/* SKILL DISTRIBUTION */}

      <section id="distribution" className="skills-dashboard">

        <div className="dashboard-heading">

          <div>

            <span className="section-index">
              01
            </span>

            <h2>
              Skill Distribution
            </h2>

          </div>

          <span className="dashboard-meta">
            skills / category
          </span>

        </div>


        <div className="skill-chart-container">

          <ResponsiveContainer
            width="100%"
            height={360}
          >

            <BarChart
              data={skillDistribution}
              layout="vertical"
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >

              <CartesianGrid
                stroke="#292a28"
                horizontal={false}
              />

              <XAxis
                type="number"
                stroke="#77766f"
                tick={{
                  fill: "#77766f",
                  fontSize: 11,
                  fontFamily: "monospace",
                }}
                allowDecimals={false}
              />

              <YAxis
                type="category"
                dataKey="name"
                width={120}
                stroke="#77766f"
                tick={{
                  fill: "#d8d5ce",
                  fontSize: 12,
                }}
              />

              <Tooltip
                cursor={{
                  fill: "rgba(216, 213, 206, 0.04)",
                }}
                contentStyle={{
                  background: "#181918",
                  border: "1px solid #292a28",
                  borderRadius: "0",
                }}
                labelStyle={{
                  color: "#aaa28e",
                  fontFamily: "monospace",
                  fontSize: 11,
                }}
                formatter={(value) => [
                  `${value} areas`,
                  "Projects / Skills",
                ]}
              />

              <Bar
                dataKey="value"
                radius={[0, 2, 2, 0]}
                barSize={22}
                animationDuration={900}
                onClick={(data) => {
                  const clicked = skillDistribution.find(
                    (skill) =>
                      skill.name === data.name
                  );

                  if (clicked) {
                    handleSkillClick(clicked);
                  }
                }}
              >

                {skillDistribution.map(
                  (entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        selectedSkill.name ===
                        entry.name
                          ? "#aaa28e"
                          : "#65645e"
                      }
                      cursor="pointer"
                    />
                  )
                )}

              </Bar>

            </BarChart>

          </ResponsiveContainer>

        </div>


        {/* SELECTED SKILL */}

        <div className="selected-skill">

          <div className="selected-skill-label">

            <span>
              SELECTED
            </span>

            <span>
              SKILL / {String(
                skillDistribution.findIndex(
                  (skill) =>
                    skill.name ===
                    selectedSkill.name
                ) + 1
              ).padStart(2, "0")}
            </span>

          </div>


          <div className="selected-skill-content">

            <div>

              <h3>
                {selectedSkill.name}
              </h3>

              <p>
                {selectedSkill.description}
              </p>

            </div>


            <div className="selected-skill-value">

              <strong>
                {selectedSkill.value}
              </strong>

              <span>
                areas
              </span>

            </div>

          </div>


          <div className="selected-projects">

            {selectedSkill.projects.map(
              (project) => (
                <span key={project}>
                  {project}
                </span>
              )
            )}

          </div>

        </div>

      </section>


      {/* CAPABILITY PROFILE */}

      <section id="capabilities" className="skills-dashboard">

        <div className="dashboard-heading">

          <div>

            <span className="section-index">
              02
            </span>

            <h2>
              Capability Profile
            </h2>

          </div>

          <span className="dashboard-meta">
            multidimensional analysis
          </span>

        </div>


        <div className="capability-chart">

          <div className="capability-radar">

            <div className="radar-ring ring-one" />
            <div className="radar-ring ring-two" />
            <div className="radar-ring ring-three" />

            <div className="radar-line radar-line-one" />
            <div className="radar-line radar-line-two" />
            <div className="radar-line radar-line-three" />
            <div className="radar-line radar-line-four" />
            <div className="radar-line radar-line-five" />

            <div className="radar-shape">

              {capabilityData.map(
                (item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    className={`radar-point point-${index}`}
                    onClick={() =>
                      handleSkillClick(
                        skillDistribution.find(
                          (skill) =>
                            skill.name
                              .toLowerCase()
                              .includes(
                                item.name
                                  .toLowerCase()
                              )
                        ) ||
                          skillDistribution[0]
                      )
                    }
                    title={item.name}
                  >
                    <span />
                  </button>
                )
              )}

            </div>


            <div className="radar-label label-top">
              AI / ML
            </div>

            <div className="radar-label label-right-top">
              Data
            </div>

            <div className="radar-label label-right-bottom">
              Development
            </div>

            <div className="radar-label label-left-bottom">
              Creative
            </div>

            <div className="radar-label label-left-top">
              Computer Vision
            </div>

          </div>


          <div className="capability-info">

            <div className="capability-info-head">
              <Layers3 size={17} />

              <span>
                CAPABILITY INDEX
              </span>
            </div>


            {capabilityData.map(
              (item, index) => (
                <button
                  type="button"
                  className="capability-row"
                  key={item.name}
                  onClick={() => {

                    const matched =
                      skillDistribution.find(
                        (skill) =>
                          skill.name
                            .toLowerCase()
                            .includes(
                              item.name
                                .toLowerCase()
                            )
                      );

                    if (matched) {
                      handleSkillClick(
                        matched
                      );
                    }

                  }}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <strong>
                    {item.name}
                  </strong>

                  <em>
                    {item.value}
                  </em>

                </button>
              )
            )}

          </div>

        </div>

      </section>


      {/* TECHNOLOGY MATRIX */}

      <section id="technology" className="skills-dashboard">

        <div className="dashboard-heading">

          <div>

            <span className="section-index">
              03
            </span>

            <h2>
              Technology Matrix
            </h2>

          </div>

          <span className="dashboard-meta">
            toolset / stack
          </span>

        </div>


        <div className="technology-grid">

          {technologies.map(
            (technology) => (

              <button
                type="button"
                className={`technology-item ${
                  selectedTechnology?.name ===
                  technology.name
                    ? "selected"
                    : ""
                }`}
                key={technology.name}
                onClick={() =>
                  handleTechnologyClick(
                    technology
                  )
                }
              >

                <span className="technology-name">
                  {technology.name}
                </span>

                <span className="technology-category">
                  {technology.category}
                </span>

                <span className="technology-count">
                  {String(
                    technology.usedIn
                  ).padStart(2, "0")}
                </span>

              </button>

            )
          )}

        </div>


        {selectedTechnology && (

          <div className="technology-detail">

            <div>

              <span>
                SELECTED TECHNOLOGY
              </span>

              <h3>
                {selectedTechnology.name}
              </h3>

            </div>


            <div className="technology-detail-copy">

              <span>
                {selectedTechnology.category}
              </span>

              <p>
                {selectedTechnology.description}
              </p>

              <strong>
                Used across{" "}
                {selectedTechnology.usedIn}{" "}
                project areas
              </strong>

            </div>

          </div>

        )}

      </section>


      {/* SKILL → PROJECT */}

      <section id="mapping" className="skills-dashboard">

        <div className="dashboard-heading">

          <div>

            <span className="section-index">
              04
            </span>

            <h2>
              Skill → Project Mapping
            </h2>

          </div>

          <span className="dashboard-meta">
            click to inspect
          </span>

        </div>


        <div className="skill-mapping">

          {Object.keys(projectMapping).map(
            (skill) => (

              <button
                type="button"
                key={skill}
                className={
                  selectedMapping === skill
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedMapping(skill)
                }
              >

                <span>
                  {skill}
                </span>

                <span>
                  {
                    projectMapping[skill]
                      .length
                  } projects ↗
                </span>

              </button>

            )
          )}

        </div>


        <div className="mapping-results">

          <div className="mapping-header">

            <span>
              PROJECTS USING
            </span>

            <strong>
              {selectedMapping}
            </strong>

          </div>


          <div className="mapping-project-list">

            {projectMapping[
              selectedMapping
            ].map((project, index) => (

              <div
                className="mapping-project"
                key={project}
              >

                <span>
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </span>

                <strong>
                  {project}
                </strong>

                <span>
                  ↗
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="skills-footer">

        <div>
          <span>
            END OF ANALYSIS
          </span>

          <strong>
            more to learn_
          </strong>
        </div>

        <span>
          AI / DATA / CODE / CREATIVE
        </span>

      </footer>

    </main>
  );
}

export default Skills;
