import React from "react";
import Quote from "../components/Quote";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="dailyQuote">
        <div className="dailyQuote-section">
          <h2>Daily Quote</h2>
          {/* Quote component returns quotes rather than generates quotes -- pass in params */}
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            interdum, nibh id ultrices consectetur, mauris sem blandit orci,
            eget condimentum ante tortor efficitur magna. Nulla dui nulla,
            dapibus at tincidunt.
          </p> */}
          <Quote />
          {/* <Quote /> */}
          {/* --display-section */}
        </div>
      </div>
      <div className="quoteGenerator">
        <div className="quoteGenerator-section">
          {/* any click - links to quoteGenerator page */}
          {/* <Quote /> */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
