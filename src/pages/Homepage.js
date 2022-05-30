import React from "react";
import Quote from "../components/Quote";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="quoteGenerator">
        <h2>Daily Quote</h2>
        <Quote />
      </div>
    </div>
  );
}

export default Homepage;
