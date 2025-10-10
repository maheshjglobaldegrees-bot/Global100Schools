import React from "react";
import "../../css/destinations/studyinaustralia.css";
import { Link } from "react-router-dom";
import Tabs from "../usa/Tab";

const Studyinaustralia = () => {
  const australiaData = {
  highlights: [
    "Work While You Study",
    "English Language Scores Mandatory",
    "University activities strictly monitored by government bodies",
    "World Class qualification with low cost of Education.",
    "Up to 4 Years Post Study Work Visa depending on location",
    "Universities with a lot of research funding",
  ],

  exams: [
    {
      test: "TOEFL",
      sections: "Reading, Writing, Listening, Speaking",
      fees: "₹16,900",
    },
    {
      test: "IELTS",
      sections: "Reading, Writing, Listening, Speaking",
      fees: "₹17,000",
    },
    {
      test: "PTE",
      sections: "Reading, Writing, Listening, Speaking",
      fees: "₹17,000",
    },
  ],

  intakes: [
    { season: "Semester 1", month: "February", type: "Secondary Intake" },
    { season: "Semester 2", month: "July", type: "Primary Intake" },
    { season: "Semester 3", month: "October / November", type: "Minor Intake" },
  ],

  costs: [
    {
      type: "Average Application Fee Per University (Only For Go8)",
      amount: "$70-$100",
    },
    { type: "Visa Fee", amount: "$1,600" },
    { type: "Medical", amount: "₹5,000" },
  ],

  applicationChecklist: [
    {
      item: "Scanned Copies of Memos",
      subItems: [
        "Semester Wise",
        "Consolidated Marks Memo",
        "Provisional Certificate",
        "Original Degree (For Students who completed 4-2 and obtained results only)",
      ],
    },
    { item: "Course Completion Letter or Bonafide Certificate" },
    { item: "X and XII Marks Memos" },
    { item: "Statement of Purpose" },
    { item: "Resume" },
    { item: "Test Score Cards (TOEFL, IELTS, PTE …)" },
    { item: "Passport (First Page and Last Page)" },
    { item: "Internship, Work Experience and Relieving Letters if any" },
    { item: "Supplemental Forms & Departmental Forms" },
    { item: "Extra-Curricular Activities, if any" },
  ],

  majorCities: {
    left: [
      { city: "Melbourne", cost: "Refer Below" },
      { city: "Sydney", cost: "Refer Below" },
      { city: "Brisbane", cost: "Refer Below" },
      { city: "Adelaide", cost: "Refer Below" },
      { city: "Perth", cost: "Refer Below" },
    ],
    right: [
      { city: "Canberra", cost: "Refer Below" },
      { city: "Hobart", cost: "Refer Below" },
      { city: "Darwin", cost: "Refer Below" },
      { city: "Newcastle", cost: "Refer Below" },
      { city: "Gold Coast", cost: "Refer Below" },
    ],
  },

  courses: [
    "Accounting",
    "Agriculture",
    "Architecture & Design",
    "Bio Technology / Bio Informatics",
    "Civil/Construction",
    "Engineering",
    "IT & Computing",
    "Medicine",
    "Social Work",
  ],

  universities: [
    "The University of Melbourne",
    "The University of Adelaide",
    "The University of Sydney",
    "University of Technology Sydney",
    "The University of New South Wales",
    "RMIT",
    "The Australian National University",
    "Macquarie University",
    "Monash University",
    "University of Wollongong",
    "The University of Queensland",
    "Curtin University",
    "The University of Western Australia",
    "The University of New Castle",
  ],

  tuitionCosts: [
    { type: "Top Universities", aud: "$40,000 - $55,000", inr: "₹27L - ₹35L" },
    {
      type: "Medium Universities",
      aud: "$25,000 - $40,000",
      inr: "₹16L - ₹26L",
    },
    {
      type: "Other Universities",
      aud: "$18,000 - $25,000",
      inr: "₹12L - ₹16L",
    },
  ],

  visaChecklist: [
    { item: "Certificate of Enrolment" },
    { item: "Proof of Identity (Passport) All Pages" },
    { item: "Medical Explanation" },
    {
      item: "Educational Credentials",
      subItems: [
        "Semester Wise",
        "Consolidated Marks Memo",
        "Provisional Certificate",
        "Original Degree (For Students who completed 4-2 and obtained results only)",
        "X and XII Marksheets",
      ],
    },
    {
      item: "Test Score Reports",
      subItems: ["TOEFL/IELTS/PTE/DET"],
    },
    { item: "Evidence of Scholarship / Grant if any" },
    {
      item: "Internship, Work Experience Letter, if any",
      subItems: [
        "6 Months Pay Slips",
        "6 Months Bank Statement with Salary Credits",
        "Relieving Letter if any",
      ],
    },
    { item: "Educational Loan Document" },
    {
      item: "Income Proofs – 3 Years timely filed ITRs (Only Parental Income)",
      subItems: [
        {
          item: "Salary – Form 16",
          subItems: [
            "6 Months Bank Statement with Salary Credits",
            "3 Months Pay Slips",
            "Last 3 Years timely filed ITRs",
          ],
        },
        {
          item: "Business – Form 2D",
          subItems: [
            "Business Registration Certificate / MSME Certificate",
            "Last 3 Years ITRs timely filed",
            "Business Bank Statement",
            "GST Registration, if applied",
            "Work Orders",
          ],
        },
        {
          item: "Rental Income – Rental Agreements",
          subItems: [
            "Property Document, translated to English",
            "Last 3 Years timely filed ITRs",
            "Rental Agreement",
            "Property Taxes paid",
          ],
        },
        {
          item: "Agriculture – Sale Receipts & MRO letter",
          subItems: [
            "Land Documents",
            "Sale receipts in Market Yard",
            "Timely filed ITRs",
          ],
        },
      ],
    },
    { item: "Bank Statement with transactions for last 6 months" },
    {
      item: "Other Savings Certificates",
      subItems: ["Fixed Deposits"],
    },
    { item: "Property Documents, if any" },
    { item: "CA / CE Report if taken" },
    { item: "Sponsor Affidavit" },
    { item: "Any Other Documents Required" },
  ],
};


  return (
    <>
      {/* hero section */}
      <section className="container-fluid australiabg d-flex align-items-center justify-content-center">
        <Link className="btn btn-danger p-4 icon rounded-pill">
          Talk to an Expert Counsellor for Free
        </Link>
        <Tabs country="Australia" />
      </section>
      {/*WHY STUDY IN AUSTRALIA*/}
      <section className="container my-4" id="why-study">
        <h2 className="text-danger fw-bold">WHY STUDY IN AUSTRALIA</h2>
        <h3 className="text-danger fw-bold">Australia Overview</h3>
        <p>
          Australia is the third most popular destination for international
          students in India and is also most preferred study destination for
          students from India after USA and UK. Most of the Indian parent
          fraternity find Australia to be a better student destination because
          of its proximity to India, flight time from India to Australia
          generally takes 12hours. Apart, Australia is a popular place for
          learning, visiting and residing.{" "}
        </p>
        <p className="text-center text-danger border rounded p-2">
          <q>
            9/100 – 9 out of Top 100 Universities are from Australia as Per QS
            News 2024
          </q>
        </p>
        <p>
          Australian institution provides students with a world-class education,
          invaluable job skills, and a high quality of living. Where Students
          gets everything in one destination.
        </p>
      </section>
      {/* highlights */}
      <section className="container my-4" id="highlights">
        <h2 className="fw-bold text-danger">Other Major Highlights:</h2>
        <ul className="highlights">
          {australiaData.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* major intakes */}
      <section className="container my-4" id="intakes">
        <h2 className="fw-bold text-danger">MAJOR INTAKES</h2>
        <p>In Australia we have 3 intakes</p>
        <table className="table table-bordered table-striped border-danger">
          <thead>
            <tr>
              <th>Intake</th>
              <th>Month</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {australiaData.intakes.map((item, index) => (
              <tr key={index}>
                <td>{item.season}</td>
                <td>{item.month}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* ADMISSION PROCESS */}
      <section className="container my-4">
        <h2>ADMISSION PROCESS</h2>
        <img src="/" alt="admission" />
      </section>
      {/* exams */}
      <section className="container my-4" id="exams">
        <h2 className="fw-bold text-danger">
          Exams Required – English Requirements in Australia
        </h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Sections</th>
              <th>Exam Fees</th>
            </tr>
          </thead>
          <tbody>
            {australiaData.exams.map((exam, index) => (
              <tr key={index}>
                <td>{exam.test}</td>
                <td>{exam.sections}</td>
                <td>{exam.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* costs */}
      <section className="container my-4" id="costs">
        <h2 className="fw-bold text-danger">Other Costs Involved</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Type of Cost</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {australiaData.costs.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td className="fw-bold text-success">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* checklist */}
      <section className="container my-4" id="checklist">
        <h2 className="fw-bold text-danger">Application Process Checklist</h2>
        <ul className="checklist">
          {australiaData.applicationChecklist.map((item, index) => (
            <li key={index}>
              {item.item}
              {item.subItems && (
                <ul>
                  {item.subItems.map((sub, subIndex) => (
                    <li key={subIndex}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
      {/* cities */}
      <section className="container my-4" id="cities">
        <h2 className="fw-bold text-danger">
          Popular Cities & Student Cost of Living in Australia
        </h2>
        <div className="row">
          <div className="col-md-6">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Average Cost of Living</th>
                </tr>
              </thead>
              <tbody>
                {australiaData.majorCities.left.map((item, index) => (
                  <tr key={index}>
                    <td>{item.city}</td>
                    <td>{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Average Cost of Living</th>
                </tr>
              </thead>
              <tbody>
                {australiaData.majorCities.right.map((item, index) => (
                  <tr key={index}>
                    <td>{item.city}</td>
                    <td>{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* courses */}
      <section className="container my-4" id="courses">
        <h2 className="fw-bold text-danger">Popular Courses in Australia</h2>
        <div className="row g-3">
          {australiaData.courses.map((course, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-danger course-card">
                <div className="card-body">
                  <h5 className="card-title text-center">{course}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* universities */}
      <section className="container my-4" id="universities">
        <h2 className="fw-bold text-danger">
          Popular Universities in Australia
        </h2>
        <table className="table table-bordered table-striped text-center">
          <tbody>
            {Array.from({
              length: Math.ceil(australiaData.universities.length / 2),
            }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {australiaData.universities
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((uni, colIndex) => (
                    <td key={colIndex}>{uni}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* tuition costs */}
      <section className="container my-4" id="tuition">
        <h2 className="fw-bold text-danger">Average Tuition Costs</h2>
        <table className="table table-bordered table-striped text-center">
          <thead>
            <tr>
              <th>University Type</th>
              <th>Tuition Per Year (AUD)</th>
              <th>Total Tuition (INR Full Course)</th>
            </tr>
          </thead>
          <tbody>
            {australiaData.tuitionCosts.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.aud}</td>
                <td>{item.inr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* VISA PROCESS */}
      <section className="container my-4" id="visa">
        <h2 className="text-danger fw-bold">VISA PROCESS</h2>
        <img src="/" alt="visa process" />
      </section>

      {/* visa checklist */}
      <section className="container my-4" id="visa-check">
        <h2 className="text-danger fw-bold">VISA CHECK LIST</h2>
        <ul className="checklist">
          {australiaData.visaChecklist.map((item, index) => (
            <li key={index}>
              {item.item}
              {item.subItems && (
                <ul>
                  {item.subItems.map((sub, subIndex) =>
                    typeof sub === "string" ? (
                      <li key={subIndex}>{sub}</li>
                    ) : (
                      <li key={subIndex}>
                        {sub.item}
                        {sub.subItems && (
                          <ul>
                            {sub.subItems.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
      {/* WORK WHILE YOU STUDY */}
      <section className="container my-4" id="work">
        <h2 className="text-danger fw-bold">WORK WHILE YOU STUDY</h2>
        <p>
          Students should understand their eligibility to work before starting a
          job as student in Australia. International students can work off
          campus only if their study permit allows them to do so. It is always
          important to understand the study permit norms before starting a job
          as student in Australia. Full time student at a designated learning
          institute (DLI) holding valid study permit can work off campus for “24
          hours per week campus during their regular college sessions” and “more
          than 24 hours a week during holidays” in Australia. Everybody willing
          to work in Australia will have to apply for TFN (Tax File Number)
          before starting their work.
        </p>
        <p>
          Following is some other the opportunities available for international
          students in Australia
        </p>
        <ul>
          <li>On Campus Employment</li>
          <li>Off Campus Employment</li>
          <li>Graduate Assistantships</li>
          <li>Research Assistantships</li>
          <li>Internships</li>
          <li>Volunteering works</li>
          <li>Work Study Programs</li>
          <p>
            It is very important to understand Visa regulations before taking up
            a work opportunity while studying in Australia.
          </p>
        </ul>
      </section>
      {/* WHAT AFTER EDUCATION? */}
      <section className="container my-4" id="after-edu">
        <h2 className="text-danger fw-bold">WHAT AFTER EDUCATION?</h2>
        <p>
          One can work up to 4 Years in Australia if he completes his 2 or more
          Years of education in any CRICOS approved Institution. Student will
          have to apply for a Post Graduation Work Permit as soon as he received
          the course completion certificate from the institution he studied.
        </p>
        <p>
          Once student get PSWV he can apply for Permanent residence either
          through Sub Class 186 or 189 or 491. One can assess their situation
          and can file for Permanent residence based on their profile. One
          should go through the eligibility check and file EOI (Expression of
          Interest) with immigration and upon successful completion will have to
          attend an interview to get Permanent residence.{" "}
        </p>
        <p>
          Your step towards getting in a Permanent Residence in Australia will
          just start with getting into the best institutions in the world. It is
          always advisable to talk to local immigration experts in Australia for
          a better immigration advise. Talk to our counsellors for a free advice
          on university shortlisting.{" "}
        </p>
      </section>
    </>
  );
};

export default Studyinaustralia;
