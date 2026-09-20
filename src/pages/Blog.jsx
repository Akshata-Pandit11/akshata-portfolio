import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "ALL",
  "AI / ML",
  "DATA",
  "TECH",
  "CREATIVE",
  "EXPERIENCES",
];

const posts = [
  {
    id: "leukemia-classification",
    number: "01",
    category: "AI / ML",
    title: "From Gene Expression to Images",
    description:
      "Exploring a multi-model approach to leukemia classification using gene expression data, feature engineering and deep learning.",
    date: "2026",
    readTime: "08 MIN READ",
    featured: true,
    tags: [
      "Machine Learning",
      "Deep Learning",
      "Bioinformatics",
    ],
  },
  {
    id: "ibm-linuxone-datathon",
    number: "02",
    category: "TECH",
    title: "From Datathon Participants to Project Winners",
    description:
      "Our experience building a lake encroachment detection solution with IBM LinuxONE during the IBM Z Datathon.",
    date: "2025",
    readTime: "06 MIN READ",
    tags: [
      "IBM",
      "LinuxONE",
      "Computer Vision",
    ],
  },
  {
    id: "lake-encroachment-detection",
    number: "03",
    category: "AI / ML",
    title: "Detecting Lake Encroachment with Computer Vision",
    description:
      "A look into the idea, challenges and technical approach behind our lake encroachment detection project.",
    date: "2025",
    readTime: "07 MIN READ",
    tags: [
      "Computer Vision",
      "OpenCV",
      "CNN",
    ],
  },
  {
    id: "data-warehouse",
    number: "04",
    category: "DATA",
    title: "Building a Data Warehouse with Spark, Hive & Power BI",
    description:
      "What I learned while working with distributed data processing, data pipelines and business intelligence.",
    date: "2025",
    readTime: "07 MIN READ",
    tags: [
      "Apache Spark",
      "Hive",
      "Power BI",
    ],
  },
  {
    id: "technology-and-creativity",
    number: "05",
    category: "CREATIVE",
    title: "When Technology Meets Creativity",
    description:
      "Why engineering, photography, visual design and storytelling became interconnected parts of my journey.",
    date: "2026",
    readTime: "05 MIN READ",
    tags: [
      "Photography",
      "Design",
      "Creative Work",
    ],
  },
  {
    id: "engineering-and-photography",
    number: "06",
    category: "EXPERIENCES",
    title: "Photography Became Part of My Engineering Journey",
    description:
      "How working with cameras, events and visual storytelling shaped the way I approach technology and design.",
    date: "2026",
    readTime: "05 MIN READ",
    tags: [
      "Photography",
      "Media",
      "Experience",
    ],
  },
];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const featuredPost = posts.find(
    (post) => post.featured
  );

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "ALL" ||
        post.category === activeCategory;

      if (!query) {
        return matchesCategory;
      }

      const searchableText = [
        post.title,
        post.description,
        post.category,
        post.date,
        post.readTime,
        ...post.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(query)
      );
    });
  }, [activeCategory, searchTerm]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowFilters(false);
  };

  return (
    <main className="blog-page">

      <section className="blog-header">

        <div className="section-index">
          <span>06</span>
          <span>// journal</span>
        </div>

        <div className="blog-heading">

          <p className="eyebrow">/ blog</p>

          <h1>
            Ideas, experiments
            <span>& things I've learned.</span>
          </h1>

          <p className="blog-intro">
            A collection of technical experiments,
            project stories, creative work and lessons
            from building things.
          </p>

        </div>

        <div className="blog-count">

          <span>ARTICLES</span>

          <strong>
            {String(posts.length).padStart(2, "0")}
          </strong>

        </div>

      </section>

      {featuredPost && (
        <section id="featured" className="featured-post">

          <div className="featured-label">

            <span>FEATURED ARTICLE</span>

            <span>{featuredPost.number}</span>

          </div>

          <Link
            to={`/blog/${featuredPost.id}`}
            className="featured-content"
          >

            <div className="featured-main">

              <span className="featured-category">
                {featuredPost.category}
              </span>

              <h2>{featuredPost.title}</h2>

              <p>
                {featuredPost.description}
              </p>

              <div className="featured-tags">

                {featuredPost.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

            </div>

            <div className="featured-meta">

              <span>{featuredPost.date}</span>

              <span>{featuredPost.readTime}</span>

              <span className="featured-arrow">
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.5}
                />
              </span>

            </div>

          </Link>

        </section>
      )}

      <section className="blog-controls">

        <div className="blog-filter-area">

          <div className="blog-filter-label">
            <span>FILTER</span>

            <button
              type="button"
              className="mobile-filter-button"
              onClick={() =>
                setShowFilters((current) => !current)
              }
              aria-label="Toggle filters"
            >
              <SlidersHorizontal
                size={15}
                strokeWidth={1.5}
              />
            </button>
          </div>

          <div
            className={
              showFilters
                ? "blog-filters mobile-visible"
                : "blog-filters"
            }
          >

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "blog-filter active"
                    : "blog-filter"
                }
                onClick={() =>
                  handleCategoryChange(category)
                }
              >
                {category}
              </button>
            ))}

          </div>

        </div>

        <label className="blog-search">

          <Search
            size={15}
            strokeWidth={1.5}
          />

          <input
            type="text"
            placeholder="search articles..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          {searchTerm && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}

        </label>

      </section>

      <section className="blog-results-meta">

        <span>
          SHOWING{" "}
          {String(filteredPosts.length).padStart(2, "0")}
        </span>

        <span>
          {activeCategory === "ALL"
            ? "ALL CATEGORIES"
            : activeCategory}
        </span>

      </section>

      <section id="articles" className="blog-list">

        <div className="blog-list-header">

          <span>INDEX</span>

          <span>ARTICLE</span>

          <span>CATEGORY</span>

          <span>DATE</span>

          <span />

        </div>

        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="blog-row"
          >

            <span className="blog-number">
              {post.number}
            </span>

            <div className="blog-row-content">

              <div className="blog-row-title">

                <h3>{post.title}</h3>

                {post.featured && (
                  <span className="featured-badge">
                    FEATURED
                  </span>
                )}

              </div>

              <p>{post.description}</p>

              <div className="blog-row-tags">

                {post.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

            </div>

            <span className="blog-category">
              {post.category}
            </span>

            <div className="blog-date-wrapper">

              <span className="blog-date">
                {post.date}
              </span>

              <span className="blog-read-time">
                {post.readTime}
              </span>

            </div>

            <span className="blog-row-arrow">

              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
              />

            </span>

          </Link>
        ))}

        {filteredPosts.length === 0 && (
          <div className="blog-empty">

            <span className="blog-empty-code">
              404
            </span>

            <div>
              <h3>No articles found.</h3>

              <p>
                Try another search term or category.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("ALL");
              }}
            >
              RESET FILTERS
            </button>

          </div>
        )}

      </section>

      <section className="blog-terminal">

        <div className="terminal-top">

          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />

          <span className="terminal-title">
            akshata@portfolio:~/blog
          </span>

        </div>

        <div className="terminal-content">

          <span className="terminal-prompt">
            $
          </span>

          <span>
            cat thoughts.txt
          </span>

          <span className="terminal-cursor">
            _
          </span>

        </div>

      </section>

      <footer className="blog-footer">

        <span>
          END OF TRANSMISSION
        </span>

        <span>
          AKSHATA / JOURNAL
        </span>

      </footer>

    </main>
  );
}

export default Blog;
