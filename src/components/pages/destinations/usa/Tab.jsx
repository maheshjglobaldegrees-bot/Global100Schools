// Tabs.jsx
import React, { useState } from "react";
import "../../css/destinations/studyinusa/tabs.css";

const Tabs = ({ country = "USA" }) => {
  const points = [
    { id: "why-study", label: `Why Study in ${country}` },
    { id: "intakes", label: "Major Intakes" },
    { id: "admission", label: "Admission Process" },
    { id: "exams", label: "Exams Required" },
    { id: "costs", label: "Other Costs Involved" },
    { id: "checklist", label: "Application Process Checklist" },
    { id: "cities", label: `Popular Cities & Student Cost of Living in ${country}` },
    { id: "courses", label: "Popular Courses" },
    { id: "universities", label: `Popular Universities in ${country}` },
    { id: "tuition", label: "Average Tuition Costs" },
    { id: "visa", label: "Visa Process" },
    { id: "visa-check", label: "Visa Checklist" },
    { id: "work", label: "Work While You Study" },
    { id: "after-edu", label: "What After Education?" },
  ];

  const [active, setActive] = useState("why-study");

  const handleClick = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container my-5 bottom ">
      <div className="glass-container rounded-pill px-4 py-2">
        <ul className="nav justify-content-center flex-wrap m-0">
          {points.map((point) => (
            <li key={point.id} className="nav-item m-1">
              <button
                onClick={() => handleClick(point.id)}
                className={`tab-link ${active === point.id ? "active" : ""}`}
              >
                {point.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
