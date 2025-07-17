import React from "react";
import payment from "../styles/payment.module.css";
import cards from "../images/card_img.png";

function Payment() {
  return (
    <>
      <div className={payment.paymentContainer}>
        <form
          className={`shadow p-3 mb-5 bg-body-tertiary rounded ${payment.innerContainer}`}
        >
          <div className={payment.containerHeading}>Payment Gateway</div>
          <div className={payment.grid}>
            <div>
              <div className={payment.heading}>Billing Address</div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>Full Name</div>
                <input
                  className={payment.userInput}
                  type="text"
                  placeholder="Sayam Mondal"
                  required
                />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>Email</div>
                <input
                  className={payment.userInput}
                  type="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>Address</div>
                <input
                  className={payment.userInput}
                  type="text"
                  placeholder="room - street - locality"
                  required
                />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>City</div>
                <input
                  className={payment.userInput}
                  type="text"
                  placeholder="Kolkata"
                  required
                />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>State</div>
                <input
                  className={payment.userInput}
                  type="text"
                  placeholder="India"
                  required
                />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>Zip Code</div>
                <input
                  className={payment.userInput}
                  type="number"
                  placeholder="123 456"
                  required
                />
              </div>
            </div>

            <div>
              <div className={payment.heading}>Payment Info</div>
              <div className={payment.logoBox}>
                <div className={payment.subHeading}>Cards Accepted</div>
                <img src={cards} className={payment.cardImage} />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>Name On Card</div>
                <input
                  className={payment.userInput}
                  type="text"
                  placeholder="Mr. Sayam Mondal"
                  required
                />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>Card Number</div>
                <input
                  className={payment.userInput}
                  type="number"
                  placeholder="1111-2222-3333-4444"
                  required
                />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>Expiry Month</div>
                <input
                  className={payment.userInput}
                  type="text"
                  placeholder="January"
                  required
                />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>Expiry Year</div>
                <input
                  className={payment.userInput}
                  type="number"
                  placeholder="2024"
                  required
                />
              </div>
              <div className={payment.inputBox}>
                <div className={payment.subHeading}>CVV</div>
                <input
                  className={payment.userInput}
                  type="number"
                  placeholder="1234"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`btn btn-success ${payment.submitButton}`}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Payment;
