// import React from "react";
import "../index.css";

const Home = () => {
  return (
    <section className="home-sec" id="home">
      <div className="container">
        <div className="home-content">
          <div className="row">
            <div className="col-lg-6 align-item-center">
              <div className="home-info">
                <h1>Alone we can do little, together we can do so much</h1>
                <h2>
                  We <span>ShareForGood</span> manage wastage for needy peoples
                </h2>
                <p>
                  At ShareForGood, we believe that no resource should go to waste when it can bring hope to someone in need...
                </p>
                <div className="buttons">
                  <a href="#contact" className="btn1">
                    Donate now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-last">
              <div className="img-sec">
                <img src="/img/img-1.png" alt="home-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;