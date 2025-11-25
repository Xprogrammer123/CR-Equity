import React from "react";
import Hero from "../app/components/Hero";
import Metrics from "../app/components/Metrics";
import GrowthStory from "../app/components/GrowthStory";
import EmployeeCard from "../app/components/EmployeeCard";
import CTASection from "../app/components/CTASection";


const App = () => {
  return (
    <div className="App font-sans">
      <Hero />
      <Metrics />
      <GrowthStory />
      <EmployeeCard />
      <CTASection />
    </div>
  );
}

export default App;