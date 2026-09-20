import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const tabs = [
  {
    label: "home.jsx",
    path: "/",
  },
  {
    label: "about.md",
    path: "/about",
  },
  {
    label: "experience.log",
    path: "/experience",
  },
  {
    label: "projects.jsx",
    path: "/projects",
  },
  {
    label: "skills.json",
    path: "/skills",
  },
  {
    label: "creative.gallery",
    path: "/creative",
  },
  {
    label: "blog.md",
    path: "/blog",
  },
  {
    label: "contact.py",
    path: "/contact",
  },
];

function EditorTab() {
  return (
    <div className="editor-tabs">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `editor-tab ${isActive ? "active" : ""}`
          }
        >
          <span>{tab.label}</span>
          <X size={12} strokeWidth={1.5} />
        </NavLink>
      ))}
    </div>
  );
}

export default EditorTab;