import React from "react";

const VisaChecklist = () => {
  const data = {
    title: "Visa Check List",
    id: "visa-checklist",
    sections: [
      {
        subtitle: "OFC Appointment",
        items: [
          "Original Passport",
          "DS 160 Confirmation Page",
          "Interview Appointment Confirmation Page",
        ],
      },
      {
        subtitle: "Visa Interview",
        items: [
          "Original Passport",
          "I20 Document",
          "DS 160 Confirmation Page",
          "Interview Appointment Confirmation Page",
          "Visa Fee Payment Receipt ($185)",
          "SEVIS Fee Receipt ($350)",
          {
            text: "Educational Credentials",
            subItems: [
              "Semester Wise",
              "Consolidated Marks Memo",
              "Provisional Certificate",
              "Original Degree (For Students who completed 4-2 and obtained results only)",
              "X and XII Marksheets",
            ],
          },
          {
            text: "Test Score Reports",
            subItems: ["TOEFL / IELTS / PTE / DET", "GRE / GMAT / SAT / ACT"],
          },
          "Evidence of Scholarship / Grant if any",
          {
            text: "Internship, Work Experience Letter, if any",
            subItems: [
              "6 Months Pay Slips",
              "6 Months Bank Statement with Salary Credits",
              "Relieving Letter if any",
            ],
          },
          "Educational Loan Document",
          {
            text: "Income Proofs – 3 Years timely filed ITR’s",
            subItems: [
              "Salary – Form 16",
              "Business – Form 2D",
              "Rental Income – Rental Agreements",
              "Agriculture – Sale Receipts & MRO letter",
            ],
          },
          "Bank Statement with transactions for last 6 months",
          {
            text: "Other Savings Certificates",
            subItems: [
              "Fixed Deposits",
              "PF Withdrawl Letter",
              "MF / Shares / Demat Statement / LIC Surrender Value Certificate",
            ],
          },
          "Property Documents, if any",
          "CA / CE Report if taken",
        ],
      },
    ],
  };

  return (
    <div className="container my-5" id="visa-check">
      <section id={data.id}>
        <h2 className="mb-4">{data.title}</h2>
        {data.sections.map((section, idx) => (
          <div key={idx} className="mb-4">
            <h4 className="text-danger fw-bold">{section.subtitle}</h4>
            <ol>
              {section.items.map((item, i) =>
                typeof item === "string" ? (
                  <li key={i}>{item}</li>
                ) : (
                  <li key={i}>
                    {item.text}
                    <ul>
                      {item.subItems.map((sub, j) => (
                        <li key={j}>{sub}</li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ol>
          </div>
        ))}
      </section>
    </div>
  );
};

export default VisaChecklist;
