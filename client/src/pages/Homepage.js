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

          {/* three variables then->  -- three divs, or three <p> tags */}
          {/* -- h3 top left --p centered -- display: flex-column*/}
          {/* <div className="dailyQuote-section_previous">
            <div className="dayOneQuote">
              <h3>1 Day ago...</h3>
              <p>{dayOneQuote}</p>
            </div>
            <div className="dayTwoQuote">
              <h3>2 Days ago...</h3>
              <p>{dayTwoQuote}</p>
            </div>
            <div className="dayThreeQuote">
              <h3>3 Days ago...</h3>
              <p>{dayThreeQuote}</p>
            </div>
          </div> */}
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
