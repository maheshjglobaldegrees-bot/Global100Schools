import React from "react";
import "../../css/destinations/studyinusa/cities.css"

const Cities = () => {
  const data = {
    title: "Popular Cities & Student Cost of Living",
    id: "cities",
    note: "It is always advisable to stay on campus for Graduate and Under Graduate Students. Living costs always vary based on the number of people sharing the apartment and with the way of life. Above mentioned are as per the feedback of the students.",
    cities: [
      { city: "Boston", cost: "$1000-$1200" },
      { city: "Atlanta", cost: "$800-$1000" },
      { city: "New York", cost: "$1000-$1200" },
      { city: "Baltimore", cost: "$800-$1000" },
      { city: "Los Angeles", cost: "$1000-$1200" },
      { city: "San Diego", cost: "$1000-$1200" },
      { city: "San Francisco", cost: "$1000-$1200" },
      { city: "Dallas", cost: "$1000-$1200" },
      { city: "Chicago", cost: "$1000-$1200" },
      { city: "Houston", cost: "$800-$1000" },
      { city: "Washington D.C.", cost: "$1000-$1200" },
      { city: "Seattle", cost: "$1000-$1200" },
      { city: "Philadelphia", cost: "$1000-$1200" },
      { city: "Phoenix", cost: "$800-$1000" },
      { city: "Pittsburgh", cost: "$800-$1000" },
      { city: "San Jose", cost: "$1000-$1200" },
    ],
  };

  return (
    <div className="container my-5">
      <section id={data.id}>
        <h2 className="mb-4 text-danger fw-bold">{data.title}</h2>
        <div className="row g-4">
          {data.cities.map((item, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="card red-shadow h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.city}</h5>
                  <p className="card-text text-muted">{item.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-muted">
          <strong>Note:</strong> {data.note}
        </p>
      </section>
    </div>
  );
};

export default Cities;