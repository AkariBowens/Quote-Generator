import React, { useState } from "react";
import "./QuoteList.css";
import API_KEY from "../keys";
import axios from "axios";

function QuoteList() {
  const [data, setData] = useState("");

  var options = {
    method: "GET",
    url: "https://healthruwords.p.rapidapi.com/v1/quotes/",
    // size: "medium", id: "731"  - extra params
    params: { t: "Wisdom", maxR: "1" },
    headers: {
      "x-rapidapi-host": "healthruwords.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setData(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  // console.log(data);
  return (
    <div className="quote-list">
      <h1>Quote List</h1>
      {/* <p>{data}</p> */}
    </div>
  );
}

export default QuoteList;
