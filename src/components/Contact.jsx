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
        Lets connect !!
      </p>

      <div className="contact-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Tell me about your project or opportunity..."
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
           Submit
          </button>

          {sent && (
            <p className="success-msg">
              Thanks for reaching out! I’ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
