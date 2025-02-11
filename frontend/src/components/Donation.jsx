// import React from "react";
import "../index.css";

const Donation = () => {
  const donations = [
    { img: "/img/don/clothing.png", title: "Clothes", description: "Give your pre-loved clothes a second life!" },
    { img: "/img/don/sneakers.png", title: "Footware", description: "A pair of shoes can make a world of difference!" },
    { img: "/img/don/salary.png", title: "Fund", description: "Your contribution can bring hope and change lives!" },
    { img: "/img/don/gadgets.png", title: "Gadgets", description: "Empower others with technology!" },
    { img: "/img/don/book.png", title: "Stationary", description: "Support education with your stationery donations!" },
    { img: "/img/don/shopping-bag.png", title: "Food", description: "Share a meal, spread happiness!" },
  ];

  return (
    <section className="don-sec" id="donation">
      <div className="container">
        <div className="heading">
          <h2>We Manage Wastage or Donation like..</h2>
        </div>
        <div className="row">
          {donations.map((donation, index) => (
            <div className="col-lg-4" key={index}>
              <div className="don-box">
                <img src={donation.img} alt={donation.title} />
                <h3>{donation.title}</h3>
                <p>{donation.description}</p>
                <a href="#contact" className="btn1">
                  Donate Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donation;