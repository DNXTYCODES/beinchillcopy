import React from "react";
// import "./index.css";
import "./PlansPreview.css";

const PlansPreview = () => {
  const plans = [
    {
      id: 1,
      name: "Starter Plan",
      image: "cc3-1024x640-1.png",
    },
    {
      id: 2,
      name: "Home Plan",
      image: "ficm-1024x640-1.png",
    },
    {
      id: 3,
      name: "Business Plan",
      image: "ei-1024x640-1.png",
    },
    {
      id: 4,
      name: "Premium Plan",
      image:
        "Dispute-resolution-practices-progressing-across-the-continent-Publication-1024x640-1.png",
    },
  ];

  return (
    <section className="plans-preview paddings wrapper">
      <div className="innerWidth flexColStart">
        
        <h2>Our Practice Areas</h2>
        <div className="plans-grid space-up">
          {plans.map((plan) => (
            <div className="plan-card" key={plan.id}>
              <img
                src={plan.image}
                alt={plan.name}
                className="plan-image"
                onClick={() => (window.location.href = `/plans/${plan.id}`)}
              />
              <p
                className="paddings"
                onClick={() => (window.location.href = `/plans/${plan.id}`)}
              >
                {" "}
                <a>{plan.name}</a>{" "}
              </p>
              {/* <p className="secondaryText">{plan.description}</p>
              <p className="powerCapacity">Power Capacity: {plan.powerCapacity}</p>
              <p className="duration">Estimated Duration: {plan.duration}</p> */}
              {/* <button
                className="buttonn"
                onClick={() => (window.location.href = `/plans/${plan.id}`)}
              >
                Learn More
              </button> */}
            </div>
          ))}
        </div>
          <p className="right underline">
            <a href="/expertise">Visit our Experise Page</a>
          </p>
      </div>
    </section>
  );
};

export default PlansPreview;
