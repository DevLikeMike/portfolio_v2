import React from "react";
import emailjs, { init } from "emailjs-com";
init("user_XtiWp3q55L7wOlMXWhhuK");

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_site",
        "Portfolio_site",
        e.target,
        "user_XtiWp3q55L7wOlMXWhhuK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className='contact flex flex-center col' id='contact'>
      <h1>Contact</h1>
      <form onSubmit={submitHandler} className='contact__form'>
        <input type='text' name='name' placeholder='Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <input type='text' name='subject' placeholder='Subject' required />
        <textarea name='message' placeholder='Message' required></textarea>
        <input type='submit' value='Submit Message' />
      </form>
    </section>
  );
};

export default Contact;
