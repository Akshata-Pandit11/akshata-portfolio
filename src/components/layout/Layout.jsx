import Sidebar from "./SideBar";
import TopBar from "./TopBar";
import StatusBar from "./StatusBar";
import EditorTab from "./EditorTab";
import { useState } from "react";

function Layout({ children }) {
  const [explorerOpen, setExplorerOpen] = useState(false);
  return (
    <div className="app-shell">
      <TopBar onMenu={() => setExplorerOpen(true)} />

      <div className="workspace">
        <Sidebar isOpen={explorerOpen} onClose={() => setExplorerOpen(false)} />

        <section className="editor">
          <EditorTab />

          <main className="main-content">
            {children}
          </main>
        </section>
      </div>

      <StatusBar />
    </div>
  );
}

export default Layout;
