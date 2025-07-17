import React from "react";
import contact from "../styles/contact.module.css";
import Header from "./Header";
import HeaderSpan from "./HeaderSpan";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Header />
      <HeaderSpan />

      <div className={contact.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.4812295833985!2d72.6584675738679!3d23.0794732142051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8104a2624a59%3A0xca70c45ced2861c3!2sRhyno%20Flexipack%20Industries!5e0!3m2!1sen!2sin!4v1720275428093!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={contact.mapBox}
        />
      </div>

      <div className={contact.contactUs}>
        <div
          className={`shadow p-3 mb-5 bg-body-tertiary rounded ${contact.innerBox}`}
        >
          <div className={contact.grid}>
            <div className={contact.address}>
              <i class={`fa-solid fa-location-dot ${contact.icon}`}></i>
              <p
                className={`text-center ${contact.textContent} ${contact.widthHandle}`}
              >
                Rhyno Wheels Private limited, Near UG hostel gate #2, Behind
                PDEU, Raisan, Gandhinagar, Gujarat, India.
              </p>
            </div>
            <div className={contact.address}>
              <i class={`bx bxs-phone ${contact.icon}`}></i>
              <p className={`text-center ${contact.textContent}`}>
                +91-9023987528
              </p>
              <div></div>
            </div>
            <div className={contact.address}>
              <i class={`bx bxs-envelope ${contact.icon}`}></i>
              <p
                className={`text-center text-lowercase ${contact.textContent}`}
              >
                info@rhyno.in
              </p>
            </div>
          </div>

          <form className={contact.message}>
            <p className={`text-start h4 ${contact.heading}`}>
              Send us a message
            </p>
            <p class={`text-start ${contact.textContent}`}>
              If you have any work from me or any types of quires about
              anything, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <div class="input-group mb-3">
              <input
                className={contact.inputMessage}
                type="text"
                placeholder="Enter your name"
                aria-label="name"
                required
              />
            </div>
            <div class="input-group mb-3">
              <input
                className={contact.inputMessage}
                type="email"
                placeholder="Enter your email"
                aria-label="email"
                required
              />
            </div>
            <div class="input-group mb-3">
              <textarea
                className={contact.inputMessage}
                placeholder="Enter your message"
                aria-label="With textarea"
                required
              />
            </div>
            <p className="text-start">
              <button
                type="submit"
                className={`btn btn-outline-dark ${contact.submitButton}`}
              >
                Send Now
              </button>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
