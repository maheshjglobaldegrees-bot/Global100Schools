import React from "react";
import "../../css/destinations/studyinusa/cities.css";

const Courses = () => {
  const data = {
    title: "Popular Courses",
    id: "courses",
    courses: [
      "Computer Science & IT",
      "Engineering",
      "Health Sciences",
      "Pharmacy",
      "Social Sciences",
      "Architecture",
      "Business & Administration",
      "Law",
    ],
  };

  return (
    <div className="container my-5">
      <section id={data.id}>
        <h2 className="mb-4">{data.title}</h2>
        <div className="row g-4">
          {data.courses.map((course, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="card red-shadow h-100 border-0 text-center">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <h5 className="card-title fw-bold">{course}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
