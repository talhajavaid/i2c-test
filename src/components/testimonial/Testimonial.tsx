import React from "react";
import "./Testimonial.scss";
import ProfilePic1 from "../../assets/images/Rectangle.png";
import ProfilePic2 from "../../assets/images/Rectangle1.png";
import ProfilePic3 from "../../assets/images/Rectangle2.png";
import Illustration from "../../assets/images/Investment1.png";
import UnderLine from "../../assets/images/underline.svg";
const TestimonialComponent: React.FC = () => {
  const testimonials = [
    {
      name: "Andrew Schultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
      img: ProfilePic1,
    },
    {
      name: "Andrew Schultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
      img: ProfilePic2,
    },
    {
      name: "Andrew Schultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
      img: ProfilePic3,
    },
  ];

  return (
    <div className="container">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <h1 className="testimonial-heading">
            Lorem ipsum <span className="highlight">dolor
              <img className="underline" src={UnderLine} alt="UnderLine" /></span> sit amet yo
            <span className="wave">👋</span>
          </h1>
          <div className="testimonials">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="profile-pic"
                />
                <div className="testimonial-text">
                  <strong>{testimonial.name}</strong>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="illustration">
          <img src={Illustration} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
