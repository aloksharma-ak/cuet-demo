import React, { useEffect, useRef, useState } from "react";
import styles from "./PartnershipForm.module.css";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const API_KEY = import.meta.env.VITE_COUNTRY_STATE_CITY_API_KEY;

function PartnershipForm() {
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
    Role: "",
    BusinessName: "",
    CourseType: "",
    YearsInOperation: "",
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch countries on initial render
  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries", {
      headers: { "X-CSCAPI-KEY": API_KEY },
    })
      .then((response) => response.json())
      .then(setCountries)
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Fetch states when Country changes
  useEffect(() => {
    if (formData.Country) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${formData.Country}/states`,
        { headers: { "X-CSCAPI-KEY": API_KEY } }
      )
        .then((response) => response.json())
        .then(setStates)
        .catch((error) => console.error("Error fetching states:", error));
    }
  }, [formData.Country]);

  // Fetch cities when State changes
  useEffect(() => {
    if (formData.State) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${formData.Country}/states/${formData.State}/cities`,
        { headers: { "X-CSCAPI-KEY": API_KEY } }
      )
        .then((response) => response.json())
        .then(setCities)
        .catch((error) => console.error("Error fetching cities:", error));
    }
  }, [formData.Country, formData.State]);

  const validateField = (name, value) => {
    let error = "";
    if (name === "Email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      error = emailPattern.test(value) ? "" : "Invalid email format";
    }
    if (name === "Phone") {
      const phonePattern = /^\d{10,15}$/;
      error = phonePattern.test(value)
        ? ""
        : "Phone number must be 10 to 15 digits";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
    setFormData((prevData) => ({
      ...prevData,
      Role: value,
      BusinessName: "",
      CourseType: "",
      YearsInOperation: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors
    if (Object.values(errors).some((error) => error)) {
      alert("Please fix the form errors before submitting");
      return;
    }
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formDataObj = new FormData(formRef.current);

    const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL_PARTNERSHIP;

    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      body: formDataObj,
    })
      .then((response) => response.json())
      .then(() => {
        alert("Thank you! Your form has been submitted successfully.");
        navigate("/become-a-partner");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
        setFormData({
          Name: "",
          Phone: "",
          Email: "",
          Country: "IN",
          State: "",
          City: "",
          Role: "",
          BusinessName: "",
          CourseType: "",
          YearsInOperation: "",
        });
      });
  };

  return (
    <div className={styles.formCenter}>
      <div className={styles.formContainerDiv}>
        <div className={styles.closeBtn} onClick={() => navigate(-1)}>
          <IoClose />
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
          {/* Input fields */}
          <div className={styles.inputBox}>
            <input
              type="text"
              name="Name"
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
              value={formData.Email}
              onChange={handleChange}
              required
            />
            <span>Email</span>
            {errors.Email && <div className={styles.error}>{errors.Email}</div>}
          </div>
          <div className={styles.inputBox}>
            <input
              type="tel"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
            />
            <span>Mobile No.</span>
            {errors.Phone && <div className={styles.error}>{errors.Phone}</div>}
          </div>

          {/* Dropdowns */}
          <div className={styles.inputGroup}>
            <label>Type of Partnership Interested In</label>
            <select
              name="Role"
              value={formData.Role}
              onChange={handleRoleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="Education Consultant">Education Consultant</option>
              <option value="Education Franchise">Education Franchise</option>
              <option value="Center Partner">Center Partner</option>
              <option value="College Client">College Client</option>
            </select>
          </div>

          {/* Dynamic fields based on Role */}
          {(selectedOption === "Center Partner" ||
            selectedOption === "College Client") && (
            <div className={styles.organizationDetails}>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="BusinessName"
                  value={formData.BusinessName}
                  onChange={handleChange}
                  required
                />
                <span>Business Name</span>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="CourseType"
                  value={formData.CourseType}
                  onChange={handleChange}
                  required
                />
                <span>Type of Courses Offered</span>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="number"
                  name="YearsInOperation"
                  value={formData.YearsInOperation}
                  onChange={handleChange}
                  required
                />
                <span>Years in Operation</span>
              </div>
            </div>
          )}

          {/* Country, State, and City */}
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
          {states.length > 0 && (
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
          {cities.length > 0 && (
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

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PartnershipForm;
