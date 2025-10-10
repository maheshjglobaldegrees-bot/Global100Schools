import React from "react";

const Tuition = () => {
  const data = {
    title: "Average Tuition Costs",
    id: "tuition",
    headers: ["University Type", "Tuition Per Year USD", "Total Tuition INR Full Course"],
    rows: [
      ["Top 40 Universities", "$25,000 - $30,000", "₹40L - ₹50L"],
      ["Top 100 Universities", "$20,000 - $30,000", "₹28L - ₹35L"],
      ["Other Universities", "$12,000 - $17,000", "₹20L - ₹25L"],
    ],
  };

  return (
    <div className="container my-5">
      <section id={data.id}>
        <h2 className="mb-4 text-danger fw-bold">{data.title}</h2>
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-danger">
              <tr>
                {data.headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Tuition;
