import React from "react";
import "./Contact.scss";

const Contact = ({ isBlack }) => {
    const contactClassName = isBlack ? "contact contact-black" : "contact";
  return (
    <div className={contactClassName}>
      <div className="left-side">
        <h1>
          Contact <span>our sales team</span>
        </h1>
        <p>
          Our team is happy to answer your sales questions.Fill out the form and
          we'll be in touch as soon as possible.
        </p>
      </div>
      <div className="right-side">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Tell more" />
        <span className="send-request-button">Send request</span>
      </div>
    </div>
  );
};

export default Contact;
