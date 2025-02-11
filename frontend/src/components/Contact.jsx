// import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="heading">
          <h2>Connect With Us</h2>
          <p>
            Fill this form, our team will collect your <span>Donation</span> or <span>Wastage</span> from your place.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <form className="contact-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Mobile No." />
                  </div>
                  <div className="form-group">
                    <select name="donation" title="donation" id="donation">
                      <option value="">Choose Donation or Wastage</option>
                      <option value="food">Food</option>
                      <option value="clothes">Clothes</option>
                      <option value="footware">Footware</option>
                      <option value="books">Books</option>
                      <option value="fund">Fund</option>
                      <option value="gadget">Ele. Gadgets</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Address" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="text" cols="90" rows="1" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <a href="#" className="btn1 mt-5">
                    Submit Details
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;