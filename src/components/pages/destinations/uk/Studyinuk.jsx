import React from "react";
import "../../css/destinations/studyinuk.css";
import Tab from "../usa/Tab";
import { Link } from "react-router-dom";

const StudyInUK = () => {
  const studyInUKData = {
  highlights: [
    "3 Years Bachelors and 1 Year Masters Programs",
    "World Class qualification with low cost of Education.",
    "Admission with 10th & 12th English Scores",
    "Work While You Study",
    "2 Years Post Study Work Visa",
  ],

  intakes: [
    { season: "Fall Intake", month: "September", type: "Major Intake" },
    { season: "Winter Intake", month: "January", type: "Secondary Intake" },
    { season: "Spring Intake", month: "May", type: "Minor Intake" },
  ],

  exams: [
    { test: "XII Standard (State Board)", requirement: "English 70%", sections: "XII Std English Score", fees: "-" },
    { test: "XII Standard (CBSE / ICSE)", requirement: "English 65%", sections: "XII Std English Score", fees: "-" },
    { test: "IELTS", requirement: "6.5 not less than 6.0", sections: "Reading, Writing, Listening, Speaking", fees: "₹17,000" },
    { test: "IELTS UKVI", requirement: "6.0 no less than 6.0", sections: "Reading, Writing, Listening, Speaking", fees: "₹17,250" },
    { test: "PTE", requirement: "59+", sections: "Reading, Writing, Listening, Speaking", fees: "₹17,000" },
    { test: "TOEFL", requirement: "80+ (S-20)", sections: "Reading, Writing, Listening, Speaking", fees: "₹16,500" },
    { test: "DET", requirement: "120 not less than 100", sections: "Reading, Writing, Listening, Speaking", fees: "$65" },
  ],

  costs: [
    { type: "TB Certificate", amount: "₹2,200" },
    { type: "IHS (Immigration Health Surcharge) Fees - 1 Yr", amount: "₹1,30,000" },
    { type: "IHS (Immigration Health Surcharge) Fees - 2 Yr", amount: "₹2,20,000" },
    { type: "Visa Fees Standard", amount: "₹55,000" },
    { type: "Visa Fees Priority", amount: "₹1,10,000" },
    { type: "Visa Fees Super Priority", amount: "₹1,65,000" },
    { type: "VFS Fees", amount: "₹6,500" },
  ],

  checklist: [
    { item: "Scanned Copies of Memos", subItems: ["Semester Wise", "Consolidated Marks Memo", "Provisional Certificate", "Original Degree (For Students who completed 4-2 and obtained results only)"] },
    { item: "Course Completion Letter or Bonafide Certificate" },
    { item: "X and XII Marks Memos" },
    { item: "2 Recommendation Letters", subItems: ["Dated", "Signed on letter head", "Mobile Number & Email Address of Professor (Mandatory)"] },
    { item: "Statement of Purpose" },
    { item: "Resume" },
    { item: "Test Score Cards (TOEFL, IELTS, PTE …)" },
    { item: "Passport (First Page and Last Page)" },
    { item: "Internship, Work Experience and Relieving Letters if any" },
    { item: "Extra-Curricular Activities, if any" },
  ],

  countries: [
    { country: "England", capital: "London" },
    { country: "Scotland", capital: "Edinburgh" },
    { country: "Wales", capital: "Cardiff" },
    { country: "Northern Ireland", capital: "Belfast" },
  ],

  majorCitiesLeft: [
    { city: "London", cost: "£1,300 – £1,900" },
    { city: "Birmingham", cost: "£800 – £1,000" },
    { city: "Manchester", cost: "£800 – £1,200" },
    { city: "Liverpool", cost: "£700 – £1,200" },
    { city: "Sheffield", cost: "£800 – £1,000" },
  ],

  majorCitiesRight: [
    { city: "Leeds", cost: "£800 – £1,300" },
    { city: "Bristol", cost: "£600 – £1,000" },
    { city: "Edinburgh", cost: "£1,000 – £1,100" },
    { city: "Glasgow", cost: "£800 – £1,250" },
    { city: "Coventry", cost: "£700 – £800" },
  ],

  distances: [
    { city: "Birmingham", time: "1hr 48 min" },
    { city: "Edinburgh", time: "4hr 21 mins" },
    { city: "Glasgow", time: "4hr 29 mins" },
    { city: "Sheffield", time: "2hr" },
    { city: "Nottingham", time: "2hr" },
    { city: "Liverpool", time: "2hr 30 min" },
    { city: "Newcastle upon Tyne", time: "3hr 15 mins" },
  ],

  courses: [
    "Accounts & Finance",
    "Architecture",
    "Artificial Intelligence",
    "Business Administration",
    "Civil Engineering",
    "Computer Science",
    "Cyber Security",
    "Data Science & Analytics",
    "Economics",
    "Health Care",
    "Law",
    "Pharmacy",
  ],

  russellUniversities: [
    "University of Birmingham",
    "Imperial College London",
    "Newcastle University",
    "University of Bristol",
    "King’s College London",
    "University of Nottingham",
    "University of Cambridge",
    "University of Leeds",
    "University of Oxford",
    "Cardiff University",
    "University of Liverpool",
    "Queen Mary University of London",
    "Durham University",
    "London School of Economics",
    "Queen’s University of Belfast",
    "University of Edinburgh",
    "University of Manchester",
    "University College London",
    "University of Exeter",
    "University of Sheffield",
    "University of Warwick",
    "University of Glasgow",
    "University of Southampton",
    "University of York",
  ],

  otherUniversities: [
    "De Montfort University",
    "University of Bath",
    "University of East London",
    "Coventry University",
    "University of Sussex",
    "University College Birmingham",
    "University of Greenwich",
    "Heriot Watt University",
    "University of West London",
    "London South Bank University",
    "UWE Bristol",
    "University of Wolverhampton",
    "Middlesex University",
    "Anglia Ruskin University",
    "Aston University",
    "University of Hertfordshire",
    "University of Chester",
    "University of Salford",
    "Teesside University",
    "University of Northampton",
    "Cardiff Metropolitan University",
    "University of Portsmouth",
    "Nottingham Trent University",
    "University of Northumbria",
  ],

  tuitionCosts: [
    { type: "Top Universities", fees: "£45,500 - £67,500", inr: "45L - 60L" },
    { type: "Moderate Universities", fees: "£25,000 - £38,400", inr: "30L - 42L" },
    { type: "Low Universities", fees: "£11,300 - £19,000", inr: "12L - 20L" },
  ],

  visaChecklist: [
    { item: "Original Passport" },
    { item: "CAS Document" },
    { item: "Interview Appointment Confirmation Page" },
    { item: "VISA Document Checklist" },
    { item: "Complete Visa Application" },
    { item: "Visa Fee Payment Receipt" },
    { item: "Educational Credentials", subItems: ["Semester Wise", "Consolidated Marks Memo", "Provisional Certificate", "Original Degree (For Students who completed 4-2 and obtained results only)", "X and XII Marksheets"] },
    { item: "Test Score Reports", subItems: ["TOEFL/IELTS/PTE/DET"] },
    { item: "TB Test Certificate Original" },
    { item: "Bank Savings Certificate" },
    { item: "Student Date of Birth Certificate and Consent letter, if funds are in others account" },
    { item: "Educational Loan Document" },
    { item: "IHS Payment Confirmation" },
    { item: "ATAS Letter, If Applicable", subItems: ["Mechanical Engineering","Aeronautical","Masters in Research","Any Other Research Course"], note: "ATAS - Academic Technology Approval Scheme (ATAS)" },
    { item: "Funds Explanation", subItems: ["Funds to be shown = Balance Tuition Fee + Living Expenses", "Living Expenses in the UK", "Outer London - £1,136 Per Month (Expenses calculated for 9 months)", "Inner London – £1,483 Per Month (Expenses calculated for 9 months)"] },
    { item: "Financial Document Checklist", subItems: ["28 days old funds in Savings account or Fixed Deposits", "Funds must be student name or parents’ name", "Education loan sanction letter from Nationalized Banks", "Ex.: SBI, Andhra Bank, Canara Bank etc", "HDFC Credilla is also accepted"] },
  ],

  visaTypes: [
    { type: "Standard VISA", time: "15-30 Days", cost: "₹55,000" },
    { type: "Priority VISA", time: "7-10 Days", cost: "₹1,10,000" },
    { type: "Super priority VISA", time: "3-5 Days", cost: "₹1,65,000" },
  ],
};


  return (
    <>
      {/* HERO SECTION */}
<section className="uk-herobg d-flex align-items-center justify-content-center flex-column">
  <Link className="btn btn-danger p-4 talk rounded-pill">
    Talk to an Expert Counsellor for Free
  </Link>
  <Tab country="UK" />
</section>

{/* WHY STUDY IN UK */}
<section className="container my-4" id="why-study">
  <h2 className="text-danger fw-bold">Why Study in the UK</h2>
  <p>
    The UK is renowned for having some of the highest academic standards
    in the world. UK is considered the second most preferred study
    destination for international students after the USA, considering its
    academic quality which is consistently monitored by the Quality
    Assurance Agency (QAA), an independent body that ensures universities
    and colleges maintain rigorous standards.
  </p>
  <p className="fw-bold text-center">
    <q>
      Of the top 10 ranked universities globally, four are from the UK as
      per the 2024 QSWUR
    </q>
  </p>
  <p>
    Top city for international students in UK being London, a global city
    rich in its diversity and culture. The UK's multicultural environment
    attracts many international students across the globe, providing them
    a vibrant learning experience. Alongside, UK offers a unique
    combination of historic landmarks, beautiful countryside and lively
    urban centres.
  </p>
</section>

{/* HIGHLIGHTS */}
<section className="container my-4" >
  <h2 className="fw-bold text-danger">Other Major Highlights:</h2>
  <ul className="highlights">
    {studyInUKData.highlights.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</section>

{/* MAJOR INTAKES */}
<section className="container my-4" id="intakes">
  <h2 className="fw-bold text-danger">MAJOR INTAKES</h2>
  <p>In UK we have 3 intakes</p>
  <table className="table table-bordered table-striped border-danger">
    <thead>
      <tr>
        <th>Intake</th>
        <th>Month</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {studyInUKData.intakes.map((item, index) => (
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
<section className="container my-4" id="admission">
  <h2 className="text-danger fw-bold">ADMISSION PROCESS</h2>
  <img src="/" alt="admission process" />
</section>

{/* REQUIRED EXAMS */}
<section className="container my-4" id="exams">
  <h2 className="fw-bold text-danger">
    Exams Required – English Requirements in UK
  </h2>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Test Name</th>
        <th>Minimum Requirement</th>
        <th>Sections</th>
        <th>Exam Fees</th>
      </tr>
    </thead>
    <tbody>
      {studyInUKData.exams.map((exam, index) => (
        <tr key={index}>
          <td>{exam.test}</td>
          <td>{exam.requirement}</td>
          <td>{exam.sections}</td>
          <td>{exam.fees}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <p>
    <span className="text-danger fw-bold underline">*Note:</span> Few
    universities offer their own free English exams for admission. Students
    can take one of the English language requirement tests for their
    admission into UK Universities.
  </p>
</section>

{/* OTHER COSTS INVOLVED */}
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
      {studyInUKData.costs.map((item, index) => (
        <tr key={index}>
          <td>{item.type}</td>
          <td className="fw-bold text-success">{item.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

{/* APPLICATION CHECKLIST */}
<section className="container my-4" id="checklist">
  <h2 className="fw-bold text-danger">Application Process Checklist</h2>
  <ul className="checklist">
    {studyInUKData.checklist.map((item, index) => (
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

{/* COUNTRIES */}
<section className="container my-4" >
  <h2 className="fw-bold text-danger">Countries in the UK</h2>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Country</th>
        <th>Capital</th>
      </tr>
    </thead>
    <tbody>
      {studyInUKData.countries.map((item, index) => (
        <tr key={index}>
          <td>{item.country}</td>
          <td>{item.capital}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

{/* MAJOR CITIES AND COST OF LIVING */}
<section className="container my-4" id="cities">
  <h2 className="fw-bold text-danger">Major Cities and Cost of Living</h2>
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
          {studyInUKData.majorCitiesLeft.map((item, index) => (
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
          {studyInUKData.majorCitiesRight.map((item, index) => (
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

{/* DISTANCES */}
<section className="container my-4" >
  <h2 className="fw-bold text-danger">Distance Between London and Major Cities</h2>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th>London To</th>
        <th>By Train</th>
      </tr>
    </thead>
    <tbody>
      {studyInUKData.distances.map((item, index) => (
        <tr key={index}>
          <td>{item.city}</td>
          <td>{item.time}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

{/* POPULAR COURSES */}
<section className="container my-4" id="courses">
  <h2 className="fw-bold text-danger">Popular Courses in the UK</h2>
  <ul className="list-group">
    {studyInUKData.courses.map((course, index) => (
      <li key={index} className="list-group-item">
        {course}
      </li>
    ))}
  </ul>
</section>

{/* POPULAR UNIVERSITIES */}
<section className="container my-4" id="universities">
  <h2 className="fw-bold text-danger">Popular Universities in the UK</h2>
  <p>The Russell Group’s 24 members are world-class, research-intensive universities:</p>
  <table className="table table-bordered table-striped text-center">
    <tbody>
      {Array.from({ length: Math.ceil(studyInUKData.russellUniversities.length / 3) }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {studyInUKData.russellUniversities
            .slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((uni, colIndex) => (
              <td key={colIndex}>{uni}</td>
            ))}
        </tr>
      ))}
    </tbody>
  </table>
</section>

{/* OTHER UNIVERSITIES */}
<section className="container my-4">
  <h2 className="fw-bold text-danger">Other Popular Universities in the UK</h2>
  <table className="table table-bordered table-striped text-center">
    <tbody>
      {Array.from({ length: Math.ceil(studyInUKData.otherUniversities.length / 3) }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {studyInUKData.otherUniversities
            .slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((uni, colIndex) => (
              <td key={colIndex}>{uni}</td>
            ))}
        </tr>
      ))}
    </tbody>
  </table>
</section>

{/* TUITION COSTS */}
<section className="container my-4" id="tuition">
  <h2 className="fw-bold text-danger">Average Tuition Costs</h2>
  <table className="table table-bordered table-striped text-center">
    <thead>
      <tr>
        <th>University Type</th>
        <th>Tuition Fees (GBP)</th>
        <th>Tuition Fees (INR)</th>
      </tr>
    </thead>
    <tbody>
      {studyInUKData.tuitionCosts.map((item, index) => (
        <tr key={index}>
          <td>{item.type}</td>
          <td>{item.fees}</td>
          <td>{item.inr}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

{/* VISA PROCESS */}
<section className="container" id="visa">
  <h2 className="text-danger fw-bold">VISA PROCESS</h2>
  <img src="/" alt="visa process" />
  <p>
    <span className="text-danger fw-bold underline">Note:</span> Type of
    VISA Service can be selected during payment of VFS Fee.
  </p>
</section>

{/* VISA APPLICATION CHECKLIST */}
<section className="container my-4" id="visa-check">
  <h2 className="fw-bold text-danger">Visa Application Checklist</h2>
  <ul className="checklist">
    {studyInUKData.visaChecklist.map((item, index) => (
      <li key={index}>
        {item.item}
        {item.note && <p className="text-muted fst-italic">{item.note}</p>}
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

{/* VISA TYPES */}
<section className="container my-4">
  <h2 className="fw-bold text-danger">Visa Types</h2>
  <table className="table table-bordered table-striped text-center">
    <thead>
      <tr>
        <th>VISA Type</th>
        <th>Processing Time</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      {studyInUKData.visaTypes.map((item, index) => (
        <tr key={index}>
          <td>{item.type}</td>
          <td>{item.time}</td>
          <td>{item.cost}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

{/* WORK WHILE YOU STUDY */}
<section className="container my-4" id="work">
  <h2 className="text-danger fw-bold">WORK WHILE YOU STUDY</h2>
  <p>
    Cost of education in UK is considerably affordable but the cost of
    living in UK is expensive. Living in cities like London can be
    expensive. Students are legally allowed to work in UK during their
    education to support living costs. However, grades should be prioritized
    over part-time earnings.
  </p>
  <p>
    Students enrolled in Bachelors or Master’s programs under a UKBA
    sponsor can work on campus or off campus for 20 hours per week during
    sessions and full-time during vacations. Minimum wage in UK is £11.44/hour.
  </p>
</section>

{/* WHAT AFTER EDUCATION */}
<section className="container my-4" id="after-edu">
  <h2 className="fw-bold text-danger">WHAT AFTER EDUCATION</h2>
  <p>
    Students can apply for a graduate visa to stay in UK for 2 years
    (3 years for PhD holders) and find a job. Afterward, they can apply for
    a Skilled Worker Visa and eventually PR after 5 years of stay.
  </p>
  <p>To be eligible for PR:</p>
  <ul>
    <li>Lived and worked in UK for 5 years</li>
    <li>Meet the salary requirement</li>
  </ul>
</section>

    </>
  );
};

export default StudyInUK;
