import React from "react";
import privacy from "../styles/policies.module.css";
import Footer from "./Footer";

function Privacy() {
  return (
    <>
      <div className={privacy.headingContainer}>Rhyno EV Privacy Policy</div>

      <div className={privacy.privacyContainer}>
        <div className={privacy.heading}>Introduction</div>
        <div className={privacy.textContent}>
          Welcome to Rhyno EV! We value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, disclose, and safeguard your information when you
          visit our website{" "}
          <a className="text-lowercase" href="/">
            www.rhyno.ev
          </a>
          . Please read this policy carefully to understand our views and
          practices regarding your personal data and how we will treat it.
        </div>
        <div className={privacy.heading}>Information We Collect</div>
        <div className={privacy.subheading}>Personal Information</div>
        <div className={privacy.textContent}>
          When you visit our website, register, or make a purchase, we may
          collect the following personal information:
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Payment information</li>
          </ul>
        </div>
        <div className={privacy.subheading}>Non-Personal Information</div>
        <div className={privacy.textContent}>
          We may also collect non-personal information about your visit, such
          as:
          <ul>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Pages viewed</li>
            <li>Time spent on pages</li>
            <li>Referring website</li>
          </ul>
        </div>
        <div className={privacy.heading}>How We Use Your Information</div>
        <div className={privacy.subheading}>Personal Information</div>
        <div className={privacy.textContent}>
          We use your personal information to:
          <ul>
            <li>Process your orders and payments</li>
            <li>Provide customer support</li>
            <li>Send you updates, newsletters, and promotional materials</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
        <div className={privacy.subheading}>Non-Personal Information</div>
        <div className={privacy.textContent}>
          Non-personal information is used to:
          <ul>
            <li>Analyze website traffic and user behavior</li>
            <li>Enhance user experience</li>
            <li>Improve website performance</li>
          </ul>
        </div>
        <div className={privacy.heading}>Sharing Your Information</div>
        <div className={privacy.textContent}>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties, except when necessary to provide services, such
          as:
          <ul>
            <li>Payment processors</li>
            <li>Shipping companies</li>
            <li>Service providers who assist in website operations</li>
          </ul>
          We may also release your information when required to comply with the
          law, enforce our site policies, or protect ours or others' rights,
          property, or safety.
        </div>
        <div className={privacy.heading}>Data Security</div>
        <div className={privacy.textContent}>
          We implement a variety of security measures to protect your personal
          information. Your personal data is stored in secure networks and is
          only accessible by a limited number of persons who have special access
          rights to such systems and are required to keep the information
          confidential.
        </div>
        <div className={privacy.heading}>Cookies</div>
        <div className={privacy.textContent}>
          We use cookies to enhance your experience on our website. Cookies are
          small files that a site or its service provider transfers to your
          computer's hard drive through your web browser (if you allow) that
          enables the site’s or service provider's systems to recognize your
          browser and capture and remember certain information.
          <br />
          You can choose to have your computer warn you each time a cookie is
          being sent, or you can choose to turn off all cookies. You do this
          through your browser settings. If you disable cookies, some features
          may be disabled and may affect the user experience.
        </div>
        <div className={privacy.heading}>Third-Party Links</div>
        <div className={privacy.textContent}>
          Occasionally, at our discretion, we may include or offer third-party
          products or services on our website. These third-party sites have
          separate and independent privacy policies. We, therefore, have no
          responsibility or liability for the content and activities of these
          linked sites. Nonetheless, we seek to protect the integrity of our
          site and welcome any feedback about these sites.
        </div>
        <div className={privacy.heading}>Changes to Our Privacy Policy</div>
        <div className={privacy.textContent}>
          We may update our privacy policy from time to time. Any changes will
          be posted on this page with an updated revision date. By continuing to
          use our site after we post any changes, you agree to the updated
          policy.
        </div>
        <div className={privacy.heading}>Contact Us</div>
        <div className={privacy.textContent}>
          If you have any questions about this privacy policy, please contact us
          at:
          <ul>
            <li>
              <span className={privacy.topicHeading}>Email:</span>{" "}
              <a className="text-lowercase" href="/privacy">
                info@rhyno.in
              </a>
            </li>
            <li>
              <span className={privacy.topicHeading}>Phone:</span>{" "}
              +91-9023987528
            </li>
            <li>
              <span className={privacy.topicHeading}>Address:</span>
              Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
              Raisan, Gandhinagar, Gujarat, India.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Privacy;
