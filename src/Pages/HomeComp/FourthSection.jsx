import "./FourthSection.css";
import React from "react";
import message from "./mdi--message-fast-outline.png";
import call_icon from "./phone-call.png";
import mail_icon from "./gmail.png";
import map from "./map.png";
const FourthSection = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={message} alt="" />{" "}
        </h3>
        <p>
          If you have any questions, need support, or want to share your
          feedback, please send us a message. Our dedicated team is here to
          assist you and ensure your experience with Scholar Apex is
          exceptional. We value your input and look forward to hearing from you.
        </p>
        <ul className="list">
          <li>
            {" "}
            <img src={call_icon} alt="call_icon" />
            +234 91-6555-6035
          </li>
          <li>
            <img src={mail_icon} alt="mail_icon" />
            scholarApex@gmail.com
          </li>
          <li>
            <img src={map} alt="location" /> 1 Arogundade street,Surulere Lagos{" "}
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Email Adress</label>
          <input
            type="text"
            name="Email"
            placeholder="example@gmail.com"
            required
          />
          <label>Phone Number</label>
          <input type="tel" name="Phone" placeholder="0812345678" required />
          <label> Write your messages here</label>
          <textarea
            name="Message"
            rows="7"
            placeholder="Type your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            {" "}
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default FourthSection;
