import React from "react";
import "../../css/destinations/studyinireland.css";
import { Link } from "react-router-dom";
import Tabs from "../usa/Tab";

const Studyinireland = () => {
  const irelandData = {
    intakes: [
      { season: "Fall Intake", month: "September", type: "Main Intake" },
      { season: "Spring Intake", month: "January / February", type: "Secondary Intake" },
    ],
    exams: [
      { test: "IELTS", sections: "Reading, Writing, Listening, Speaking", fees: "₹17,000" },
      { test: "TOEFL", sections: "Reading, Writing, Listening, Speaking", fees: "₹16,900" },
      { test: "PTE", sections: "Reading, Writing, Listening, Speaking", fees: "₹17,000" },
      { test: "Duolingo (DET)", sections: "Reading, Writing, Listening, Speaking", fees: "$65" },
    ],
    costs: [
      { particular: "Average Application Fee per University", cost: "€35 - €55" },
      { particular: "Visa Application Fee", cost: "€60 (Single Entry)" },
      { particular: "Health Insurance", cost: "€150 - €300 per year" },
      { particular: "Medical Examination (if applicable)", cost: "₹4,000 - ₹6,000" },
      { particular: "VFS Courier Fee", cost: "₹500 - ₹700" },
    ],
    checklist: [
      { item: "Academic Transcripts (Bachelor’s / 10th & 12th)" },
      { item: "Provisional Certificate / Degree Certificate" },
      { item: "Statement of Purpose (SOP)" },
      { item: "Letters of Recommendation (2-3 from Professors / Employers)" },
      { item: "Updated Resume / CV" },
      { item: "Passport (First & Last Page)" },
      { item: "IELTS / TOEFL / PTE / Duolingo Test Scores" },
      { item: "Work Experience Certificates (if applicable)" },
      { item: "Portfolio (for Architecture, Design & Art courses)" },
      { item: "Proof of Funds (Bank Statements, Affidavit of Support)" },
    ],
    citiesLeft: [
      { city: "Dublin", cost: "€1,200 - €1,800 / month" },
      { city: "Cork", cost: "€1,000 - €1,400 / month" },
      { city: "Galway", cost: "€900 - €1,300 / month" },
      { city: "Limerick", cost: "€800 - €1,200 / month" },
      { city: "Waterford", cost: "€700 - €1,100 / month" },
    ],
    citiesRight: [
      { city: "Maynooth", cost: "€800 - €1,200 / month" },
      { city: "Athlone", cost: "€750 - €1,100 / month" },
      { city: "Sligo", cost: "€700 - €1,000 / month" },
      { city: "Letterkenny", cost: "€700 - €950 / month" },
      { city: "Tralee", cost: "€650 - €900 / month" },
    ],
    courses: [
      { name: "Data Science & Analytics" },
      { name: "Computer Science & IT" },
      { name: "Engineering" },
      { name: "Business & Management" },
      { name: "Pharmaceutical Sciences" },
      { name: "Health Sciences" },
      { name: "Hospitality & Tourism" },
      { name: "Finance & Accounting" },
      { name: "Architecture & Design" },
      { name: "Media & Communication" },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="container-fluid bg-ireland d-flex align-items-center justify-content-center">
        <Link className="icon btn btn-danger p-3 rounded">
          Talk to an Expert Counsellor for Free
        </Link>
        <Tabs country="Ireland" />
      </section>

      {/* WHY STUDY IN IRELAND */}
      <section className="container my-4" id="why-study">
        <h2 className="text-danger fw-bold">WHY STUDY IN IRELAND</h2>
        <p>
          Ireland is a dynamic, lively, and modern country with a young
          population and a global outlook. It is one of the safest and most
          welcoming countries in the world, offering high-quality education and
          excellent career opportunities for international students.
        </p>
        <p>
          Irish universities are ranked among the top 3% globally, and research
          from Irish institutions ranks within the top 1% in multiple fields
          like pharmaceuticals, IT, and biotechnology.
        </p>
        <p className="fw-bold text-danger text-center p-3 border border-danger rounded">
          <q className="fs-3">
            Ireland is home to global giants like Google, Microsoft, Apple,
            LinkedIn, and Meta — making it a tech and innovation hub of Europe.
          </q>
        </p>
        <p>
          Students in Ireland benefit from post-study work opportunities (up to
          2 years for master’s students) and a flexible education system that
          encourages creativity, innovation, and independent thinking.
        </p>
      </section>

      {/* Major Intakes in Ireland */}
      <section className="container my-4" id="intakes">
        <h2 className="fw-bold text-danger">Major Intakes in Ireland</h2>
        <table className="table table-bordered table-striped border-danger">
          <thead>
            <tr>
              <th>Season</th>
              <th>Month</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {irelandData.intakes.map((intake, index) => (
              <tr key={index}>
                <td>{intake.season}</td>
                <td>{intake.month}</td>
                <td>{intake.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Exams Required */}
      <section className="container my-4" id="exams">
        <h2 className="fw-bold text-danger">Exams Required in Ireland</h2>
        <table className="table table-bordered table-striped border-danger">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Sections</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {irelandData.exams.map((exam, index) => (
              <tr key={index}>
                <td>{exam.test}</td>
                <td>{exam.sections}</td>
                <td>{exam.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Other Costs Involved */}
      <section className="container my-4" id="costs">
        <h2 className="fw-bold text-danger">Other Costs Involved</h2>
        <table className="table table-bordered table-striped border-danger">
          <thead>
            <tr>
              <th>Particulars</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {irelandData.costs.map((item, index) => (
              <tr key={index}>
                <td>{item.particular}</td>
                <td className="fw-bold text-success">{item.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Application Process Checklist */}
      <section className="container my-4" id="checklist">
        <h2 className="fw-bold text-danger">Application Process Checklist</h2>
        <ul className="checklist">
          {irelandData.checklist.map((item, index) => (
            <li key={index}>{item.item}</li>
          ))}
        </ul>
      </section>

      {/* Popular Cities & Student Cost of Living */}
      <section className="container my-4" id="cities">
        <h2 className="fw-bold text-danger">
          Popular Cities & Student Cost of Living in Ireland
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
                {irelandData.citiesLeft.map((item, index) => (
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
                {irelandData.citiesRight.map((item, index) => (
                  <tr key={index}>
                    <td>{item.city}</td>
                    <td>{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p>
          <span className="text-danger underline fw-bold">Advice:</span> It’s
          always better for students to live close to campus or share
          accommodation to reduce living costs. Expenses vary depending on
          location, lifestyle, and housing type.
        </p>
      </section>

      {/* Popular Courses */}
      <section className="container my-4" id="courses">
        <h2 className="fw-bold text-danger">Popular Courses in Ireland</h2>
        <div className="row">
          {irelandData.courses.map((course, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div
                className="card text-center shadow-sm p-3 h-100"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 6px rgba(0,0,0,0.1)";
                }}
              >
                <div className="card-body d-flex align-items-center justify-content-center">
                  <h5 className="card-title mb-0">{course.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Studyinireland;
