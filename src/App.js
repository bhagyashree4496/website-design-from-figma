import React from "react";
import HeroSection from "./HeroSection";
import Testimonial from "./Testimonial";
import Courses from "./Courses";
import Appsection from "./Appsection";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <HeroSection></HeroSection>
      <Testimonial></Testimonial>
      <Courses></Courses>
      <Appsection></Appsection>
      <Footer></Footer>
    </div>
  );
}
