import { useState } from "react";

function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>

      <h2>Send us a Message</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Enter your message"
        value={form.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit" className ="contact-btn ">
        Send Message
      </button>

    </form>
  );
}

export default ContactForm;