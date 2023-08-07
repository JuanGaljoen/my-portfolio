import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  // Create a reference for the form element
  const form = useRef();

  // Function to send the email using the emailjs library
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqge20c", // Email service ID
        "template_3xfymdr", // Template ID
        form.current, // Form element to submit
        "F-yuhLre4fD-EYstB" // User ID (optional)
      )
      .then(
        function(response) {
          // Success callback
          //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
          alert("Email sent successfully!");
        },
        function(error) {
          // Error callback
          //console.log("FAILED", error);
          alert("FAILED!" + error);
        }
      );
  };

  return (
    <div className="connect" id="connect">
      <h2>Let's connect!</h2>
      <p>Feel free to contact me via the form below.</p>
      {/* Contact form */}
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea className="user-message" name="message" />
        <input className="send-button" type="submit" value="Send" />
      </form>
    </div>
  );
};
