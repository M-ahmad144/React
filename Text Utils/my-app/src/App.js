import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <>
        {/* Navbar */}
        <Navbar title="TextUtils" aboutText="About" home="Home" />

        {/* Alert */}
        <Alert showAlert={alert} />

        <Routes>
          <Route
            exact
            path="/About"
            element={<About showAlert={showAlert} />}
          />
          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter the text to analyze below"
                  showAlert={showAlert}
                />
              </div>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
