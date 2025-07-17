import React from "react";
import product from "../styles/product.module.css";
import Header from "./Header";
import HeaderSpan from "./HeaderSpan";
import Footer from "./Footer";
import img from "../images/car images/black (1).png";

function ProductThree() {
  return (
    <>
      <Header />
      <HeaderSpan />
      <p className={`h3 ${product.heading}`}>Rhyno SE03 Max</p>

      <div class={`container text-center ${product.container}`}>
        <div class={`row ${product.grid}`}>
          <div class={`col ${product.alingCenter}`}>
            <img src={img} className={product.image} />
          </div>
          <div class={`col ${product.alingCenter}`}>
            <p className={`fs-6 ${product.textContent}`}>
              This Rhyno is an entry variant tuned for small-city usagelong
              drives and no thrills. Like all other variants, this machine comes
              with a fire-safe advanced LFP battery and all the other benefits
              but with a smaller of owning a Rhyno, along with a perfect blend
              of battery , that is easy on pocket. Itcapacity and motor power to
              provides 80-up to 1050 km range inon a single charge that is
              sufficient in tier 2 and tier 3 cities. .You can consider this
              scooter for tier 1 city as well if you do not intend to drive it
              beyond 40-50km in a single day. While it may not provide a
              thrilling ride, it promises a dependable and unwavering presence
              on the long stretches.
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
              <td className={product.tableContent}>2.7Kwh</td>
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
              <td className={product.tableContent}>4 Hours (12A)</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>Motor</td>
              <td className={product.tableContent}>2000W</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>Max Speed</td>
              <td className={product.tableContent}>65 km/h</td>
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
              <td className={product.tableContent}>120km</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>
                Max Range (@45km/h)
              </td>
              <td className={product.tableContent}>100km</td>
            </tr>
            <tr>
              <td className={product.compareTableHeading}>
                Max Range (@Full Speed)
              </td>
              <td className={product.tableContent}>80km</td>
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

export default ProductThree;
