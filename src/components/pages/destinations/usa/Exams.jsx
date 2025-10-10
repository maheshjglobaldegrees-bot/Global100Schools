import React from 'react';

const Exams = () => {
  const data = [
    {
      title: "Exams Required",
      id: "exams",
      tableHeaders: ["Test Name", "Who Should Take", "Sections", "Cost"],
      tableData: [
        ["GRE", "Grad Aspirants", "Quantitative, Verbal, AWA", "$220"],
        ["GMAT", "Grad Aspirants", "Quantitative, Verbal, Reasoning, AWA", "$275"],
        ["TOEFL", "ALL", "Reading, Writing, Listening, Speaking", "₹16,900"],
        ["IELTS", "ALL", "Reading, Writing, Listening, Speaking", "₹17,000"],
        ["PTE", "ALL", "Reading, Writing, Listening, Speaking", "₹17,000"],
        ["DET", "ALL", "Reading, Writing, Listening, Speaking", "$65"],
        ["PSAT / NMSQT", "UG Aspirants", "Reading, Writing, Mathematics", "$18"],
        ["SAT", "UG Aspirants", "Reading & Writing, Mathematics", "$104"],
        ["ACT", "UG Aspirants", "English, Maths, Reading, Science", "$94"],
      ],
      advices: [
        "Student planning for Engineering & Sciences programs can take GRE",
        "Student Planning for Business & related programs can take GMAT",
        "Every student should take one of the 4 tests TOEFL, IELTS, PTE or DET",
        "Students planning for Under Graduation can either take SAT or ACT",
        "PSAT/NMSQT are taken for Scholarships and does not add for admissions.",
        "It is always suggested to take centre-based tests for better quality",
        "Having required test scores like GRE/ GMAT/ SAT/ ACT is always advisable. It improves quality of one’s application."
      ]
    },
  ];

  return (
    <div className="container my-5">
      {data.map((item, index) => (
        <section id={item.id} key={index} className="my-5">
          <h2 className="mb-4">{item.title}</h2>

          {/* Table */}
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

          {/* Advices List */}
          {item.advices && (
            <div className="mt-4">
              <h5 className='text-danger fw-bold'>Advices:</h5>
              <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                {item.advices.map((advice, i) => (
                  <li key={i}>{advice}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Exams;
