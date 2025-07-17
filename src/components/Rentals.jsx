import React from "react";
import rentals from "../styles/rentals.module.css";
import Footer from "./Footer";
import platStore from "../images/elements/Play Store Logo.png";
import appStore from "../images/elements/App Store Logo.png";

function Rentals() {
  return (
    <>
      <div className={rentals.headingContainer}>Rentals</div>

      <div className={rentals.rentalsContainer}>
        <div className={rentals.textContent}>
          Explore the roars of Rhyno at your own pace with our rental options!
          Test the waters with our flexible rental model, available for a week
          or a month, allowing you to experience the Rhyno firsthand before
          committing. Simply visit our authorized dealerships to unlock this
          opportunity.
          <br />
          <br />
          Additionally, we're redefining campus commuting with our rental fleet
          tailored for college students. Navigate your daily commute
          effortlessly by renting Rhyno vehicles on an hourly basis through our
          user-friendly mobile app. Embrace the freedom to ride and explore a
          new dimension in sustainable and convenient transportation.
        </div>
        <div className={rentals.grid}>
          <div className={rentals.divAlingment}>
            <div className={rentals.heading}>Download for Android</div>
            <a className={rentals.link} href="">
              <img className={rentals.playStore} src={platStore} />
              <div className={rentals.alingment}>
                <span className={rentals.download}>GET IT ON</span>
                <span className={rentals.store}>Google Play</span>
              </div>
            </a>
          </div>
          <div className={rentals.divAlingment}>
            <div className={rentals.heading}>
              Download for <span className="text-lowercase">i</span>
              <span className="text-uppercase">OS</span>
            </div>
            <a className={rentals.link} href="">
              <img className={rentals.apppleStore} src={appStore} />
              <div className={rentals.alingment}>
                <span className={rentals.download}>Download on the</span>
                <span className={rentals.store}>App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Rentals;
