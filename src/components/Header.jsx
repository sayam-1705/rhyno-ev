import React, { useEffect, useState } from "react";
import header from "../styles/header.module.css";
import logo1 from "../images/../images/logo/without tagline logo.png";
import logo2 from "../images/logo/black logo.png";

function Header({ aboutRef }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    const element = document.querySelector(`.${header.container}`);

    position === 0
      ? element.classList.remove(header.changeBackground)
      : element.classList.add(header.changeBackground);
  };

  const getImage = () => {
    return scrollPosition === 0 ? logo1 : logo2;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className={`shadow container-fluid header-container ${header.container}`}
        >
          <div className="rhyno-image">
            <a className="navbar-brand" href="/">
              <img src={getImage()} className={header.logo}></img>
            </a>
          </div>

          <button
            className={`navbar-toggler ${header.collapseHeader}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`collapse navbar-collapse ${header.middleSection}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className={`nav-item ${header.addMargin}`}>
                <a
                  className={`nav-link ${header.content}`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className={`nav-item ${header.addMargin}`}>
                <a
                  className={`nav-link ${header.content}`}
                  href="#"
                  onClick={scrollToAbout}
                >
                  About Us
                </a>
              </li>
              <li className={`nav-item dropdown ${header.addMargin}`}>
                <a
                  className={`nav-link dropdown-toggle ${header.content}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul
                  className={`dropdown-menu border border-secondary-subtle ${header.dropdownMenu}`}
                >
                  <li>
                    <a
                      className={`dropdown-item ${header.dropdownContent}`}
                      href="/productOne"
                    >
                      SE03 Lite
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${header.dropdownContent}`}
                      href="/productTwo"
                    >
                      SE03
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${header.dropdownContent}`}
                      href="/productThree"
                    >
                      SE03 Max
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${header.dropdownContent}`}
                      href="/comparison"
                    >
                      Compare all
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`nav-item ${header.addMargin}`}>
                <a className={`nav-link ${header.content}`} href="/contact">
                  Contact Us
                </a>
              </li>
              <li className={`nav-item ${header.addMargin}`}>
                <a className={`nav-link ${header.content}`} href="/payment">
                  Pre-book Now
                </a>
              </li>
              <li
                className={`nav-item dropdown ${header.addMargin} ${header.socialHandles}`}
              >
                <a
                  className={`nav-link dropdown-toggle ${header.content}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Social Links
                </a>
                <ul
                  className={`dropdown-menu border border-secondary-subtle ${header.dropdownMenu}`}
                >
                  <li>
                    <a
                      className={`dropdown-item ${header.dropdownContent}`}
                      href="https://www.instagram.com/rhyno.in/"
                      target="blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${header.dropdownContent}`}
                      href="https://in.linkedin.com/company/rhyno-wheels"
                      target="blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={header.icons}>
            <a
              className={`${header.icons} ${header.instagram}`}
              href="https://www.instagram.com/rhyno.in/"
              target="blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a
              className={`${header.icons} ${header.linkedin}`}
              href="https://in.linkedin.com/company/rhyno-wheels"
              target="blank"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
