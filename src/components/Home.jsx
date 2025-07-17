import React, { useState, useEffect, useRef } from "react";
import home from "../styles/home.module.css";
import Header from "./Header";
import HeaderSpan from "./HeaderSpan";
import About from "./About";
import Footer from "./Footer";
import img from "../images/car images/group (1) edited.png";
import img1 from "../images/car images/black (1).png";
import img2 from "../images/car images/golden (1).png";
import img3 from "../images/car images/red (2).png";
import battery from "../images/elements/LFP Battery.jpg";
import tyre from "../images/elements/tyre.png";
import range from "../images/elements/range.png";
import review from "../images/elements/experience.png";
import bike from "../images/elements/electric-bike.png";

function Home() {
  const slogans = ["Style", "Elegance", "Minimalism", "Comfort"];
  const aboutRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [fixedContainerHeight, setFixedContainerHeight] = useState(0);

  useEffect(() => {
    function adjustOverflowContainerOnePosition() {
      const fixedContainer = document.getElementById("fixedContainer");
      const overflowContainerOne = document.getElementById(
        "overflowContainerOne"
      );

      if (fixedContainer && overflowContainerOne) {
        const height = fixedContainer.offsetHeight;
        overflowContainerOne.style.marginTop = `${height}px`;
        setFixedContainerHeight(height);
      }
    }

    adjustOverflowContainerOnePosition();

    window.addEventListener("resize", adjustOverflowContainerOnePosition);

    return () => {
      window.removeEventListener("resize", adjustOverflowContainerOnePosition);
    };
  }, []);

  return (
    <>
      <Header aboutRef={aboutRef} />
      <HeaderSpan />
      <div id="fixedContainer" className={home.fixedComponent}>
        <div className={home.slogan}>
          Let&apos;s Elevate Your Ride Experience With Rhyno{" "}
          <br className={home.brakeNext} /> Where Superiority Meets{" "}
          {slogans[currentIndex]}.
        </div>
        <img src={img} className={home.fixedImage} />
      </div>

      <div
        id="overflowContainerOne"
        className={home.containerOne}
        style={{ marginTop: `${fixedContainerHeight}px` }}
      >
        <About ref={aboutRef} />
      </div>

      <div className={home.containerTwo}>
        <div className={home.carouselHeading}>Our Products</div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img1}
                className={`d-block w-100 ${home.productImage}`}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className={`d-block w-100 ${home.productImage}`}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className={`d-block w-100 ${home.productImage}`}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className={home.containerThree}>
        <div className={`row ${home.grid}`}>
          <div className={`col ${home.columnContainer}`}>
            <p className={`fs-2 ${home.heading}`}>LFP Battery</p>
            <p className={`fw-light lh-base ${home.content}`}>
              Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
              renowned for their safety features—eliminating the risk of fire
              associated with other Lithium batteries. These batteries boast a
              broader temperature range, ideal for the diverse Indian climate.
              Our technology enhances Rhyno's longevity, complemented by an
              Active Balancing Smart Battery Management System (BMS) for
              extended life and reduced maintenance. Each battery undergoes
              rigorous waterproofing tests according to IP76 standards. But it
              doesn't stop there—our technology goes the extra mile in ensuring
              the battery's lasting durability. Connect with us to discover the
              thoughtful engineering behind our batteries!
            </p>
          </div>
          <div className={`col ${home.columnContainer}`}>
            <img src={battery} className={home.battery} />
          </div>
        </div>
      </div>

      <div className={home.containerFour}>
        <div className="container text-center">
          <div className="row">
            <div className={`col ${home.element}`}>
              <div
                className={`card shadow p-3 mb-5 bg-body-tertiary rounded ${home.card}`}
                style={{ width: "18rem" }}
              >
                <img
                  src={tyre}
                  className={`card-img-top ${home.cardImage}`}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className={`card-title fs-2 ${home.heading}`}>
                    Wider tyres
                  </h5>
                  <p className={`card-text fw-light lh-base ${home.content}`}>
                    Now, say goodbye to skidding and embrace the leaning turns!
                    Featuring first-of-its-kind, 9.5-inch wider tyres that make
                    this machine an enormous beast that ensures stability on
                    different terrains such as wet roads, mud, and sand.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col ${home.element}`}>
              <div
                className={`card shadow p-3 mb-5 bg-body-tertiary rounded ${home.card}`}
                style={{ width: "18rem" }}
              >
                <img
                  src={range}
                  className={`card-img-top ${home.cardImage}`}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className={`card-title fs-2 ${home.heading}`}>
                    Range prediction
                  </h5>
                  <p className={`card-text fw-light lh-base ${home.content}`}>
                    Many budget-friendly electric scooters overlook this crucial
                    feature, causing riders to experience range anxiety. With
                    Rhyno, you can ride with peace of mind, thanks to the
                    scooter providing precise information about the remaining
                    battery.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col ${home.element}`}>
              <div
                className={`card shadow p-3 mb-5 bg-body-tertiary rounded ${home.card}`}
                style={{ width: "18rem" }}
              >
                <img
                  src={review}
                  className={`card-img-top ${home.cardImage}`}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className={`card-title fs-2 ${home.heading}`}>
                    Extraordinery Experience
                  </h5>
                  <p className={`card-text fw-light lh-base ${home.content}`}>
                    Rhyno is more than just a mode of transportation. It is an
                    experience of sheer comfort and style! A seamless fusion of
                    minimalism, sophistication, and a touch of masculinity!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={home.containerFive}>
        <div className={`row ${home.gridDesign}`}>
          <div className={`col ${home.columnContainer}`}>
            <img src={bike} className={home.bike} />
          </div>
          <div className={`col ${home.columnContainer}`}>
            <p className={`fs-2 ${home.heading}`}>Rugged and simple Design</p>
            <p className={`fw-light lh-base ${home.content}`}>
              We’ve had enough of the EVs looking and feeling like fragile
              plastic toys. Often fading out and shamelessly breaking in minor
              accidents, ending up spending weeks and months at service stations
              for complex repairs. We took a bold step of making something raw,
              rugged, and practical. We kept it so simple that even your trusted
              local mechanic can understand and repair most of it. If you have
              reached this far, why not to take a test ride? Click here to
              locate your nearest dealership or book a test ride at your home!
            </p>
          </div>
        </div>
      </div>

      <div className={home.containerSix}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
