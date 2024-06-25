import React from "react";
import Lock from "../../assets/images/Padlock.svg";
import Chart from "../../assets/images/progressBar.svg";
import Wc from "../../assets/images/wc.svg";
import "./Features.scss";

const Features: React.FC = () => {
  return (
    <div className="container">
      <div className="featureCardSection">
        <div className="featureCard">
          <div className="featureCardImg">
            <img src={Lock} alt="Lock" />
          </div>
          <div className="featureCardContent">
            <h5>24/7 Support</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="featureCard">
          <div className="featureCardImg">
            <img src={Chart} alt="Chart" />
          </div>
          <div className="featureCardContent">
            <h5>1000+ of reviews</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="featureCard">
          <div className="featureCardImg">
            <img src={Wc} alt="Wc" />
          </div>
          <div className="featureCardContent">
            <h5>And more</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
