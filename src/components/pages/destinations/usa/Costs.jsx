import React from "react";

const Costs = () => {
  const data = [
    {
      title: "Other Costs Involved",
      id: "costs",
      tableHeaders: ["Particulars", "Costs"],
      tableData: [
        ["Average Application Fee Per University", "$70-$100"],
        ["GRE Score Reporting fee (4 Universities Free on Day of Exam)", "₹2881.36+Tax Per Uni"],
        ["TOEFL Score Reporting Fee (4 Free 2 days before Exam)", "₹2000+Tax Per Uni"],
        ["IELTS Score Reporting Fee (First 5 Free)", "₹250 Per University"],
        ["WES Evaluation Fee", "$237"],
        ["WES Reporting Fee", "$45 Per University"],
        ["Visa Fee", "$185"],
        ["SEVIS Fee", "$350"],
      ],
    },
  ];

  return (
    <div className="container my-5" id="costs">
      {data.map((item, index) => (
        <section id={item.id} key={index} className="my-5">
          <h2 className="mb-4 text-danger fw-bold">{item.title}</h2>

          {/* Table */}
          <table className="table table-bordered table-striped table-hover border-danger">
            <thead className="table-danger text-center">
              <tr>
                {item.tableHeaders.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {item.tableData.map((row, rIndex) => (
                <tr key={rIndex}>
                  {row.map((cell, cIndex) => (
                    <td key={cIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
};

export default Costs;
