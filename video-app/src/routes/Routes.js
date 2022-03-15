import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Call from "../component/call/Call";

const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/call" element={<Call />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routess;
