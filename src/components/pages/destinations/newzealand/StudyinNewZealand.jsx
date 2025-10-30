import React from "react";
import "../../css/destinations/studyinnewzealand.css";
import { Link } from "react-router-dom";
import Tabs from "../usa/Tab";


const StudyinNewZealand = () => {
  const d = {
  "country": "New Zealand",
  "hero": {
    "cta": "Talk to an Expert Counsellor for Free",
    "backgroundClass": "bg-newzealand"
  },
  "whyStudy": [
    "New Zealand is one of the most peaceful nations in the world and is ranked No.4 as per Global Peace Index 2024. It is a vast and diverse country known for its stunning landscapes, multicultural cities and high standards of living. Many Indian students enrol for their education across 8 New Zealand Universities and its PTE’s and ITP’s.",
    "New Zealand is also an immigration-friendly country and supports international students with a great deal of post masters’ opportunities. The recent introduction of Green List Occupations post-pandemic shows its commitment towards international students.",
    "All 8 Universities in New Zealand are in Global 500 Rankings as per QS NWR. Top universities include University of Auckland, University of Otago, Massey University, and University of Waikato. With strong economy, high living standards, and peaceful environment, New Zealand offers great value and global recognition."
  ],
  "intakes": [
    { "intake": "Winter Intake", "start": "January", "type": "Secondary Intake" },
    { "intake": "Fall Intake", "start": "July", "type": "Main Intake" }
  ],
  "exams": [
    { "test": "TOEFL", "sections": "Reading, Writing, Listening, Speaking", "cost": "₹16,900" },
    { "test": "IELTS", "sections": "Reading, Writing, Listening, Speaking", "cost": "₹17,000" },
    { "test": "PTE", "sections": "Reading, Writing, Listening, Speaking", "cost": "₹17,000" },
    { "test": "DET", "sections": "Reading, Writing, Listening, Speaking", "cost": "$65" }
  ],
  "otherCosts": [
    { "particular": "Average Application Fee per University", "cost": "$70 - $100" },
    { "particular": "Visa Fee", "cost": "$750" },
    { "particular": "Medical", "cost": "₹5,000" },
    { "particular": "PCC – Police Clearance Certificate", "cost": "-" }
  ],
  "advice": "Students should show additional funds of NZ$20,000 per year as living expenses over tuition and other costs.",
  "checklist": [
    "Scanned Copies of Memos (Semester Wise, Consolidated, etc.)",
    "Course Completion Letter or Bonafide Certificate",
    "X and XII Marks Memos",
    "2 Recommendation Letters (Dated, Signed, Contact Info)",
    "Statement of Purpose",
    "Resume",
    "Test Score Cards (TOEFL, IELTS, PTE, etc.)",
    "Passport (First & Last Page)",
    "Police Clearance Certificate",
    "Financials (Savings, Income, Loan)",
    "Work Experience or Internship Letters (if any)",
    "Extra-Curricular Certificates (if any)"
  ],
  "citiesLeft": ["Auckland", "Christchurch", "Wellington", "Hamilton", "Tauranga", "Dunedin"],
  "citiesRight": ["Palmerston North", "Napier", "Hibiscus Coast", "Porirua", "New Plymouth", "Rotorua"],
  "courses": [
    "Aeronautical Engineering",
    "Business & Administration",
    "Computer Science & IT",
    "Engineering",
    "Health Sciences",
    "Nursing",
    "Graphic Designing"
  ],
  "universities": [
    "University of Auckland",
    "University of Otago",
    "University of Waikato",
    "Massey University",
    "Victoria University of Wellington",
    "University of Canterbury",
    "Lincoln University",
    "Auckland University of Technology"
  ],
  "colleges": [
    "Manukau Institute of Technology",
    "Nelson Marlborough Institute of Technology",
    "North Tec",
    "OTAGO Polytechnic",
    "Southern Institute of Technology",
    "Unitec Institute of Technology",
    "WelTEc",
    "Western Institute of Technology",
    "Whitireia"
  ],
  "work": {
    "intro": "International students can work off campus only if their study permit allows it. Full-time students enrolled in a 2-year course can work up to 24 hours per week during college sessions and more during holidays. Apply for an IRD Number (Inland Revenue Department) before starting work.",
    "types": [
      "On Campus Employment",
      "Off Campus Employment",
      "Graduate & Research Assistantships",
      "Internships & Volunteering",
      "Work Study Programs"
    ]
  },
  "afterEducation": {
    "details": [
      "The length of your Post Study Work Visa depends on your completed qualification. Masters or doctoral graduates can work for up to 3 years in New Zealand. Level 8 or below qualifications allow work for the same duration as your study.",
      "Start your journey to permanent residence by choosing top-ranked universities in New Zealand. Talk to our counsellors for free advice on course and university selection."
    ],
    "call": "Call us today!"
  }
}
;

  return (
    <div className="container-fill">
      {/* Hero Section */}
      <section>
        <div className={ "d-flex justify-content-center align-items-center bg-newzealand"}>
          <Link className="icon btn btn-danger p-3 rounded">{d.hero.cta}</Link>
          <Tabs country={d.country} />
        </div>
      </section>

      {/* WHY STUDY */}
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4 text-center">WHY STUDY IN {d.country.toUpperCase()}</h1>
          {d.whyStudy.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* MAJOR INTAKES */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">MAJOR INTAKES</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Intake</th>
                <th>Start Date</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {d.intakes.map((i, idx) => (
                <tr key={idx}>
                  <td>{i.intake}</td>
                  <td>{i.start}</td>
                  <td>{i.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* EXAMS REQUIRED */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">EXAMS REQUIRED</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Sections</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {d.exams.map((e, idx) => (
                <tr key={idx}>
                  <td>{e.test}</td>
                  <td>{e.sections}</td>
                  <td>{e.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* OTHER COSTS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">OTHER COSTS INVOLVED</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Particulars</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {d.otherCosts.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.particular}</td>
                  <td>{c.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3">
            <strong>Advice:</strong> {d.advice}
          </p>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">APPLICATION PROCESS CHECKLIST</h2>
          <ol>
            {d.checklist.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* POPULAR CITIES */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">POPULAR CITIES & COST OF LIVING</h2>
          <div className="row">
            <div className="col-md-6">
              <ul>{d.citiesLeft.map((city, i) => <li key={i}>{city}</li>)}</ul>
            </div>
            <div className="col-md-6">
              <ul>{d.citiesRight.map((city, i) => <li key={i}>{city}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">POPULAR COURSES</h2>
          <ul>{d.courses.map((course, i) => <li key={i}>{course}</li>)}</ul>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">POPULAR UNIVERSITIES IN {d.country.toUpperCase()}</h2>
          <h5>Universities</h5>
          <ul>{d.universities.map((u, i) => <li key={i}>{u}</li>)}</ul>
          <h5 className="mt-4">Popular Colleges</h5>
          <ul>{d.colleges.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </div>
      </section>

      {/* WORK WHILE STUDY */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">WORK WHILE YOU STUDY</h2>
          <p>{d.work.intro}</p>
          <ul>{d.work.types.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
      </section>

      {/* AFTER EDUCATION */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">WHAT AFTER EDUCATION?</h2>
          {d.afterEducation.details.map((p, i) => <p key={i}>{p}</p>)}
          <p className="fw-bold">{d.afterEducation.call}</p>
        </div>
      </section>
    </div>
  );
};

export default StudyinNewZealand;
