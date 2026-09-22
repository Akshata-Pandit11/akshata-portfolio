
import {
  ArrowUpRight,
  Brain,
  Camera,
  Database,
  GitBranch,
  Image,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const projects = [
  {
    id: "01",
    title: "Leukemia Classification",
    category: "AI / ML",
    description:
      "A multi-model machine learning framework for leukemia classification and biomarker discovery using gene expression datasets.",
    technologies: [
      "Python",
      "Deep Learning",
      "CNN",
      "Machine Learning",
      "Bioinformatics",
    ],
    icon: Brain,
    type: "technical",
    github: "https://github.com/Akshata-Pandit11",
  },

  {
    id: "02",
    title: "Lake Encroachment Detection",
    category: "COMPUTER VISION",
    description:
      "An AI-driven solution for detecting and monitoring lake encroachment using satellite and drone imagery.",
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "CNN",
      "Apache Spark",
    ],
    icon: Image,
    type: "technical",
    github: "https://github.com/Akshata-Pandit11",
  },

  {
    id: "03",
    title: "PowerBI Data Warehouse",
    category: "DATA SCIENCE",
    description:
      "A data warehouse management system integrating distributed data processing, workflow orchestration and business intelligence.",
    technologies: [
      "Apache Spark",
      "Hadoop",
      "Hive",
      "Airflow",
      "PowerBI",
    ],
    icon: Database,
    type: "technical",
    github: "https://github.com/Akshata-Pandit11/Data-Warehouse-system.git",
  },

  {
    id: "04",
    title: "Depression Classification",
    category: "AI / ML",
    description:
      "An ensemble machine learning approach for depression classification using multiple predictive models.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Ensemble Learning",
    ],
    icon: Brain,
    type: "technical",
    github: "https://github.com/Akshata-Pandit11",
  },

  {
    id: "05",
    title: "Market Basket Analysis",
    category: "DATA SCIENCE",
    description:
      "Analysis of customer purchasing patterns to identify relationships between products and discover useful associations.",
    technologies: [
      "Python",
      "Pandas",
      "Association Rules",
      "Data Analysis",
    ],
    icon: GitBranch,
    type: "technical",
    github: "https://github.com/Akshata-Pandit11/MARKETBASKETANALYSIS.git"
  },

  {
    id: "06",
    title: "Alzheimer's Fuzzy Inference",
    category: "AI / ML",
    description:
      "A fuzzy inference based approach for analysing Alzheimer's disease related factors.",
    technologies: [
      "Python",
      "Fuzzy Logic",
      "Machine Learning",
      "Data Analysis",
    ],
    icon: Brain,
    type: "technical",
    github: "https://github.com/Akshata-Pandit11/Akshata_FuzzyMethodsCode.git",
  },
   {
    id: "07",
    title: "Lexi-Aid-Legal-Assistant-App",
    category: "AI / ML",
    description:
      "A smart application for legal document analysis.",
    technologies: [
      "Python",
      "NLP",
      "myPDF",
      "AI",
    ],
    icon: Brain,
    type: "technical",
    github: "https://github.com/Akshata-Pandit11/Lexi-Aid-Legal-Assistant-App.git"
  },
   {
    id: "08",
    title: "Clinical Assistant",
    category: "AI / ML",
    description:
      "A chatbot that assist doctors and other clinic staff",
    technologies: [
      "Python",
      "NLP",
      "chatbot",
      "AI",
    ],
    icon: Brain,
    type: "technical",
    github: "https://github.com/Akshata-Pandit11/Clinical-Assistant.git"
  },
{
    id: "08",
    title: "[Retrieval-Augmented-Generation-RAG-System](https://github.com/Akshata-Pandit11/3-Retrieval-Augmented-Generation-RAG-System)",
    category: "AI / ML",
    description:
      "A chatbot that assist doctors and other clinic staff",
    technologies: [
      "Python",
      "RAG",
      "chatbot",
      "AI",
    ],
    icon: Brain,
    type: "technical",
    github: "https://github.com/Akshata-Pandit11/Clinical-Assistant.git"
  },
  
  {
    id: "07",
    title: "Krishna — Stage Photography",
    category: "MEDIA & DESIGN",
    description:
      "Performing arts photography capturing a Krishna-themed stage performance through dramatic lighting, expression and movement.",
    technologies: [
      "Photography",
      "Stage Photography",
      "Visual Storytelling",
    ],
    icon: Camera,
    type: "media",
    image: "/images/projects/media/krishna-stage-01.JPG",
  },

  {
    id: "08",
    title: "Krishna — Flute Performance",
    category: "MEDIA & DESIGN",
    description:
      "A stage photography series focused on performance, costume, expression and theatrical lighting.",
    technologies: [
      "Photography",
      "Event Photography",
      "Composition",
    ],
    icon: Camera,
    type: "media",
    image: "/images/projects/media/krishna-stage-02.JPG",
  },

  {
    id: "09",
    title: "Kaane Aagiddare",
    category: "MEDIA & DESIGN",
    description:
      "Creative and visual design work for the Kannada short film Kaane Aagiddare, including poster and promotional artwork.",
    technologies: [
      "Graphic Design",
      "Poster Design",
      "Film",
      "Creative Direction",
    ],
    icon: Image,
    type: "media",
    image: "/images/projects/media/kaane-aagiddare.png",
  },

  {
    id: "10",
    title: "Ticgetz Campaign",
    category: "MEDIA & DESIGN",
    description:
      "Promotional campaign artwork created for Ticgetz, combining product communication, visual composition and digital advertising design.",
    technologies: [
      "Graphic Design",
      "Digital Campaign",
      "Advertising",
      "Visual Design",
    ],
    icon: Image,
    type: "media",
    image: "/public/images/projects/media/ticgetz.png",
  },

  {
    id: "11",
    title: "Event & Cultural Photography",
    category: "MEDIA & DESIGN",
    description:
      "Photography and visual documentation from cultural and public events, focusing on people, moments and atmosphere.",
    technologies: [
      "Photography",
      "Event Coverage",
      "Visual Storytelling",
    ],
    icon: Camera,
    type: "media",
    image: "/public/images/projects/media/event-photography.jpeg",
  },

  {
    id: "12",
    title: "GAT Media Team",
    category: "MEDIA & DESIGN",
    description:
      "Worked as part of the Aisshwarya's DKS Hegde media team and GAT media team, contributing to media coverage for the Silver Jubilee, Buddy Bench with Sadhguru and Teachers' Quix events.",
    technologies: [
      "Media Coverage",
      "Photography",
      "Event Documentation",
      "Creative Media",
    ],
    icon: Camera,
    type: "media",
    image: "/public/images/projects/media/gat-media-team.jpeg",
  },

  {
    id: "13",
    title: "Wildlife Photography",
    category: "MEDIA & DESIGN",
    description:
      "Wildlife photography focused on observing and capturing animals in their natural surroundings.",
    technologies: [
      "Wildlife Photography",
      "Nature",
      "Composition",
      "Photography",
    ],
    icon: Camera,
    type: "media",
    image: "/public/images/projects/media/wildlife.JPG",
  },
  {
    id: "14",
    title: "Wildlife Photography",
    category: "MEDIA & DESIGN",
    description:
      "Wildlife photography focused on observing and capturing animals in their natural surroundings.",
    technologies: [
      "Wildlife Photography",
      "Nature",
      "Composition",
      "Photography",
    ],
    icon: Camera,
    type: "media",
    image: "/public/images/projects/media/wildlife2.JPG",
  },

  // Add web projects here later.
  //
  // {
  //   id: "14",
  //   title: "Your Web Project",
  //   category: "WEB DEVELOPMENT",
  //   description: "Your project description.",
  //   technologies: ["React", "JavaScript", "CSS"],
  //   icon: Code2,
  //   type: "technical",
  //   github: "https://github.com/YOUR_USERNAME/project",
  // },
];

const filters = [
  "ALL",
  "AI / ML",
  "COMPUTER VISION",
  "DATA SCIENCE",
  "WEB DEVELOPMENT",
  "MEDIA & DESIGN",
];

function Projects() {
  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(
  searchParams.get("category") || "ALL"
);

useEffect(() => {
  const category = searchParams.get("category") || "ALL";
  setActiveFilter(category);
}, [searchParams]);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "ALL" ||
      project.category === activeFilter;

    const query = search.toLowerCase().trim();

    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(query)
      );

    return matchesFilter && matchesSearch;
  });

  const handleProjectClick = (project) => {
    if (project.type === "media") {
      setSelectedImage(project);
      return;
    }

    if (project.github) {
      window.open(
        project.github,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section id="archive" className="projects-page">

      <header className="projects-header">
        <div>
          <div className="editor-line">
            <span className="line-number">01</span>

            <span className="code-comment">
              // things I've built
            </span>
          </div>

          <h1>
            Projects<span>.</span>
          </h1>

          <p>
            A collection of AI, data, web and creative work
            built through research, experimentation and
            real-world projects.
          </p>
        </div>

        <div className="projects-terminal">
          <span className="terminal-dot" />
          <span>projects.json</span>
        </div>
      </header>

      <div className="projects-toolbar">

        <div className="project-filters">
          {filters.map((filter) => (
  <button
    key={filter}
    className={activeFilter === filter ? "active" : ""}
    onClick={() => {
      setActiveFilter(filter);

      if (filter === "ALL") {
        setSearchParams({});
      } else {
        setSearchParams({
          category: filter,
        });
      }
    }}
  >
    {filter}
  </button>
))}
        </div>

        <label className="project-search">
          <Search
            size={14}
            strokeWidth={1.4}
          />

          <input
            type="text"
            placeholder="search projects..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </label>

      </div>

      <div className="projects-count">
        <span>
          {String(filteredProjects.length).padStart(2, "0")}
        </span>

        <span>
          {activeFilter === "ALL"
            ? "PROJECTS FOUND"
            : `${activeFilter} PROJECTS`}
        </span>
      </div>

      {filteredProjects.length > 0 ? (

        <div
          className={
            activeFilter === "MEDIA & DESIGN"
              ? "projects-grid media-projects-grid"
              : "projects-grid"
          }
        >

          {filteredProjects.map((project) => {

            const Icon = project.icon;

            return (
              <article
                className={`project-card ${
                  project.type === "media"
                    ? "project-card-media"
                    : "project-card-technical"
                }`}
                key={project.id}
                onClick={() =>
                  handleProjectClick(project)
                }
                role="button"
                tabIndex="0"
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    handleProjectClick(project);
                  }
                }}
              >

                <div className="project-card-top">

                  <span className="project-number">
                    {project.id}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>

                  <Icon
                    className="project-icon"
                    size={22}
                    strokeWidth={1.2}
                  />

                </div>

                <div className="project-preview">

                  {project.image ? (

                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />

                      <div className="project-image-overlay">
                        <span>
                          VIEW IMAGE
                        </span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.3}
                        />
                      </div>
                    </>

                  ) : (

                    <>
                      <div className="preview-grid" />

                      <div className="preview-symbol">
                        <Icon
                          size={42}
                          strokeWidth={0.8}
                        />
                      </div>

                      <div className="github-preview">
                        <span>GITHUB</span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.3}
                        />
                      </div>
                    </>

                  )}

                </div>

                <div className="project-card-content">

                  <h2>
                    {project.title}
                  </h2>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                </div>

                <div className="project-card-footer">

                  <span>
                    {project.type === "media"
                      ? "PHOTOGRAPHY / MEDIA"
                      : "SOURCE CODE"}
                  </span>

                  <span className="project-action">

                    {project.type === "media"
                      ? "OPEN IMAGE"
                      : "VIEW ON GITHUB"}

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.3}
                    />

                  </span>

                </div>

              </article>
            );
          })}

        </div>

      ) : (

        <div className="projects-empty">

          <span>
            {activeFilter === "WEB DEVELOPMENT"
              ? "/web-development"
              : "/projects"}
          </span>

          <h2>
            {activeFilter === "WEB DEVELOPMENT"
              ? "Web projects coming soon."
              : "No projects found."}
          </h2>

          <p>
            {activeFilter === "WEB DEVELOPMENT"
              ? "This section will be updated with web projects soon."
              : "Try another category or search term."}
          </p>

        </div>

      )}

      {selectedImage && (

        <div
          className="image-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="lightbox-close"
              onClick={() =>
                setSelectedImage(null)
              }
              aria-label="Close image"
            >
              <X
                size={20}
                strokeWidth={1.2}
              />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="lightbox-caption">

              <div>
                <span>
                  {selectedImage.category}
                </span>

                <h3>
                  {selectedImage.title}
                </h3>
              </div>

              <span className="lightbox-number">
                {selectedImage.id}
              </span>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Projects;
