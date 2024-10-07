import { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(contact);

  }
  return <>
    <section className="section-contact">
      <div className="contact-container container">
        <h1 className="main-heading">Contact Us</h1>
      </div>
      {/* Contact main page */}
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src="/images/support.png" alt="" width={500} height={500} />
        </div>
        {/* Contact form content actual */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" autoComplete="off" required onChange={handleInput} />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input type="email" name="email" id="email" autoComplete="off" required onChange={handleInput} />
            </div>

            <div>
              <label htmlFor="message">message</label>
              <textarea type="email" name="message" id="message" autoComplete="off" required cols={30} rows={6} onChange={handleInput} />
            </div>
            <div><button type="submit" className="">Submit</button></div>
          </form>
        </section>
      </div>
      <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2140.3907240882995!2d73.7522513842284!3d18.552228177510813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5c83603c47%3A0x9608fb3005df606b!2sMALATIKUNJ%20PG%20%2F%20SERVICE%20APARTMENT%20SUS%20gaon!5e1!3m2!1sen!2sin!4v1727773054280!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  </>
}

export default Contact;