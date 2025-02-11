// import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="col-one">
              <h4>Code Convent foundation</h4>
              <p>Address : 3, Near IT Park, Mahatma Gandhi Road, Mumbai 440000</p>
              <p>
                Contact No: <a href="tel: +91 98659****59">+91 98659****59</a>
              </p>
              <p>
                Email: <a href="mailto:foundation@code.com">foundation@code.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="col-two">
              <h4>Important Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#donation">Donations</a>
                </li>
                <li>
                  <a href="#mission-id">Missions</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#contact">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="col-one">
              <h4>Social Media</h4>
              <div className="social">
                <a href="#">
                  <img src="/img/icons/facebook.png" alt="facebook" />
                </a>
                <a href="#">
                  <img src="/img/icons/instagram.png" alt="instagram" />
                </a>
                <a href="#">
                  <img src="/img/icons/youtube.png" alt="youtube" />
                </a>
                <a href="#">
                  <img src="/img/icons/linkedin.png" alt="linkedin" />
                </a>
                <a href="#">
                  <img src="/img/icons/gmail.png" alt="gmail" />
                </a>
              </div>
              <p>Copyright &copy; 2022 | All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;