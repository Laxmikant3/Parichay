import React from "react";
import Layout from "./Layout/Layout";
import { Route, Router, Routes } from "react-router-dom";
import Certifications from "./Pages/Certifications";
import Experience from "./Pages/Experience";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster position="top-center" richColors theme="dark" />
      <Routes> 
        <Route path="/" element={<Layout />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certification" element={<Certifications />} />
      </Routes>
    </>
  );
};

export default App;
