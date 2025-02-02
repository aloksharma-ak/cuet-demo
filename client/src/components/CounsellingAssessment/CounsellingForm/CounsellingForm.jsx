import React, { useEffect, useRef, useState } from "react";
import styles from "./CounsellingForm.module.css";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const API_KEY = import.meta.env.VITE_COUNTRY_STATE_CITY_API_KEY;

function CounsellingForm() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStream, setSelectedStream] = useState("");
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
    Counselling: "",
    Stream: "",
    Class: "",
  });
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries", {
      headers: { "X-CSCAPI-KEY": API_KEY },
    })
      .then((response) => response.json())
      .then((data) => setCountries(data || []))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    if (formData.Country) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${formData.Country}/states`,
        { headers: { "X-CSCAPI-KEY": API_KEY } }
      )
        .then((response) => response.json())
        .then((data) => setStates(data || []))
        .catch((error) => console.error("Error fetching states:", error));
    }
  }, [formData.Country]);

  useEffect(() => {
    if (formData.Country && formData.State) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${formData.Country}/states/${formData.State}/cities`,
        { headers: { "X-CSCAPI-KEY": API_KEY } }
      )
        .then((response) => response.json())
        .then((data) => setCities(data || []))
        .catch((error) => console.error("Error fetching cities:", error));
    }
  }, [formData.Country, formData.State]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailChange = ({ target: { value } }) => {
    setFormData((prev) => ({ ...prev, Email: value }));
    setEmailError(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format"
    );
  };

  const handlePhoneChange = ({ target: { value } }) => {
    const cleanedValue = value.replace(/\D+/g, "");
    setPhoneError(
      /^\d{10,15}$/.test(cleanedValue)
        ? ""
        : "Phone number must be between 10 and 15 digits"
    );
    setFormData((prev) => ({ ...prev, Phone: cleanedValue }));
  };

  const handleClassChange = (e) => {
    const { value } = e.target;
    setSelectedClass(value);
    setFormData((prev) => ({
      ...prev,
      Class: value,
      Counselling: "",
      Stream: "",
    }));
  };

  const handleStreamChange = (e) => {
    const { value } = e.target;
    setSelectedStream(value);
    setFormData((prev) => ({ ...prev, Stream: value }));
  };

  const handleCounsellingChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, Counselling: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || phoneError) {
      alert("Please fix the form errors before submitting.");
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    const GOOGLE_SHEET_URL = import.meta.env
      .VITE_GOOGLE_SHEET_API_URL_COUNSELLING;
    const formPayload = new FormData(e.target);

    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      body: formPayload,
    })
      .then((response) => response.text())
      .then(() => {
        alert(
          "Thank you for submitting your details! Our team will get in touch with you shortly to guide you through the next steps. Let's ace CUET together with CUETPlus!"
        );
        setFormData({
          Name: "",
          Phone: "",
          Email: "",
          Country: "IN",
          State: "",
          City: "",
          Counselling: "",
          Stream: "",
          Class: "",
        });
        navigate("/counselling");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting the form. Please try again.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className={styles.formCenter}>
      <div className={styles.formContainerDiv}>
        <div className={styles.closeBtn} onClick={() => navigate(-1)}>
          <IoClose />
        </div>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
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
              value={selectedClass}
              onChange={handleClassChange}
              required
            >
              <option value="">Select Class</option>
              {["9th", "10th", "11th", "12th"].map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          {(selectedClass === "11th" || selectedClass === "12th") && (
            <div className={styles.inputGroup}>
              <label>Stream</label>
              <select
                name="Stream"
                value={formData.Stream}
                onChange={handleStreamChange}
                required
              >
                <option value="">Select Stream</option>
                <option value="Com">Commerce</option>
                <option value="Hum">Humanities</option>
                <option value="Sci">Science</option>
              </select>
            </div>
          )}

          {selectedClass && (
            <div className={styles.inputGroup}>
              <label>Counselling</label>
              <select
                name="Counselling"
                value={formData.Counselling}
                onChange={handleCounsellingChange}
                required
              >
                {/* <option value="">Select Counselling Option</option> */}
                {(selectedClass === "9th" || selectedClass === "10th") && (
                  <option value="Stream Counselling">Stream Counselling</option>
                )}
                {(selectedClass === "11th" || selectedClass === "12th") && (
                  <option value="Career Counselling">Career Counselling</option>
                )}
              </select>
            </div>
          )}

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

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CounsellingForm;
