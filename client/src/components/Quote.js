import React, { useState } from "react";
import "./Quote.css";
import { useApi } from "../api";

function Quote() {
  // const [amount, setAmount] = useState("");
  // const [category, setCategory] = useState("");

  let category = "Wisdom";
  let amount = "1";
  //const { data } = useApi(category, amount);
  const newResponse = useApi(category, amount);
  console.log(newResponse + "--console");

  return (
    <div className="quote-section">
      <div className="quote-section__display">
        {/* window  */}
        <p>{newResponse}</p>
      </div>
      <div className="quote-section__categories">
        {/* dropdown_default-random menu */}
        {/* form dropdwn setamount */}
        {/* event handler onClick for category and amount */}
      </div>
      <div className="quote-section__generate">
        {/*amount -- button element */}
      </div>
    </div>
  );
}

export default Quote;
