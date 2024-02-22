import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Footer from "./components/Footer";

import "./App.css";
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
};

export default App;
