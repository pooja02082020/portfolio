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
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              aria-label="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              aria-label="Your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message me</label>
            <textarea
              id="message"
              placeholder="Tell me about your project, role, or how I can help…"
              rows="4"
              aria-label="Your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn" disabled={sent}>
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>

          {sent && (
            <p className="success-msg">
              Thanks for reaching out! I’ll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
