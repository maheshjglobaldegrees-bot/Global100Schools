import React from "react";

const AfterEducation = () => {
  return (
    <div className="container my-5" id="after-edu">
      <section id="after-education">
        <h2 className="mb-4 text-danger fw-bold">What After Education?</h2>
        <p>
          Once students finish their classes in the USA, they will be provided{" "}
          <strong>OPT (Optional Practical Training)</strong> for 12 months. Students
          with <strong>STEM (Science, Technology, Engineering & Mathematics)</strong>{" "}
          can extend it for an additional 24 months, totaling{" "}
          <strong>36 months</strong>.
        </p>

        <p>
          While on OPT, students can try for a full-time opportunity and can
          convert their OPT into an <strong>H1B Visa</strong>. With OPT and H1B,
          students can live and work in the USA for up to{" "}
          <strong>6 years</strong>. H1B visas can be renewed, and students can later
          apply for a <strong>Green Card (Permanent Residency)</strong>.
        </p>

        <p>
          Your step towards getting a Green Card in the USA starts with getting into
          the best institutions in the world. Talk to our counsellors for free advice
          on university shortlisting.
        </p>

        {/* Center button */}
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-danger fs-2 p-3 rounded-pill">
            📞 Call us today for guidance!
          </button>
        </div>
      </section>
    </div>
  );
};

export default AfterEducation;
