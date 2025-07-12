import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Apply from "./Pages/Apply";
import Staff from "./Pages/Staff";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apply" element={<Apply />} />
          <Route path="/Staff" element={<Staff />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;