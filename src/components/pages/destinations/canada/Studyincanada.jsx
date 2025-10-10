import React from "react";
import "../../css/destinations/studyincanada.css";
import { Link } from "react-router-dom";
import Tabs from "../usa/Tab";

const Studyincanada = () => {
  const canadaData = {
  intakes: [
    { season: "Winter Intake", month: "January Start Date", type: "Secondary Intake" },
    { season: "Spring / Summer Intake", month: "April / May Start Date", type: "Minimal Intake" },
    { season: "Fall Intake", month: "August Intake", type: "Main Intake" },
  ],
  exams: [
    { test: "GRE", sections: "Quantitative, Verbal, AWA", fees: "$220" },
    { test: "GMAT", sections: "Quantitative, Verbal, Reasoning, AWA", fees: "$275" },
    { test: "TOEFL", sections: "Reading, Writing, Listening, Speaking", fees: "₹16,900" },
    { test: "IELTS", sections: "Reading, Writing, Listening, Speaking", fees: "₹17,000" },
    { test: "PTE", sections: "Reading, Writing, Listening, Speaking", fees: "₹17,000" },
    { test: "DET", sections: "Reading, Writing, Listening, Speaking", fees: "$65" },
  ],
  costs: [
    { particular: "Average Application Fee Per University", cost: "$70-$100" },
    { particular: "GRE Score Reporting fee (4 Universities Free on Day of Exam)", cost: "₹2881.36+Tax Per Uni" },
    { particular: "TOEFL Score Reporting Fee (4 Free 2 days before Exam)", cost: "₹2000+Tax Per Uni" },
    { particular: "IELTS Score Reporting Fee (First 5 Free)", cost: "₹250 Per University" },
    { particular: "GIC (Guaranteed Investment Certificate)", cost: "$10,000" },
    { particular: "Visa Fee", cost: "$235" },
    { particular: "Medical", cost: "₹5,000" },
    { particular: "VFS Courier Fee – Local", cost: "₹500-₹600" },
    { particular: "VFS Courier Fee – Non-Local", cost: "₹3,000" },
  ],
  checklist: [
    {
      item: "Scanned Copies of Memos",
      subItems: [
        "Semester Wise",
        "Consolidated Marks Memo",
        "Provisional Certificate",
        "Original Degree (For Students who completed 4-2 and obtained results only)",
      ],
    },
    { item: "Course Completion Letter or Bonafede Certificate" },
    { item: "X and XII Marks Memos" },
    {
      item: "3 Recommendation Letters",
      subItems: [
        "Dated",
        "Signed on letter head",
        "Mobile Number & Email Address of Professor (Mandatory)",
      ],
    },
    { item: "Statement of Purpose" },
    { item: "Resume" },
    { item: "Test Score Cards (TOEFL, IELTS, PTE …)" },
    { item: "Passport (First Page and Last Page)" },
    { item: "Internship, Work Experience and Relieving Letters if any" },
    { item: "Supplemental Forms & Departmental Forms" },
    { item: "Extra-Curricular Activities, if any" },
  ],
  citiesLeft: [
    { city: "Toronto", cost: "Refer Below" },
    { city: "Vancouver", cost: "Refer Below" },
    { city: "Montreal", cost: "Refer Below" },
    { city: "Ottawa", cost: "Refer Below" },
    { city: "Calgary", cost: "Refer Below" },
  ],
  citiesRight: [
    { city: "Edmonton", cost: "Refer Below" },
    { city: "Quebec City", cost: "Refer Below" },
    { city: "Halifax", cost: "Refer Below" },
    { city: "Victoria", cost: "Refer Below" },
    { city: "Winnipeg", cost: "Refer Below" },
  ],
  courses: [
    { name: "Agriculture" },
    { name: "Architecture" },
    { name: "Computer Science & IT" },
    { name: "Engineering" },
    { name: "Health Sciences" },
    { name: "Media & Journalism" },
    { name: "Business & Administration" },
    { name: "Law" },
  ],
};



  return (
    <>
      {/* Hearo section */}
      <section className="container-fluid canadabg d-flex align-items-center justify-content-center">
        <Link className="icon btn btn-danger p-3 rounded">
          Talk to an Expert Counsellor for Free
        </Link>
        <Tabs country="Canada" />
      </section>
      {/* WHY STUDY IN CANADA */}
      <section className="container my-4" id="why-study">
        <h2 className="text-danger fw-bold">WHY STUDY IN CANADA</h2>
        <p>
          Canada is a vast and diverse country known for its stunning
          landscapes, multicultural cities and high standards of living. Also,
          Canada is very much known for its high standards of education,
          Canadian government spends a huge amount of money on its academics to
          maintain high standards of education.
        </p>
        <p>
          Canada is also an immigration friendly country and supports
          international students with a great deal of post masters’
          opportunities. Canadian Universities are world renown for their
          excellence, diverse culture and classrooms; however, the cost of
          education is comparatively less compared to their peer universities in
          other countries like UK and USA.{" "}
        </p>
        <p className="fw-bold text-danger text-center p-3 border border-danger rounded">
          <q className="fs-3">
            Canada is Ranked No. 7 in 2023 Global Peace Index Top Countries
          </q>
        </p>
        <p>
          Also, Canada hosts few of the worlds most top ranked universities like
          University of Toronto, University of British Columbia, McGill
          University, McMaster University etc. Apart from boasting world top
          universities it is also considered as one of the most peaceful
          countries in the world with strong economy and high standards of
          living. Apart, the job market in Canada is also very much welcoming
          for international students, however, highly competitive too.
        </p>
      </section>
      {/* Major Intakes in Canada */}
      <section className="container my-4" id="intakes">
        <h2 className="fw-bold text-danger">Major Intakes in Canada</h2>
        <table className="table table-bordered table-striped border-danger">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Season</th>
              <th className="py-2 px-4 border-b text-left">Month</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {canadaData.intakes.map((intake, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{intake.season}</td>
                <td className="py-2 px-4 border-b">{intake.month}</td>
                <td className="py-2 px-4 border-b">{intake.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* ADMISSION PROCESS */}
      <section className="container my-4" id="admission">
        <h2 className="fw-bold text-danger">For SDS Process</h2>
        <img src="/" alt="canada sds" />
        <p>
          Students has to apply through <span>“Non SDS”</span> in case they do
          not meet any of the following criteria
        </p>
        <ul className="list-group w-50">
          <li className="list-group-item">
            Student does not pay 1 Year tuition fee
          </li>
          <li className="list-group-item">
            In case English language exam is Test at home
          </li>
          <li className="list-group-item">If GIC not paid</li>
        </ul>
      </section>

      {/* Exams Required in Canada */}
      <section className="container my-4" id="exams">
        <h2 className="fw-bold text-danger">Exams Required in Canada</h2>
        <table className="table table-bordered table-striped border-danger">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Test Name</th>
              <th className="py-2 px-4 border-b text-left">Sections</th>
              <th className="py-2 px-4 border-b text-left">Cost</th>
            </tr>
          </thead>
          <tbody>
            {canadaData.exams.map((exam, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{exam.test}</td>
                <td className="py-2 px-4 border-b">{exam.sections}</td>
                <td className="py-2 px-4 border-b">{exam.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <span className="text-danger underline fw-bold">Advices</span>It is
          always advisable to take IELTS for Canadian Visa{" "}
        </p>
      </section>
      {/* Other Costs Involved */}
      <section className="container my-4" id="costs">
        <h2 className="fw-bold text-danger">Other Costs Involved</h2>

        <table className="table table-bordered table-striped border-danger">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Particulars</th>
              <th className="py-2 px-4 border-b text-left">Cost</th>
            </tr>
          </thead>
          <tbody>
            {canadaData.costs.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.particular}</td>
                <td className="py-2 px-4 border-b fw-bold text-success">
                  {item.cost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* Application Process Checklist */}
      <section className="container my-4" id="checklist">
        <h2 className="fw-bold text-danger">Application Process Checklist</h2>
        <ul className="checklist">
          {canadaData.checklist.map((item, index) => (
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
      {/* Popular Cities & Student Cost of Living */}
<section className="container my-4" id="cities">
  <h2 className="fw-bold text-danger">
    Popular Cities & Student Cost of Living in Canada
  </h2>
  <div className="row">
    {/* Left Table */}
    <div className="col-md-6">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Average Cost of Living</th>
          </tr>
        </thead>
        <tbody>
          {canadaData.citiesLeft.map((item, index) => (
            <tr key={index}>
              <td>{item.city}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Right Table */}
    <div className="col-md-6">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Average Cost of Living</th>
          </tr>
        </thead>
        <tbody>
          {canadaData.citiesRight.map((item, index) => (
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
    <span className="text-danger underline">Advice:</span> It is always advisable to stay on campus for Graduate and Under Graduate Students. Living costs always vary based on the number of people sharing the apartment and with the way of life. Above mentioned are as per the feedback of the students.
  </p>
</section>
{/* Popular Courses */}
<section className="container my-4" id="courses">
  <h2 className="fw-bold text-danger">Popular Courses in Canada</h2>
  <div className="row">
    {canadaData.courses.map((course, index) => (
      <div className="col-md-3 mb-3" key={index}>
        <div
          className="card text-center shadow-sm p-3 h-100"
          style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
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

export default Studyincanada;
