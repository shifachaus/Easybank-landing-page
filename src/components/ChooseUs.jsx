import React from "react";
import "../components/ChooseUs.css";
import Services from "./Services";

const ChooseUs = () => {
  return (
    <main className="main__choose--us" id="about">
      <section className="section__choose--us container">
        <div className="choose__us--container">
          <h2 className="secondary__heading"> Why choose Easybank?</h2>
          <p className="text">
            {" "}
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
      </section>

      <Services />
    </main>
  );
};

export default ChooseUs;
