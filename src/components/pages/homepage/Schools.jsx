import React, { useState } from "react";

const Schools = () => {
  const data = [
    {
      Name: "Queens University Belfast",
      Ranking: 25,
      AverageSat: 1250,
      Location: "Belfast, Northern Ireland",
      Tuition: "$22,000 / year",
      AcceptanceRate: "35%",
      Image: "https://www.russellgroup.ac.uk/sites/default/files/2025-01/Queen%E2%80%99s%20Red%20Logo%20-%20Landscape%281%29.png",
    },
    {
      Name: "Harvard University",
      Ranking: 1,
      AverageSat: 1550,
      Location: "Cambridge, Massachusetts, USA",
      Tuition: "$54,000 / year",
      AcceptanceRate: "5%",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1200px-Harvard_University_logo.svg.png",
    },
    {
      Name: "Oxford University",
      Ranking: 3,
      AverageSat: 1500,
      Location: "Oxford, England",
      Tuition: "£28,000 / year",
      AcceptanceRate: "17%",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/University_of_Oxford.svg/2560px-University_of_Oxford.svg.png",
    },
    {
      Name: "MIT",
      Ranking: 2,
      AverageSat: 1570,
      Location: "Cambridge, Massachusetts, USA",
      Tuition: "$53,790 / year",
      AcceptanceRate: "7%",
      Image: "https://logos-world.net/wp-content/uploads/2021/09/MIT-Massachusetts-Institute-of-Technology-Logo.png",
    },
    {
      Name: "Stanford University",
      Ranking: 5,
      AverageSat: 1520,
      Location: "Stanford, California, USA",
      Tuition: "$56,169 / year",
      AcceptanceRate: "4%",
      Image: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/the-meaning-behind-the-stanford-university-logo.png",
    },
    {
      Name: "University of Toronto",
      Ranking: 18,
      AverageSat: 1380,
      Location: "Toronto, Canada",
      Tuition: "CAD $45,000 / year",
      AcceptanceRate: "43%",
      Image: "https://icon2.cleanpng.com/20180619/epx/kisspng-university-of-toronto-scarborough-new-college-tor-university-of-toronto-press-5b297f85943a59.8564440815294462776072.jpg",
    },
    {
      Name: "University of Melbourne",
      Ranking: 22,
      AverageSat: 1400,
      Location: "Melbourne, Australia",
      Tuition: "AUD $45,000 / year",
      AcceptanceRate: "37%",
      Image: "https://ires.ubc.ca/files/2020/08/the-university-of-melbourne-vector-logo.jpg",
    },
    {
      Name: "ETH Zurich",
      Ranking: 8,
      AverageSat: 1480,
      Location: "Zurich, Switzerland",
      Tuition: "CHF 1,500 / year",
      AcceptanceRate: "27%",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ETH_Z%C3%BCrich_Logo_black.svg/2560px-ETH_Z%C3%BCrich_Logo_black.svg.png",
    },
    {
      Name: "National University of Singapore",
      Ranking: 11,
      AverageSat: 1420,
      Location: "Singapore",
      Tuition: "SGD $17,000 / year",
      AcceptanceRate: "26%",
      Image: "https://fundit.fr/sites/default/files/styles/max_650x650/public/actors/2708-universite-nationale-singapour-nus.png?itok=sopLEh5n",
    },
    {
      Name: "University of Edinburgh",
      Ranking: 20,
      AverageSat: 1360,
      Location: "Edinburgh, Scotland",
      Tuition: "£24,000 / year",
      AcceptanceRate: "40%",
      Image: "https://collegeexpertmn.com/wp-content/uploads/2022/02/University_of_Edinburgh-Logo-e1645114908725-1024x264.png",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // load 4 more each time
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Explore Top Schools</h2>
      <div className="row g-4">
        {data.slice(0, visibleCount).map((school, index) => (
          <div className="col-md-4 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm p-3">
              <img
                src={school.Image}
                className="card-img-top"
                alt={school.Name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{school.Name}</h5>
                <p className="card-text mb-2">
                  Ranking: {school.Ranking} <br />
                  Avg SAT: {school.AverageSat} <br />
                  Location: {school.Location} <br />
                  Tuition: {school.Tuition} <br />
                  Acceptance: {school.AcceptanceRate}
                </p>
                <a href="#" className="btn btn-danger mt-auto">
                  Know More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < data.length && (
        <div className="text-center mt-4">
          <button className="btn btn-outline-danger" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Schools;
