import React from "react";
import product from "../styles/product.module.css";
import Header from "./Header";
import HeaderSpan from "./HeaderSpan";
import Footer from "./Footer";
import img from "../images/car images/golden (1).png";

function ProductOne() {
  return (
    <>
      <Header />
      <HeaderSpan />
      <p className={`h3 ${product.heading}`}>Rhyno SE03 Lite</p>

      <div class={`container text-center ${product.container}`}>
        <div class={`row ${product.grid}`}>
          <div class={`col ${product.alingCenter}`}>
            <img src={img} className={product.image} />
          </div>
          <div class={`col ${product.alingCenter}`}>
            <p className={`fs-6 ${product.textContent}`}>
              This Rhyno is an entry-level variant tailored for medium-power,
              single-person usage. This machine maintains the Rhyno standards
              with a fire-safe advanced LFP battery and all the other benefits
              of owning a Rhyno but is designed with a smaller battery and
              motor. Offering the same elegance, comfort, and style, this
              variant is tailored for those seeking an easy-on-the-pocket
              solution without sacrificing essential benefits. With an 80-100 km
              range on a single charge and a top speed of 55 km/h, the Rhyno
              SE03 Lite ensures effortless commuting. If you're in pursuit of
              thrills or frequently ride with a pillion, we recommend exploring
              our higher-power variants. Here are some technical details for the
              SE03 Lite that you might find valuable:
            </p>
            <div
              class={`d-grid gap-2 col-6 mx-auto ${product.buttonContainer}`}
            >
              <a href="/payment" class="btn btn-dark">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={product.tableContainer}>
        <table class={`table table-striped ${product.table}`}>
          <thead>
            <tr>
              <th className={product.tableHeading} scope="col">
                Specification
              </th>
              <th className={product.tableHeading} scope="col">
                Rhyno SE03 Lite
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={product.compareTableHeading}>Battery</td>
              <td className={product.tableContent}>1.8Kwh</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>Battery Features</td>
              <td className={product.tableContent}>
                LFP with 1500 cycles <br />
                Active Balancing <br />
                Waterproof (IP67)
              </td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>Battery Warranty</td>
              <td className={product.tableContent}>3 Years</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>Charging Time</td>
              <td className={product.tableContent}>3 Hours (12A)</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>Motor</td>
              <td className={product.tableContent}>1500W</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>Max Speed</td>
              <td className={product.tableContent}>55 km/h</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>
                Warrenty on electronics
              </td>
              <td className={product.tableContent}>1 Year</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>
                Max Range (@30km/h)
              </td>
              <td className={product.tableContent}>100km</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>
                Max Range (@45km/h)
              </td>
              <td className={product.tableContent}>90km</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>
                Max Range (@Full Speed)
              </td>
              <td className={product.tableContent}>70km</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>
                Other Key Benefits
              </td>
              <td className={product.tableContent}>
                Fire-safe Battery <br />
                Range prediction <br />
                Comfortable ride <br />
                Stable and safe
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default ProductOne;
