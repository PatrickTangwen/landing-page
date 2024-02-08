import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import MainLandingPage from "pages/MainLanding.js";
import { useNavigate } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutOurProject from "pages/AboutOurProject.js";
import Dsc180 from "pages/dsc180.js";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  return (
    <>
      <GlobalStyles />
      <Router basename="/landing-page">
        <Routes>
          {/* <Route path="/thank-you" element={<ThankYouPage />} /> */}
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/About-Our-Project" element={<AboutOurProject />} />
          <Route path="/Dsc" element={<Dsc180 />} />
        </Routes>
      </Router>
    </>
  );
}