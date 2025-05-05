import React from "react";
import faqImage from "../assets/vecteezy_faq-metaphore-vector-flat-style-illustration-design_8608278.jpg";

const FaqSection = () => {
  return (
    <div className="xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12">
      <h1 className="font-bold text-4xl mt-18 text-center">
        <span className="text-primary">FAQ:</span> Need Help? We’ve Got Answers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-2">
        <div>
          <img src={faqImage} alt="" />
        </div>
        <div>
          {" "}
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
