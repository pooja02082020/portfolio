import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    // Reset fields after submit
    e.target.reset();

    // Hide success message automatically
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>
      <p className="contact-text">
        Have an opportunity, project idea, or just want to say hi? 😊
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message 🚀</button>
      </form>

      {sent && <p className="success">📩 Message sent successfully!</p>}
    </section>
  );
};

export default Contact;
