import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageWrapper from "../PageWrapper/PageWrapper";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<CurrencyConverter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
