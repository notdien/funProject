import { useState } from "react";
import "./App.css";
import Navbar from "./components/outline/Navbar";
import Footer from "./components/outline/Footer";
function App() {
  return (
    <>
      {/* <Navbar />
      <div>Hello</div> */}
      <div className="main-container">
        {/* flexbox */}
        <Navbar />
        <div className="main-body"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
