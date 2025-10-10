import React from "react";

const Universities = () => {
  const data = {
    title: "Popular Universities in USA",
    id: "universities",
    sections: [
      {
        category: "IVY League Universities",
        headers: ["Private IVY Leagues", "Public IVY’s"],
        rows: [
          ["Brown University", "Penn State University"],
          ["Cornell University", "University of Florida"],
          ["Columbia University", "University of Michigan Ann Arbor"],
          ["Dartmouth College", "U North Carolina Chapel Hill"],
          ["Harvard University", "University of Texas Austin"],
          ["Princeton University", "University of Washington"],
          ["U Penn University", "University of Wisconsin Madison"],
          ["Yale University", "University of Vermont"],
          ["", "University of Virginia"],
        ],
      },
      {
        category: "Association of American Universities",
        headers: ["Public AAU", "Private AAU"],
        rows: [
          ["Georgia Institute of Technology", "Carnegie Mellon University"],
          ["Rutgers State University", "Emory University"],
          ["SUNY Stony Brook", "MIT"],
          ["The Ohio State University", "New York University"],
          ["University of California Davis", "Rice University"],
          ["University of California Berkley", "The John Hopkins University"],
          ["U of Maryland College Park", "The University of Chicago"],
          ["University of Oregon", "University of Rochester"],
          ["University of South Florida", "U of Southern California"],
        ],
      },
      {
        category: "Other Popular Universities",
        headers: ["Popular Universities", "Popular University"],
        rows: [
          ["Arizona State University", "University of Central Florida"],
          ["Georgia State University", "University of Cincinnati"],
          ["Indiana University Bloomington", "University of Houston Main Campus"],
          ["Kansas State University", "University of Nebraska Lincoln"],
          ["Oregon State University", "University of New Mexico"],
          ["San Fransisco State University", "University of South Florida"],
          ["San Jose State University", "University of Texas Dallas"],
          ["SUNY Albany", "West Virginia University"],
          ["Syracuse University", "Virginia Tech University"],
        ],
      },
    ],
  };

  return (
    <div className="container my-5">
      <section id={data.id}>
        <h2 className="mb-4 text-danger fw-bold">{data.title}</h2>
        {data.sections.map((section, secIndex) => (
          <div key={secIndex} className="mb-5">
            <h3 className="mb-3 text-danger fw-bold">{section.category}</h3>
            <div className="table-responsive">
              <table className="table table-bordered border-danger">
                <thead className="table-danger text-center">
                  <tr>
                    {section.headers.map((header, headIndex) => (
                      <th key={headIndex}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Universities;