import React from "react";
import website from "../styles/policies.module.css";
import Footer from "./Footer";

function Website() {
  return (
    <>
      <div className={website.headingContainer}>Rhyno EV Website Policy</div>

      <div className={website.websiteContainer}>
        <div className={website.heading}>Introduction</div>
        <div className={website.textContent}>
          Welcome to Rhyno EV! By accessing and using our website (the "Site"),
          you agree to comply with and be bound by the following policy. This
          policy governs your use of the Site and our services, so please read
          it carefully.
        </div>
        <div className={website.heading}>Privacy Policy</div>
        <div className={website.textContent}>
          We value your privacy and are committed to protecting your personal
          information. Our Privacy Policy explains how we collect, use, and
          safeguard your data. Please review our{" "}
          <a href="/privacy">Privacy Policy</a> for more details.
        </div>
        <div className={website.heading}>Terms of Use</div>
        <div className={website.textContent}>
          <ul>
            <li>
              <span className={website.topicHeading}>Acceptance of Terms:</span>{" "}
              By accessing and using the Site, you agree to be bound by these
              Terms of Use. If you do not agree with any part of these terms,
              please do not use our Site.
            </li>
            <li>
              <span className={website.topicHeading}>Changes to Terms:</span>{" "}
              Rhyno EV reserves the right to modify these terms at any time. Any
              changes will be posted on this page, and your continued use of the
              Site constitutes acceptance of those changes.
            </li>
            <li>
              <span className={website.topicHeading}>Eligibility:</span> You
              must be at least 18 years old to use our Site. By using the Site,
              you represent and warrant that you meet this age requirement.
            </li>
          </ul>
        </div>
        <div className={website.heading}>Intellectual Property</div>
        <div className={website.textContent}>
          All content on the Site, including but not limited to text, graphics,
          logos, images, and software, is the property of Rhyno EV or its
          content suppliers and is protected by copyright, trademark, and other
          intellectual property laws. You may not use, reproduce, distribute, or
          create derivative works from any content without our express written
          permission.
        </div>
        <div className={website.heading}>User Conduct</div>
        <div className={website.textContent}>
          You agree to use the Site only for lawful purposes and in a way that
          does not infringe the rights of others or restrict or inhibit their
          use and enjoyment of the Site. Prohibited behavior includes but is not
          limited to:
          <ul>
            <li>Engaging in any unlawful activity.</li>
            <li>
              Posting or transmitting any harmful, threatening, abusive, or
              defamatory material.
            </li>
            <li>Uploading files that contain viruses or malware.</li>
            <li>
              Attempting to gain unauthorized access to any part of the Site.
            </li>
          </ul>
        </div>
        <div className={website.heading}>Product Information</div>
        <div className={website.textContent}>
          We strive to provide accurate and up-to-date information about our
          electronic vehicles and related products. However, we do not warrant
          that the product descriptions, pricing, or other content on the Site
          is complete, accurate, or current. We reserve the right to correct any
          errors or omissions and to update information at any time without
          prior notice.
        </div>
        <div className={website.heading}>Orders and Payments</div>
        <div className={website.textContent}>
          All orders placed through the Site are subject to our acceptance. We
          may refuse or cancel any order for any reason. Payment must be
          received before your order is processed and shipped. We accept various
          forms of payment as indicated on the Site.
        </div>
        <div className={website.heading}>Links to Third-Party Sites</div>
        <div className={website.textContent}>
          Our Site may contain links to third-party websites that are not owned
          or controlled by Rhyno EV. We are not responsible for the content or
          privacy practices of these websites. We encourage you to review the
          policies of any third-party sites you visit.
        </div>
        <div className={website.heading}>Limitation of Liability</div>
        <div className={website.textContent}>
          To the fullest extent permitted by law, Rhyno EV shall not be liable
          for any direct, indirect, incidental, special, or consequential
          damages resulting from your use of the Site or any content, services,
          or products obtained through the Site. This includes but is not
          limited to damages for loss of profits, data, or other intangible
          losses.
        </div>
        <div className={website.heading}>Indemnification</div>
        <div className={website.textContent}>
          You agree to indemnify and hold harmless Rhyno EV, its affiliates, and
          their respective officers, directors, employees, and agents from any
          claims, liabilities, damages, losses, or expenses, including
          reasonable attorneys' fees, arising out of or in any way connected
          with your access to or use of the Site.
        </div>
        <div className={website.heading}>Governing Law</div>
        <div className={website.textContent}>
          These terms and your use of the Site are governed by and construed in
          accordance with the laws of the jurisdiction in which Rhyno EV
          operates, without regard to its conflict of law principles.
        </div>
        <div className={website.heading}>Contact Us</div>
        <div className={website.textContent}>
          If you have any questions about this policy or our practices, please
          contact us at:
          <ul>
            <li>
              <span className={website.topicHeading}>Email:</span>{" "}
              <a className="text-lowercase" href="/website">
                info@rhyno.in
              </a>
            </li>
            <li>
              <span className={website.topicHeading}>Phone:</span>{" "}
              +91-9023987528
            </li>
            <li>
              <span className={website.topicHeading}>Address:</span> Rhyno
              Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
              Raisan, Gandhinagar, Gujarat, India.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Website;
