import React from "react";

const Checklist = () => {
  const data = {
    title: "Application Process Checklist",
    id: "checklist",
    items: [
      {
        text: "Scanned Copies of Memos",
        subItems: [
          "Semester Wise",
          "Consolidated Marks Memo",
          "Provisional Certificate",
          "Original Degree (For Students who completed 4-2 and obtained results only)",
        ],
      },
      {
        text: "Course Completion Letter or Bonafede Certificate",
      },
      {
        text: "X and XII Marks Memos",
      },
      {
        text: "Recommendation Letters",
        subItems: [
          "Dated",
          "Signed on letter head",
          "Mobile Number & Email Address of Professor (Mandatory)",
        ],
      },
      { text: "Statement of Purpose" },
      { text: "Resume" },
      { text: "Test Score Cards (GRE, TOEFL, IELTS, PTE …)" },
      { text: "Passport (First Page and Last Page)" },
      { text: "Internship, Work Experience and Relieving Letters if any" },
      { text: "Supplemental Forms & Departmental Forms" },
      { text: "Extra-Curricular Activities, if any" },
    ],
  };

  return (
    <div className="container my-5">
      <section id={data.id}>
        <h2 className="mb-4 text-danger fw-bold ">{data.title}</h2>
        <ol className="list-group list-group-numbered ">
          {data.items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.text}
              {item.subItems && (
                <ul className="mt-2 ms-4">
                  {item.subItems.map((sub, subIndex) => (
                    <li key={subIndex}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Checklist;