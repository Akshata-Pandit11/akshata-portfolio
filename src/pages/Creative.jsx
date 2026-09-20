import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

const filters = ["ALL", "PHOTOGRAPHY", "DESIGN", "MEDIA", "CAMPAIGNS"];

const work = [
  { number: "01", title: "Krishna — Stage Photography", category: "PHOTOGRAPHY", filters: ["PHOTOGRAPHY"], image: "/images/projects/media/krishna-stage-01.JPG", description: "A stage moment observed through light, movement and performance." },
  { number: "02", title: "Krishna — Flute Performance", category: "PHOTOGRAPHY", filters: ["PHOTOGRAPHY"], image: "/images/projects/media/krishna-stage-02.JPG", description: "Performance photography focused on gesture, rhythm and atmosphere." },
  { number: "03", title: "Kaane Aagiddare", category: "DESIGN / CREATIVE DIRECTION", filters: ["DESIGN"], image: "/images/projects/media/kaane-aagiddare.png", description: "Design and creative direction for a visual cultural work." },
  { number: "04", title: "Ticgetz Campaign", category: "DESIGN / CAMPAIGN", filters: ["DESIGN", "CAMPAIGNS"], image: "/images/projects/media/ticgetz.png", description: "Campaign visual work shaped for a clear, memorable message." },
  { number: "05", title: "Event & Cultural Photography", category: "PHOTOGRAPHY / MEDIA", filters: ["PHOTOGRAPHY", "MEDIA"], image: "/images/projects/media/event-photography.jpeg", description: "Documentation of shared cultural moments and event energy." },
  { number: "06", title: "GAT Media Team", category: "MEDIA", filters: ["MEDIA"], image: "/images/projects/media/gat-media-team.jpeg", description: "Media coverage as part of Aishwarya’s DKS Hegde and GAT media teams for the Silver Jubilee, Buddy Bench with Sadhguru and Teachers’ Quix events." },
  { number: "07", title: "Wildlife Photography", category: "PHOTOGRAPHY", filters: ["PHOTOGRAPHY"], image: "/images/projects/media/wildlife.JPG", description: "Patient observation of wildlife in its natural environment." },
];

function Creative() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const filteredWork = useMemo(() => activeFilter === "ALL" ? work : work.filter((item) => item.filters.includes(activeFilter)), [activeFilter]);
  const selectedWork = selectedIndex === null ? null : filteredWork[selectedIndex];

  useEffect(() => {
    if (!selectedWork) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") setSelectedIndex((index) => (index + 1) % filteredWork.length);
      if (event.key === "ArrowLeft") setSelectedIndex((index) => (index - 1 + filteredWork.length) % filteredWork.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [selectedWork, filteredWork.length]);

  return (
    <main className="creative-page">
      <header id="story" className="creative-header">
        <div className="creative-index"><span>07</span><span>// CREATIVE ARCHIVE</span></div>
        <div className="creative-heading"><p>/ creative</p><h1>Visual work<br /><em>outside the code.</em></h1><span>Photography, design, media<br />and visual storytelling.</span></div>
        <div className="creative-keywords"><span>PHOTOGRAPHY</span><span>DESIGN</span><span>MEDIA</span><span>STORYTELLING</span></div>
      </header>

      <section className="creative-story"><span>FIELD NOTE / 01</span><div><h2>“Photography taught me to slow down.”</h2><p>Visual storytelling gives ideas room to be observed before they are built. Photography and design sit alongside my engineering work as another way of paying attention, framing intent and communicating clearly.</p></div></section>

      <section className="creative-controls" aria-label="Filter creative work">
        <span>FILTER ARCHIVE</span><div>{filters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? "creative-filter active" : "creative-filter"} onClick={() => { setActiveFilter(filter); setSelectedIndex(null); }}>{filter}</button>)}</div>
      </section>

      <section id="gallery" className="creative-gallery">
        {filteredWork.map((item, index) => <article className={`creative-card creative-card-${item.number}`} key={item.number}>
          <button type="button" className="creative-image-button" onClick={() => setSelectedIndex(index)} aria-label={`View ${item.title}`}>
            <img src={item.image} alt={item.title} /> <span className="creative-view">VIEW PROJECT <ArrowUpRight size={14} /></span>
          </button>
          <div className="creative-card-meta"><span>{item.number}</span><div><p>{item.category}</p><h3>{item.title}</h3><small>{item.description}</small></div></div>
        </article>)}
      </section>

      <section id="process" className="creative-process"><div className="creative-process-label">PROCESS / DATA STRUCTURE</div>{[["01", "OBSERVE"], ["02", "FRAME"], ["03", "DESIGN"], ["04", "TELL"]].map(([number, label]) => <div className="creative-process-step" key={number}><span>{number}</span><strong>{label}</strong><i>↗</i></div>)}</section>

      <section className="creative-terminal"><div><span>$</span> ls creative/</div><p>photography/<br />design/<br />media/<br />campaigns/</p></section>
      <footer className="creative-footer"><span>END OF ARCHIVE</span><span>AKSHATA / CREATIVE</span></footer>

      {selectedWork && <div className="creative-lightbox" role="dialog" aria-modal="true" aria-label={selectedWork.title} onClick={() => setSelectedIndex(null)}>
        <button className="creative-lightbox-close" type="button" aria-label="Close image viewer" onClick={() => setSelectedIndex(null)}><X size={20} /></button>
        <button className="creative-lightbox-nav creative-lightbox-prev" type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setSelectedIndex((index) => (index - 1 + filteredWork.length) % filteredWork.length); }}><ArrowLeft size={20} /></button>
        <figure onClick={(event) => event.stopPropagation()}><img src={selectedWork.image} alt={selectedWork.title} /><figcaption><span>{selectedWork.category}</span><strong>{selectedWork.number} / {selectedWork.title}</strong></figcaption></figure>
        <button className="creative-lightbox-nav creative-lightbox-next" type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setSelectedIndex((index) => (index + 1) % filteredWork.length); }}><ArrowRight size={20} /></button>
      </div>}
    </main>
  );
}

export default Creative;
