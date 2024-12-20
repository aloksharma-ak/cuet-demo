import React, { useState } from "react";
import "./Form.css";
import Indrajeet_singh from "../../assets/Indrajeet_singh.webp";
import medium_ij from "../../assets/medium-ij.png";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    targetYear: "",
    timeSlot: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <div className="top-section">
        <img src={Indrajeet_singh} alt="Person" className="profile-image" />
        <div className="top-right-section">
          <h2>BOOK 1 ON 1 COUNSELLING FROM MBA EXPERTS</h2>
          <form onSubmit={handleSubmit} className="counselling-form">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email ID"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="form-select">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course*</option>
                {/* Add course options here */}
              </select>
              <select
                name="targetYear"
                value={formData.targetYear}
                onChange={handleChange}
                required
              >
                <option value="">Target Year*</option>
                {/* Add target year options here */}
              </select>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                required
              >
                <option value="">Select Time Slot*</option>
                {/* Add time slot options here */}
              </select>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom-section">
        <div className="description">
          <h2>The Brain behind CUETPlus</h2>
          <p>
            Anand Jha popularly known as the 'Wizard of Quant', is a small
            town boy from Bihar who has made it big in the Education Industry.
            Having started from humble beginnings to now being the CEO and
            Founder of an online CAT Preparation behemoth and India's largest
            CAT online coaching is a feat in itself. Having been an aspirant
            himself, he understands the plight of students and hence came up
            with the revolutionary idea which has made CUETPlus a one-stop online
            destination for the preparation of all MBA Examinations.
          </p>
          <h3>
            Featured as Top Young Entrepreneur of India in many reputed sites:
          </h3>
          <div className="logos">
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src={medium_ij}
                alt={`Logo ${i + 1}`}
                className="logo"
              />
            ))}
          </div>
          <button className="team-button">Know Team iQuanta</button>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
};

export default Form;
