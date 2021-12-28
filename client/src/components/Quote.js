import React, { useEffect, useState } from "react";
import "./Quote.css";
import Axios from "axios";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    Axios.get("https://type.fit/api/quotes")
      .then(function (response) {
        let randomInd = Math.floor(Math.random() * response.data.length);
        console.log(response.data[randomInd]);
        setQuote(response.data[randomInd]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="quote">
      <div className="quote--container">
        <div className="quote--container__text">
          <p>"{quote.text}"</p>
        </div>
        <div className="quote--container__author">
          <p> - {quote.author}</p>
        </div>
      </div>

      <div className="quote--button__container">
        <button className="quote--button" onClick={getQuote}>
          Get Random Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
