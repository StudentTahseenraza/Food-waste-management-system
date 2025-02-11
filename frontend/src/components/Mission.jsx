import { useState } from "react";
import "../index.css";

const Mission = () => {
  const [popupImage, setPopupImage] = useState(null);

  const missions = [
    "/img/miss/1.jpg",
    "/img/miss/2.jpg",
    "/img/miss/3.jpg",
    "/img/miss/4.jpg",
    "/img/miss/5.jpg",
    "/img/miss/6.jpg",
  ];

  const handleImageClick = (src) => {
    setPopupImage(src);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <section className="mission" id="mission-id">
      <div className="container">
        <div className="heading">
          <h2>Our Missions</h2>
          <p>
            We have delivered <span>Wastage</span> or <span>Donations</span> to needy Peoples
          </p>
        </div>
        <div className="gallery-sec">
          <div className="container">
            <div className="image-container">
              {missions.map((mission, index) => (
                <div className="image" key={index} onClick={() => handleImageClick(mission)}>
                  <img src={mission} alt={`mission-${index}`} />
                </div>
              ))}
            </div>
          </div>
          {popupImage && (
            <div className="pop-image">
              <span onClick={closePopup}>&times;</span>
              <img src={popupImage} alt="popup" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Mission;