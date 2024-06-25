import React from "react";
import Features from "../../../components/features/Features";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./LandingPage.scss";
import Slider from "../../../components/slider/Slider";
import Testimonial from "../../../components/testimonial/Testimonial";
import RegistrationForm from "../../../components/registrationForm/RegistrationForm";

const LandingPage: React.FC = () => {
  return (
    <div className="LandingPage">
      <Navbar />
      <Testimonial />
      <Features />
      <Slider />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
