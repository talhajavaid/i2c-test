import React, { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./RegistrationForm.scss";
import RegImg from "../../assets/images/RegForm.png";

interface FormData {
  name: string;
  companyName: string;
  email: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    companyName: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};

    // Validate form fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, update state to show error messages
      setErrors(newErrors);
      return;
    }

    // Check if form data is already submitted
    const storedData = localStorage.getItem("registrationData");
    if (storedData) {
      toast.error("Form has already been submitted.");
      return;
    }

    // Store data in local storage
    localStorage.setItem("registrationData", JSON.stringify(formData));
    toast.success("Registration successful!");

    // Optionally, you can clear the form fields after submission
    setFormData({
      name: "",
      companyName: "",
      email: "",
    });
  };

  return (
    <div className="container">
      <Toaster />
      <div className="registration-form">
        <div>
          <img className="form-img" src={RegImg} alt="Placeholder" />
        </div>
        <div className="form-container">
          <h2 className="form-heading">Registration</h2>
          <p className="form-text">Fill out the form below:</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="text-style-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="companyName">
                Company <span className="text-style-1">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleChange}
              />
              {errors.companyName && (
                <span className="error-message">{errors.companyName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="text-style-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
