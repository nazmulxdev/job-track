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
            <div className="collapse-title font-semibold text-primary text-xl">
              How do I create an account?
            </div>
            <div className="collapse-content text-lg">
              Click the "Register" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary text-xl">
              How do I change my password?
            </div>
            <div className="collapse-content text-lg">
              Click the "Log in" button in the top right corner you will get
              forget password option and follow the password change process
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary text-xl">
              How do I update my profile?
            </div>
            <div className="collapse-content text-lg">
              To update profile, firstly you have to logged in or register.
              Then, click the profile picture in the navbar you will see a
              profile update button . Click profile update button and follow the
              process to update profile.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary text-xl">
              How do I find job under this website?
            </div>
            <div className="collapse-content text-lg">
              To find the job firstly you have to log in the website. If don't
              have any account or new, then you have to register.If you don't
              have any account you can't access the job section under the
              companies. After logged in or register go to explore job section
              and click your desire company and find your job and see the
              requirement and instant apply.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary text-xl">
              How can I see job requirement?
            </div>
            <div className="collapse-content text-lg">
              To see job requirement, go to the job section under the company
              and click view details button and see the job requirement in the
              job details modal.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-accent border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-primary text-xl">
              How can I contact with JobTrack Admin or HR?
            </div>
            <div className="collapse-content text-lg">
              To contact JobTrack Admin or HR, firstly have to log in the
              website and go to contactUs page . Then write your email and send
              us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
