// import React from "react";
import "../index.css";

const About = () => {
  return (
    <section className="about-sec" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 about-img">
            <img src="/img/img-2.jpeg" alt="about" />
          </div>
          <div className="col-lg-8 order-first order-lg-last">
            <div className="heading">
              <h2>What We Do & Why We Do</h2>
            </div>
            <p>
              At <b>Food Charity</b>, we believe in reducing waste while helping those in need...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;