import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import View from "./View";
// import Edit from "./Edit";
// import Undefined from "./Undefined";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <h2>Home</h2>
            </div>
          }
        ></Route>
        <Route
          exact
          path="/View"
          element={
            <div>
              <h2>View</h2>
            </div>
          }
        ></Route>
        <Route
          exact
          path="/Edit"
          element={
            <div>
              <h2>Edit</h2>
            </div>
          }
        ></Route>
        <Route
          exact
          path="/Undefind"
          element={
            <div>
              <h2>xyz</h2>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
