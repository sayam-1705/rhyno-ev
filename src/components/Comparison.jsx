import React from "react";
import product from "../styles/product.module.css";
import Header from "./Header";
import HeaderSpan from "./HeaderSpan";
import Footer from "./Footer";
import img1 from "../images/car images/golden (1).png";
import img2 from "../images/car images/red (2).png";
import img3 from "../images/car images/black (1).png";

function Comparison() {
  return (
    <>
      <Header />
      <HeaderSpan />
      <p className={`h3 ${product.heading}`}>Compare Products</p>

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
              <th className={product.tableHeading} scope="col">
                Rhyno SE03
              </th>
              <th className={product.tableHeading} scope="col">
                Rhyno SE03 Max
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Image
              </th>
              <td>
                <img src={img1} className={product.image} />
              </td>
              <td>
                <img src={img2} className={product.image} />
              </td>
              <td>
                <img src={img3} className={product.image} />
              </td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Battery
              </th>
              <td className={product.tableContent}>1.8Kwh</td>
              <td className={product.tableContent}>2.7Kwh</td>
              <td className={product.tableContent}>2.7Kwh</td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Battery Features
              </th>
              <td className={product.tableContent}>
                LFP with 1500 cycles <br />
                Active Balancing <br />
                Waterproof (IP67)
              </td>
              <td className={product.tableContent}>
                LFP with 1500 cycles <br />
                Active Balancing <br />
                Waterproof (IP67)
              </td>
              <td className={product.tableContent}>
                LFP with 1500 cycles <br />
                Active Balancing <br />
                Waterproof (IP67)
              </td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Battery Warranty
              </th>
              <td className={product.tableContent}>3 Years</td>
              <td className={product.tableContent}>3 Years</td>
              <td className={product.tableContent}>3 Years</td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Charging Time
              </th>
              <td className={product.tableContent}>3 Hours (12A)</td>
              <td className={product.tableContent}>4 Hours (12A)</td>
              <td className={product.tableContent}>4 Hours (12A)</td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Motor
              </th>
              <td className={product.tableContent}>1500W</td>
              <td className={product.tableContent}>1500W</td>
              <td className={product.tableContent}>2000W</td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Max Speed
              </th>
              <td className={product.tableContent}>55 km/h</td>
              <td className={product.tableContent}>55 km/h</td>
              <td className={product.tableContent}>65 km/h</td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Warrenty on electronics
              </th>
              <td className={product.tableContent}>1 Year</td>
              <td className={product.tableContent}>1 Year</td>
              <td className={product.tableContent}>1 Year</td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Max Range (@30km/h)
              </th>
              <td className={product.tableContent}>100km</td>
              <td className={product.tableContent}>150km</td>
              <td className={product.tableContent}>120km</td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Max Range (@45km/h)
              </th>
              <td className={product.tableContent}>90km</td>
              <td className={product.tableContent}>110km</td>
              <td className={product.tableContent}>100km</td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Max Range (@Full Speed)
              </th>
              <td className={product.tableContent}>70km</td>
              <td className={product.tableContent}>90km</td>
              <td className={product.tableContent}>80km</td>
            </tr>
            <tr>
              <th className={product.compareTableHeading} scope="row">
                Other Key Benefits
              </th>
              <td className={product.tableContent}>
                Fire-safe Battery <br />
                Range prediction <br />
                Comfortable ride <br />
                Stable and safe
              </td>
              <td className={product.tableContent}>
                Fire-safe Battery <br />
                Range prediction <br />
                Comfortable ride <br />
                Stable and safe
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

export default Comparison;
