import "./FourthSection.css";
import React from "react";
import message from "./mdi--message-fast-outline.png";
import call_icon from "./phone-call.png";
import mail_icon from "./gmail.png";
import map from "./map.png";

const FourthSection = () => {
  return (
    <div className="contact">
      <div className="contact-col contact-info">
        <h3>
          Contact Our Team <img src={message} alt="message icon" />
        </h3>
        <p>
          We’re here to help. If you have questions, need support, or want to share feedback,
          please reach out to us. Our team at <strong>Scholar Apex</strong> is committed
          to delivering an excellent experience.
        </p>
        <ul className="contact-list">
          <li>
            <img src={call_icon} alt="Phone Icon" />
            +234 91-6555-6035
          </li>
          <li>
            <img src={mail_icon} alt="Email Icon" />
            scholarApex@gmail.com
          </li>
          <li>
            <img src={map} alt="Map Icon" />
            Lagos - Ibadan Expy, Olonde/Aba-Nla 110108, Oyo
          </li>
        </ul>
      </div>

      <div className="contact-col contact-form">
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="example@gmail.com" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="0812345678" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Type your message..." required></textarea>

          <button type="submit" className="faq-buttonn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FourthSection;
