import React from "react";
import about from "../styles/about.module.css";
import img from "../images/car images/black (3).jpg";

const About = React.forwardRef((props, ref) => (
  <div ref={ref} className={about.container}>
    <>
      <div className="container text-center">
        <div className={`row ${about.grid}`}>
          <div className={`col ${about.columnContainer}`}>
            <p className={`h3 ${about.heading}`}>About Us</p>
            <p className={`fs-6 ${about.content}`}>
              Established in 2019 by an automotive engineer with a vision for
              sustainable and robust mobility solutions, Rhyno EV is not just a
              company; it's a collective effort of a dynamic team of young
              individuals passionately driving innovation in the electric
              vehicle industry. We believe in engineering solutions that solve
              problems.
            </p>
            <p className={`fs-6 ${about.content}`}>
              With our first product, we've taken a bold step to create
              something more than just a vehicle; it's a unique experience of
              elegance, comfort and style, addressing the pitfalls of
              conventional electric scooters. Our design prioritizes safety,
              eliminating concerns of fires and ensuring a longer battery
              lifespan with our battery technology. Perfectly suited for fleet
              operators, especially in tourist-centric locations like Goa, our
              rugged yet aesthetically appealing scooters are engineered for
              longevity and reliability. Join us as we pioneer a new era in
              sustainable and dependable electric transportation
            </p>
          </div>

          <div className={`col ${about.columnContainer}`}>
            <img src={img} className={about.carImage} />
          </div>
        </div>
      </div>
    </>
  </div>
));

export default About;
