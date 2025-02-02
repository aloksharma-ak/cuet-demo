import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "./ScholarshipForm.module.css";

// API key stored in a constant for reusability
const API_KEY = import.meta.env.VITE_COUNTRY_STATE_CITY_API_KEY;

export function ScholarshipFormContainer({ none }) {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStream, setSelectedStream] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Country: "IN",
    State: "",
    City: "",
    Scholarship: "",
  });
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const form = useRef();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch countries on component mount
  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries", {
      headers: { "X-CSCAPI-KEY": API_KEY },
    })
      .then((response) => response.json())
      .then(setCountries)
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    if (formData.Country) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${formData.Country}/states`,
        {
          headers: { "X-CSCAPI-KEY": API_KEY },
        }
      )
        .then((response) => response.json())
        .then(setStates)
        .catch((error) => console.error("Error fetching states:", error));
    }
  }, [formData.Country]);

  // Fetch cities when country or state changes
  useEffect(() => {
    if (formData.Country && formData.State) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${formData.Country}/states/${formData.State}/cities`,
        {
          headers: { "X-CSCAPI-KEY": API_KEY },
        }
      )
        .then((response) => response.json())
        .then(setCities)
        .catch((error) => console.error("Error fetching cities:", error));
    }
  }, [formData.Country, formData.State]);

  // Handle form input changes
  const handleChange = ({ target: { name, value } }) => {
    if (name === "Email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailPattern.test(value) ? "" : "Invalid email format");
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setSelectedClass(value); // For UI State management
    setFormData((prevData) => ({
      ...prevData,
      Class: value, // Add class to formData
      Scholarship: "", // Reset scholarship on class change
      Stream: "", // Reset stream on class change
    }));
  };

  const handleStreamChange = (e) => {
    const { value } = e.target;
    setSelectedStream(value); // For UI State management
    setFormData((prevData) => ({
      ...prevData,
      Stream: value, // Add stream to formData
    }));
  };

  const handleScholarshipChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      Scholarship: value, // Add scholarship to formData
    }));
  };

  const handleEmailChange = ({ target: { value } }) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(value);

    setFormData((prevData) => ({
      ...prevData,
      Email: value, // Update the email value in formData
    }));

    setEmailError(isValidEmail ? "" : "Invalid email format"); // Set the email error if invalid
  };

  const handlePhoneChange = ({ target: { value } }) => {
    const cleanedValue = value.replace(/\D+/g, "");
    setPhoneError(
      /^\d{10,15}$/.test(cleanedValue)
        ? ""
        : "Phone number must be between 10 and 15 digits"
    );
    setFormData((prevData) => ({ ...prevData, Phone: cleanedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors before proceeding
    if (emailError || phoneError) {
      alert("Please fix the form errors before submitting");
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    const formEle = document.querySelector("form");

    // Create a FormData object from the form element
    const formData = new FormData(formEle);

    // Your Google Sheets API endpoint
    const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL_SCHOLARSHIP;

    // Perform the POST request to the Google Sheets API
    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Check if the response is JSON or plain text
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          return response.json(); // Parse as JSON if content is JSON
        } else {
          return response.text(); // Otherwise, treat it as plain text
        }
      })
      .then((data) => {
        // Check if the response is plain text
        if (typeof data === "string") {
          console.log("Form submission response: ", data); // Plain text message
          alert(
            "Thank you for submitting your details! Our team will get in touch with you shortly to guide you through the next steps. Let's ace CUET together with CUETPlus!"
          );
        } else {
          console.log("Form submitted successfully", data); // If JSON response
          alert(
            "Thank you for submitting your details! Our team will get in touch with you shortly to guide you through the next steps. Let's ace CUET together with CUETPlus!"
          );
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
        // Reset all input fields after submission
        setFormData({
          Name: "",
          Phone: "",
          Email: "",
          Country: "IN",
          State: "",
          City: "",
          Scholarship: "",
          Stream: "",
          Class: "",
        });

        // Redirect to the scholarship page after successful submission
        navigate("/cuet-scholarship");
      });
  };

  return (
    <div className={styles.formContainerDiv}>
      <div
        className={styles.closeBtn}
        style={none}
        onClick={() => navigate(-1)}
      >
        <IoClose />
      </div>
      <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.inputBox}>
          <input
            type="text"
            name="Name"
            spellCheck="false"
            value={formData.Name}
            onChange={handleChange}
            required
          />
          <span>Name</span>
        </div>
        <div className={styles.inputBox}>
          <input
            type="email"
            name="Email"
            spellCheck="false"
            value={formData.Email}
            onChange={handleEmailChange}
            required
          />
          <span>Email</span>
          {emailError && <div className={styles.error}>{emailError}</div>}
        </div>
        <div className={styles.inputBox}>
          <input
            type="tel"
            name="Phone"
            spellCheck="false"
            value={formData.Phone}
            onChange={handlePhoneChange}
            required
          />
          <span>Mobile No.</span>
          {phoneError && <div className={styles.error}>{phoneError}</div>}
        </div>

        <div className={styles.inputGroup}>
          <label>Class</label>
          <select
            name="Class"
            value={formData.Class || ""}
            onChange={(e) => {
              handleRadioChange(e); // Reuse the existing function
            }}
            required
          >
            <option value="">Select Class</option>
            {["10th", "11th", "12th", "12th Pass"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Stream Selection */}
        {(selectedClass === "11th" ||
          selectedClass === "12th" ||
          selectedClass === "12th Pass") && (
          <div className={styles.inputGroup}>
            <label>Stream</label>
            <select
              name="Stream"
              value={formData.Stream}
              onChange={handleStreamChange}
              required
            >
              <option value="">Select Stream</option>
              <option value="Acc">Commerce</option>
              <option value="Hum">Humanities</option>
              <option value="Sci">Science</option>
            </select>
          </div>
        )}

        {/* Scholarships Options */}
        {selectedClass && (
          <div className={styles.inputGroup}>
            <label>Scholarships</label>
            <select
              name="Scholarship"
              value={formData.Scholarship}
              onChange={handleScholarshipChange}
              required
            >
              <option value="">Select Scholarship</option>
              {/* Conditional rendering for scholarship options */}
              {selectedClass === "10th" && (
                <option value="Spark">Spark</option>
              )}
              {selectedClass === "11th" && (
                <>
                  <option value="Spark">Spark</option>
                  <option value="Shine">Shine</option>
                </>
              )}
              {selectedClass === "12th" && (
                <>
                  <option value="Shine">Shine</option>
                  <option value="Star">Star</option>
                </>
              )}
              {selectedClass === "12th Pass" && (
                <option value="Star">Star</option>
              )}
            </select>
          </div>
        )}

        {/* Country Dropdown */}
        <div>
          <label>Country:</label>
          <select
            name="Country"
            value={formData.Country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map(({ iso2, name }) => (
              <option key={iso2} value={iso2}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* State Dropdown */}
        {formData.Country && states.length > 0 && (
          <div>
            <label>State:</label>
            <select
              name="State"
              value={formData.State}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {states.map(({ iso2, name }) => (
                <option key={iso2} value={iso2}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* City Dropdown */}
        {formData.State && cities.length > 0 && (
          <div>
            <label>City:</label>
            <select
              name="City"
              value={formData.City}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              {cities.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}

        <button type="submit">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

const ScholarshipForm = () => (
  <div className={styles.formCenter}>
    <ScholarshipFormContainer />
  </div>
);

export default ScholarshipForm;
