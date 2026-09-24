import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
function TopBar({ onMenu, sidebarOpen }) {
  const location = useLocation();
  const file = location.pathname === "/" ? "home.jsx" : `${location.pathname.slice(1)}.jsx`;
  return (
    <header className="top-bar">
      {!sidebarOpen && <button className="mobile-explorer-toggle" onClick={onMenu} aria-label="Open explorer"><Menu size={18} /></button>}<div className="window-controls">
        <span className="window-dot" />
        <span className="window-dot" />
        <span className="window-dot" />
      </div>

      <div className="terminal-title"><span className="terminal-user">akshata-portfolio</span><span className="terminal-muted">/</span><span>{file}</span></div>

      <div className="top-bar-actions">
        <span>UTF-8</span><span>● AVAILABLE</span>
      </div>
    </header>
  );
}

export default TopBar;
