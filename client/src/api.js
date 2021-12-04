import React, { useState } from "react";
import API_KEY from "./keys";
const axios = require("axios").default;

//function api() {
// fear of experimentation
const useApi = (category, amount) => {
  var options = {
    method: "GET",
    url: "https://healthruwords.p.rapidapi.com/v1/quotes/",
    // size: "medium", id: "731"  - extra params
    params: { t: `"${category}"`, maxR: `"${amount}"` },
    headers: {
      "x-rapidapi-host": "healthruwords.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// var options = {
//   method: "GET",
//   url: "https://healthruwords.p.rapidapi.com/v1/quotes/",
//   // size: "medium", id: "731"  - extra params
//   params: { t: "Wisdom", maxR: "1" },
//   headers: {
//     "x-rapidapi-host": "healthruwords.p.rapidapi.com",
//     "x-rapidapi-key": API_KEY,
//   },
// };

//};

// return (

// );
//}

export { useApi };
// export default api;
