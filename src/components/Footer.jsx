import React from "react";
import footer from "../styles/footer.module.css";
import logo from "../images/logo/including tagline logo.png";

function Footer() {
  return (
    <>
      <div className={footer.section}>
        <div className={footer.topSection}>
          <div className="text-start">
            <img className={footer.logo} src={logo} />
          </div>
          <div className={`${footer.icons}`}>
            <a
              className={`${footer.icons} ${footer.instagram}`}
              href="https://www.instagram.com/rhyno.in/"
              target="blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a
              className={`${footer.icons} ${footer.linkedin}`}
              href="https://in.linkedin.com/company/rhyno-wheels"
              target="blank"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <hr className={footer.division} />

        <div className={footer.middleSection}>
          <span className={footer.centerElement}>
            <div className={footer.content}>
              <div className={footer.heading}>Policies</div>
              <hr />
              <span className={footer.linkBox}>
                <a className={footer.link} href="/privacy">
                  Privacy Policy
                </a>
              </span>
              <span className={footer.linkBox}>
                <a className={footer.link} href="/refund">
                  Refund Policy
                </a>
              </span>
              <span className={footer.linkBox}>
                <a className={footer.link} href="/website">
                  Website Policy
                </a>
              </span>
            </div>
          </span>
          <span className={footer.centerElement}>
            <div className={footer.content}>
              <div className={footer.heading}>Products</div>
              <hr />
              <span className={footer.linkBox}>
                <a className={footer.link} href="/productOne">
                  SE03 Lite
                </a>
              </span>
              <span className={footer.linkBox}>
                <a className={footer.link} href="/productTwo">
                  SE03
                </a>
              </span>
              <span className={footer.linkBox}>
                <a className={footer.link} href="/productThree">
                  SE03 Max
                </a>
              </span>
            </div>
          </span>
          <span className={footer.centerElement}>
            <div className={footer.content}>
              <div className={footer.heading}>Links</div>
              <hr />
              <span className={footer.linkBox}>
                <a className={footer.link} href="/rentals">
                  Rentals
                </a>
              </span>
              <span className={footer.linkBox}>
                <a
                  className={footer.link}
                  href="https://in.linkedin.com/company/rhyno-wheels"
                  target="blank"
                >
                  Career
                </a>
              </span>
            </div>
          </span>
          <span className={footer.centerElement}>
            <div className={footer.content}>
              <div className={footer.heading}>Contact Us</div>
              <hr />
              <div className={footer.subHeading}>Contact Number</div>
              <div className={footer.contactInfo}>+91-9023987528</div>
              <div className={footer.subHeading}>Email</div>
              <div className={`text-lowercase ${footer.contactInfo}`}>
                info@rhyno.in
              </div>
            </div>
          </span>
        </div>

        <div className={footer.botomSection}>
          ©{" "}
          <a className={footer.rhynoLink} href="/">
            Rhyno EV Solutions Private Limited
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
