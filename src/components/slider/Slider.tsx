import React, { useState, useEffect } from "react";
import Microsoft from "../../assets/images/microsoft.svg";
import Twitter from "../../assets/images/twitter.svg";
import Coke from "../../assets/images/coke.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Slider.scss";
import UnderLine1 from "../../assets/images/underline1.svg";

const Slider: React.FC = () => {
  const [images, setImages] = useState<string[]>([Microsoft, Twitter, Coke]);
  const [transitioning, setTransitioning] = useState<boolean>(false);

  const handleForward = () => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setImages((prevImages) => {
          const newImages = [...prevImages];
          const firstImage = newImages.shift() as string;
          newImages.push(firstImage);
          return newImages;
        });
        setTransitioning(false);
      }, 500);
    }
  };

  const handleBackward = () => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setImages((prevImages) => {
          const newImages = [...prevImages];
          const lastImage = newImages.pop() as string;
          newImages.unshift(lastImage);
          return newImages;
        });
        setTransitioning(false);
      }, 1000); // Duration should match the CSS transition duration
    }
  };

  useEffect(() => {
    const interval = setInterval(handleForward, 2000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [transitioning]);

  return (
    <div className="container">
      <div className="slider-column">
        <h2 className="slider-heading">
          Trusted by
          <img src={UnderLine1} alt="UnderLine" className="underLine1" />
        </h2>
        {/* <div className="Vector-17"></div> */}
        <p className="slider-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
      </div>
      <div className="slider">
        <IoIosArrowBack className="sliderArrow" onClick={handleBackward} />
        <div className={`sliderContainer ${transitioning ? "transitioning" : ""}`}>
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image} alt="CompanyLogo" />
            </div>
          ))}
        </div>
        <IoIosArrowForward className="sliderArrow" onClick={handleForward} />
      </div>
    </div>
  );
};

export default Slider;
