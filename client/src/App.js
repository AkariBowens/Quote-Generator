import React, { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Axios from "axios";
import Quote from "./components/Quote";

function App() {
  // const [quote, setQuote] = useState("");

  // useEffect(() => {
  //   getQuote();
  // }, []);

  // const getQuote = () => {
  //   // change id every time
  //   var options = {
  //     method: "GET",
  //     url: "https://healthruwords.p.rapidapi.com/v1/quotes/",
  //     params: { t: "Wisdom", maxR: "3", size: "medium", id: "731" },
  //     headers: {
  //       "x-rapidapi-host": "healthruwords.p.rapidapi.com",
  //       "x-rapidapi-key": "26f54531bfmshdda1bdc35d9c8e8p17cd41jsn144a6b2d2d77",
  //     },
  //   };

  //   Axios.request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setQuote(response.data.media);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  return (
    <div className="app">
      <h1>Hello</h1>
      <Quote />;
      {/* <button onClick={getQuote}>Get Random Quote</button>
      <img src={quote} alt="" /> */}
    </div>
  );
}

export default App;
