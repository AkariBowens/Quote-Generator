import React, { useEffect, useState } from "react";
import "./Quote.css";
import Axios from "axios";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    // change id every time
    var options = {
      method: "GET",
      url: "https://healthruwords.p.rapidapi.com/v1/quotes/",
      params: { t: "Wisdom", maxR: "3", size: "medium", id: "731" },
      headers: {
        "x-rapidapi-host": "healthruwords.p.rapidapi.com",
        "x-rapidapi-key": "26f54531bfmshdda1bdc35d9c8e8p17cd41jsn144a6b2d2d77",
      },
    };

    Axios.request(options)
      .then(function (response) {
        console.log(response.data);
        setQuote(response.data.media);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="quote">
      <h1>Random Quote</h1>

      <div className="quote--image__container">
        <img className="quote--image" src={quote} alt="" />
      </div>
      <div className="quote--button__container">
        <button className="quote--button" onClick={getQuote}>
          Get Random Quote
        </button>
      </div>
    </div>
  );
  {
    /* <div className="quote-section">
      <div className="quote-section__display"> */
  }
  {
    /* window  */
  }
  {
    /* <p>{newResponse}</p> */
  }
  // </div>
  // <div className="quote-section__categories">
  {
    /* dropdown_default-random menu */
  }
  {
    /* form dropdown setamount */
  }
  {
    /* event handler onClick for category and amount */
  }
  // </div>
  {
    /* <div className="quote-section__generate"> */
  }
  {
    /*amount -- button element */
  }
  // </div>
  // </div>
}

export default Quote;
