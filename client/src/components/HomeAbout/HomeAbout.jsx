import React from "react";
// import "./index.css";
import "./HomeAbout.css";
import { NavLink } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="homeabout paddings wrapper">
      <div className="innerWidth flexColStart">
        <div className="container">
        <h2>About Us</h2>
        <div className="about-text">
        <p className="space-up">
          Bentsi-Enchill, Letsa & Ankomah is a leading full-service law firm in
          Ghana with in-depth expertise and experience in providing first-rate
          legal services for international and local clients in all sectors of
          the economy.
        </p>
        <p className="space-up">
          We are well-recognised for our leadership and stand out for providing
          commercially relevant legal services and innovative solutions to our
          clients.{" "}
        </p>
        <p className="space-up">
          What drives us is our long-term commitment to providing legal services
          with the highest level of professionalism and quality, as well as
          building our teams to help our clients succeed and take advantage of
          the right opportunities.
        </p>
          
        </div>
        <p className="space-up">
          <p className="space-up underline right">
            <NavLink to="/about">Visit our About Us Page</NavLink>
          </p>
        </p>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
