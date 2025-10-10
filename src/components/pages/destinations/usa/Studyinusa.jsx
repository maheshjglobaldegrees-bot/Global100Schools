import React from "react";
import "../../css/destinations/studyinusa/studyinusa.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Tab from "./Tab";
import WhyStusyInUsa from "./WhyStusyInUsa";
import Intakes from "./Intakes";
import Admission from "./Admission";
import Exams from "./Exams";
import Costs from "./Costs";
import Checklist from "./Checklists";
import Cities from "./Cities";
import Courses from "./Courses";
import Universities from "./Universities";
import Tuition from "./Tution";
import Visa from "./Visa";
import VisaChecklist from "./VisaChecklist";
import Work from "./Work";
import AfterEducation from "./AfterEducation";


const Studyinusa = () => {
  
  return (
    <>
      <div className="container-fluid bg-usa d-flex justify-content-center align-items-center">
        <button className="btn btn-danger d-flex align-items-center gap-2 fs-3 p-4 rounded-pill">
          <FontAwesomeIcon icon={faPhone} />
          Talk to an Expert Counsellor for FREE
        </button>
      </div>
      <Tab  country="USA"/>
      <WhyStusyInUsa />
      <Intakes/>
      <Admission/>
      <Exams/>
      <Costs/>
      <Checklist/>
      <Cities/>
      <Courses/>
      <Universities/>
      <Tuition/>
      <Visa/>
      <VisaChecklist/>
      <Work/>
      <AfterEducation/>
    </>
  );
};

export default Studyinusa;
