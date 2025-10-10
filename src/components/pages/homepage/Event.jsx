import React, { useEffect, useRef, useState } from "react";
import "./css/Event.css";

const Event = () => {
  const [angle, setAngle] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);

  const cardsData = [
    { title: "Card 1", text: "First event description", color: "#FF6B6B" },
    { title: "Card 2", text: "Second event description", color: "#4ECDC4" },
    { title: "Card 3", text: "Third event description", color: "#FFD93D" },
    { title: "Card 4", text: "Fourth event description", color: "#1A535C" },
    { title: "Card 5", text: "Fifth event description", color: "#FF9F1C" },
  ];

  const step = 360 / cardsData.length; // angle per card

  useEffect(() => {
    const handleScroll = (e) => {
      if (!hovered) return; // only active on hover
      if (isScrolling) return; // prevent skipping

      e.preventDefault(); // stop page scroll
      setIsScrolling(true);

      const delta = e.deltaY > 0 ? 1 : -1;
      setAngle((prev) => prev + delta * step);

      setTimeout(() => setIsScrolling(false), 800);
    };

    const current = containerRef.current;
    if (current) {
      current.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (current) current.removeEventListener("wheel", handleScroll);
    };
  }, [step, isScrolling, hovered]);

  return (
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 border-end border-success p-4">
          <h2>Events</h2>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              Latest Update
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Admit
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              A third item
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              A fourth item
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              And a fifth one
            </a>
          </div>
        </div>

        {/* Rolling Drum Cards */}
        <div className="col-md-9">
          <div
            className="event-stage"
            ref={containerRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="drum" style={{ transform: `rotateX(${angle}deg)` }}>
              {cardsData.map((card, idx) => (
                <div
                  key={idx}
                  className="drum-card"
                  style={{
                    backgroundColor: card.color,
                    transform: `rotateX(${step * idx}deg) translateZ(250px)`,
                  }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
