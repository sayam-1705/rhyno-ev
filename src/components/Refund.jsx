import React from "react";
import refund from "../styles/policies.module.css";
import Footer from "./Footer";

function Refund() {
  return (
    <>
      <div className={refund.headingContainer}>Rhyno EV Refund Policy</div>

      <div className={refund.refundContainer}>
        <div className={refund.heading}>General Policy</div>
        <div className={refund.textContent}>
          At Rhyno EV, customer satisfaction is our top priority. If you are not
          completely satisfied with your purchase, we are here to help. Please
          read our refund policy carefully to understand your rights and the
          procedures to follow.
        </div>
        <div className={refund.heading}>Eligibility for Refund</div>
        <div className={refund.textContent}>
          To be eligible for a refund:
          <ul>
            <li>
              The item must be returned within 30 days of the purchase date.
            </li>
            <li>
              The item must be in its original condition, unused, and in the
              original packaging.
            </li>
            <li>
              Proof of purchase, such as a receipt or order confirmation, must
              be provided.
            </li>
          </ul>
        </div>
        <div className={refund.heading}>Non-Refundable Items</div>
        <div className={refund.textContent}>
          Certain items are exempt from being returned, including:
          <ul>
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Personalized or customized items</li>
            <li>
              Items purchased as part of a promotional sale (unless defective)
            </li>
          </ul>
        </div>
        <div className={refund.heading}>Refund Process</div>
        <div className={refund.textContent}>
          <ul>
            <li>
              <span className={refund.topicHeading}>Initiate a Return:</span>{" "}
              Contact our customer support team at{" "}
              <a className="text-lowercase" href="/refund">
                info@rhyno.in
              </a>{" "}
              to initiate the return process. Provide your order number and the
              reason for the return.
            </li>
            <li>
              <span className={refund.topicHeading}>Return Authorization:</span>{" "}
              Once your return request is approved, you will receive a Return
              Authorization Number (RAN) and instructions on how to return your
              item.
            </li>
            <li>
              <span className={refund.topicHeading}>Shipping:</span> Pack the
              item securely and include the RAN inside the package. Ship the
              item to the address provided in the return instructions. Customers
              are responsible for the return shipping costs unless the item is
              defective or incorrect.
            </li>
            <li>
              <span className={refund.topicHeading}>
                Inspection and Approval:
              </span>{" "}
              Once we receive the returned item, we will inspect it to ensure it
              meets our return criteria. If the item is approved, we will
              process your refund.
            </li>
            <li>
              <span className={refund.topicHeading}>Refund Issuance:</span>{" "}
              Refunds will be issued to the original payment method within 7-10
              business days of receiving the returned item. Depending on your
              payment provider, it may take additional time for the refund to
              reflect in your account.
            </li>
          </ul>
        </div>
        <div className={refund.heading}>Exchanges</div>
        <div className={refund.textContent}>
          We only replace items if they are defective or damaged. If you need to
          exchange an item for the same product, please contact us at{" "}
          <a className="text-lowercase" href="/refund">
            info@rhyno.in
          </a>{" "}
          with your order details and a description of the issue.
        </div>
        <div className={refund.heading}>Damaged or Defective Items</div>
        <div className={refund.textContent}>
          If you receive a damaged or defective item, please contact our
          customer support team within 7 days of receiving the item. Provide
          your order number, a description of the issue, and any supporting
          images. We will arrange for a replacement or refund.
        </div>
        <div className={refund.heading}>Contact Us</div>
        <div className={refund.textContent}>
          For any questions or concerns regarding our refund policy, please
          contact us at:
          <ul>
            <li>
              <span className={refund.topicHeading}>Email:</span>{" "}
              <a className="text-lowercase" href="/refund">
                info@rhyno.in
              </a>
            </li>
            <li>
              <span className={refund.topicHeading}>Phone:</span> +91-9023987528
            </li>
            <li>
              <span className={refund.topicHeading}>Address:</span> Rhyno Wheels
              Private limited, Near UG hostel gate #2, Behind PDEU, Raisan,
              Gandhinagar, Gujarat, India.
            </li>
          </ul>
          Thank you for choosing Rhyno EV. We value your business and are
          committed to providing exceptional service.
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Refund;
