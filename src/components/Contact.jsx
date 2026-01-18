import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-subtext">
        Have an opportunity, project idea, or just want to connect? Let’s talk.
      </p>

      <div className="contact-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email ADDRESS" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Tell me about your project, role, or how I can help…."
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {sent && (
            <p className="success-msg">
              Thanks for reaching out! I’ll get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
