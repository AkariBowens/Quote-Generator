import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import QuoteGenerator from "./pages/QuoteGenerator";
import QuoteList from "./pages/QuoteList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
        <Route path="/quote-list" element={<QuoteList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
