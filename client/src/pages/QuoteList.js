import React, { useEffect, useState } from "react";
import "./QuoteList.css";
import API_KEY from "../keys";
import axios from "axios";

// I can do without this page, just the quote generator is cool

function QuoteList({ quotes }) {
  return (
    <div className="quote-list">
      <h1>Quote List</h1>
    </div>
  );
}

export default QuoteList;
