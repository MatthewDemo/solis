import React from "react";
import reviewImage1 from "../../images/review1.svg";
import reviewImage2 from "../../images/review2.svg";
import reviewImage3 from "../../images/review3.svg";
import "./Reviews.scss";
import { useSelector } from "react-redux";

const Reviews = () => {
  const isBlack = useSelector((state) => state.theme.isBlack);
  const reviewsClassName = isBlack ? "reviews reviews-black" : "reviews";
  return (
    <div className={reviewsClassName}>
      <h1>
        Client <span>reviews</span>
      </h1>
      <p>
        Happy clients, happy us. Read our client reviews about the work process
        and results.
      </p>
      <div className="reviews-container">
        <div className="review-block">
          <img src={reviewImage1} alt="" />
          <p>
            Solis did a great job. Whether providing direct development support
            or giving us the opportunity to make our development updates,
            Solis's web design expertise and support services were top notch! It
            didn't take long to stand up our website, and we were pleased with
            the design and layout of the graphics and information.
          </p>
          <h2>Dr. Jamika Burge</h2>
        </div>
        <div className="review-block">
          <img src={reviewImage2} alt="" />
          <p>
            Solis is a cutting edge company and knows the importance of
            excellence. Having been in business for 21 years, I know when I’ve
            found a competent professional and more importantly a company with
            integrity. I highly recommend this company and am available for
            further reference if needed.
          </p>
          <h2>Evie-Rose Prosse</h2>
        </div>
        <div className="review-block">
          <img src={reviewImage3} alt="" />
          <p>
            I can’t say enough about how knowledgeable Toinette Rorie is in the
            area of Web Development. She indeed is a developer and can build a
            site from scratch. She understands functionality and is great at
            constructing a site that is robust and fully functioning.
          </p>
          <h2>Elvis Mooney</h2>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
