import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4">
          <div className="col-md-6 mx-auto text-center">
            <h3>Get in Touch</h3>
            <p><strong>Class Instructors:</strong></p>
            <div className="d-flex justify-content-center align-items-center my-2">
              <div className="text-center mx-3">
                <img
                  src="../assets/nithin2.jpg"
                  alt="Nithin Kumar M"
                  className="img-fluid rounded-circle mb-2"
                  width="100"
                  height="100"
                />
                <p>Nithin Kumar M</p>
                <p>Phone: 8050579342</p>
                <p>Email: nithin@gmail.com</p>
              </div>
              <div className="text-center mx-3">
                <img
                  src="../assets/yuga2.jpg"
                  alt="Yugandhar M"
                  className="img-fluid rounded-circle mb-2"
                  width="100"
                  height="100"
                />
                <p>Yugandhar M</p>
                <p>Phone: 9686812825</p>
                <p>Email: yugandhar@gmail.com</p>
              </div>
            </div>
            <p><strong>Class Location:</strong></p>
            <p>N.Y.D Studio</p>
            <p>No.169/25, 5th main road, Yelachenahalli,</p>
            <p>Munichennamma Industrial Area,</p>
            <p>Chunchaghatta main road, Bengaluru - 560078</p>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-8 mx-auto">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
