import React from "react";
import CollapsibleExample from "./components/Navbar";
import LandingSection from "./components/LandingSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

function App() {
  return (
    <>
      <CollapsibleExample />
      <LandingSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default App;
