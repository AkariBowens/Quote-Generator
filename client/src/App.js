import React, { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

import Quote from "./components/Quote";

function App() {
  return (
    <div className="app">
      <h1>Random Quote Generator</h1>
      <Quote />;
    </div>
  );
}

export default App;
