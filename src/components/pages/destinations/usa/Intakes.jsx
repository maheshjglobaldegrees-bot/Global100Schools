import React from 'react';

const Intakes = () => {
  const data = [
    {
      title: "Major Intakes",
      id: "intakes",
      tableHeaders: ["Intake", "Start Date", "Notes"],
      tableData: [
        ["Spring Intake", "January", "Secondary Intake"],
        ["Summer Intake", "April / May", "Minimal Intake"],
        ["Fall Intake", "August", "Primary Intake"],
      ],
    },
  ];

  return (
    <div className="container my-5">
      {data.map((item, index) => (
        <section id={item.id} key={index} className="my-5">
          <h2 className="mb-4 text-danger fw-bold">{item.title}</h2>

          {item.tableData ? (
            <table className="table table-bordered table-striped table-hover border-danger">
              <thead className="table-danger text-center">
                <tr>
                  {item.tableHeaders.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className='text-center'>
                {item.tableData.map((row, rIndex) => (
                  <tr key={rIndex}>
                    {row.map((cell, cIndex) => (
                      <td key={cIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            item.content
          )}
        </section>
      ))}
    </div>
  );
};

export default Intakes;