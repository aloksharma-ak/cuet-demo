import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ClassroomProgramForm.module.css";
import form_background_img from "../../../assets/form_background_img.png";
import { IoClose } from "react-icons/io5";

const ClassroomProgramForm = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.classroomForm}>
      <div style={{ position: "relative" }}>
        <div className={styles.closeBtn} onClick={() => navigate(-1)}>
          <IoClose />
        </div>
        <ClassRoomForm formHead="Enroll for a Classroom Program" />
      </div>
      <img src={form_background_img} alt="form_background_img" />
    </div>
  );
};

export default ClassroomProgramForm;


function ClassRoomForm({ onClick, className, formHead }) {
  const [formState, setFormState] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Country: "IN",
    State: "",
    City: "",
    SelectedClassStream: null,
    SelectedClassSubject: null,
    SelectedSubjects: [],
    IntegrateClasses: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  // API key stored in a constant for reusability
  const API_KEY = import.meta.env.VITE_COUNTRY_STATE_CITY_API_KEY;

  // Fetch countries on component mount
  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries", {
      headers: { "X-CSCAPI-KEY": API_KEY },
    })
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    if (formState.Country) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${formState.Country}/states`,
        {
          headers: { "X-CSCAPI-KEY": API_KEY },
        }
      )
        .then((response) => response.json())
        .then((data) => setStates(data))
        .catch((error) => console.error("Error fetching states:", error));
    }
  }, [formState.Country]);

  // Fetch cities when country or state changes
  useEffect(() => {
    if (formState.Country && formState.State) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${formState.Country}/states/${formState.State}/cities`,
        {
          headers: { "X-CSCAPI-KEY": API_KEY },
        }
      )
        .then((response) => response.json())
        .then((data) => setCities(data))
        .catch((error) => console.error("Error fetching cities:", error));
    }
  }, [formState.Country, formState.State]);

  const classSubjects = {
    Commerce: ["Accountancy", "Economics", "Business Studies", "Maths", "English"],
    Humanities: ["Political Science", "History", "Sociology", "Geography", "English"],
    Science: ["Physics", "Chemistry", "Biology", "Maths", "English"],
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateMobile = (mobile) => /^\d{10,13}$/.test(mobile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleStreamClick = (classStream) => {
    setFormState((prev) => ({
      ...prev,
      SelectedClassStream: classStream,
      SelectedClassSubject: null,
      SelectedSubjects: [],
    }));
  };

  const handleSubjectClick = (classSubject) => {
    setFormState((prev) => ({
      ...prev,
      SelectedClassSubject: classSubject,
      SelectedSubjects: [],
    }));
  };

  const handleSubjectCheckboxChange = (subject) => {
    setFormState((prev) => {
      const selectedSubjects = [...prev.SelectedSubjects];
      if (selectedSubjects.includes(subject)) {
        return {
          ...prev,
          SelectedSubjects: selectedSubjects.filter((s) => s !== subject),
        };
      }
      return { ...prev, SelectedSubjects: [...selectedSubjects, subject] };
    });
  };

  const handleCheckboxChange = () => {
    setFormState((prev) => ({
      ...prev,
      IntegrateClasses: !prev.IntegrateClasses,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const {
      Name,
      Email,
      Mobile,
      State,
      City,
      SelectedClassStream,
      SelectedSubjects,
    } = formState;

   

    if (!validateEmail(Email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validateMobile(Mobile)) {
      alert("Please enter a valid mobile number (10-13 digits).");
      return;
    }

    if (
      (SelectedClassStream === "11th" || SelectedClassStream === "12th") &&
      SelectedSubjects.length === 0
    ) {
      alert("Please select at least one subject.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      if (key === "SelectedSubjects") {
        formData.append("Subjects", value.join(", "));
      } else if (key === "IntegrateClasses") {
        formData.append("IntegrateClasses", value ? "Yes" : "No");
      } else {
        formData.append(key, value);
      }
    });

    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });

    const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL_CLASSROOM;

    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to submit");
        }
        return res.json();
      })
      .then(() => {
        alert(
          "Thank you for submitting your details! Our team will get in touch with you shortly to guide you through the next steps. Let's ace CUET together with CUETPlus!"
        );
        setFormState({
          Name: "",
          Email: "",
          Mobile: "",
          State: "",
          City: "",
          SelectedClassStream: null,
          SelectedClassSubject: null,
          SelectedSubjects: [],
        });
        navigate(-1);
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
        alert("Submission failed. Please try again or contact support.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const {
    Name,
    Email,
    Mobile,
    Country,
    State,
    City,
    SelectedClassStream,
    SelectedClassSubject,
    SelectedSubjects,
  } = formState;

  return (
    <div className={`${styles.formContainerDiv} ${className}`} onClick={onClick}>
      <h2>{formHead}</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.inputBox}>
          <input
            type="text"
            name="Name"
            spellCheck="false"
            value={Name}
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
            value={Email}
            onChange={handleChange}
            required
          />
          <span>Email</span>
        </div>

        <div className={styles.inputBox}>
          <input
            type="tel"
            name="Mobile"
            spellCheck="false"
            maxLength={13}
            value={Mobile}
            onChange={handleChange}
            required
          />
          <span>Mobile No.</span>
        </div>

        <div className={styles.ClassStream}>
          <label htmlFor="Class" className={styles.classTitle}>
            Class
          </label>
          <select
            className={styles.classStreamButton}
            onChange={(e) => handleStreamClick(e.target.value)}
            style={{
              backgroundColor: "#124d51",
              color: "#fff",
              transition: "all 0.3s ease",
            }}
            value={SelectedClassStream || ""}
          >
            <option value="">--select class--</option>
            {["11th", "12th", "12th Pass"].map((classStream) => (
              <option key={classStream} value={classStream}>
                {classStream}
              </option>
            ))}
          </select>
        </div>

        {(SelectedClassStream === "11th" ||
          SelectedClassStream === "12th" ||
          SelectedClassStream === "12th Pass") && (
          <div className={styles.ClassStream}>
            <label htmlFor="Stream" className={styles.classTitle}>
              Stream
            </label>
            <select
              className={styles.classStreamButton}
              onChange={(e) => handleSubjectClick(e.target.value)}
              style={{
                backgroundColor: "#124d51",
                color: "#fff",
                transition: "all 0.3s ease",
              }}
              value={SelectedClassSubject || ""}
            >
              <option value="">--select subject--</option>
              {["Commerce", "Humanities", "Science"].map((classSubject) => (
                <option key={classSubject} value={classSubject} >
                  {classSubject}
                </option>
              ))}
            </select>
          </div>
        )}

        {SelectedClassSubject && (
          <>
            <label htmlFor="MainSubject" className={styles.classTitle}>
              Main Subjects
            </label>
            <div className={styles.Subject}>
              {(classSubjects[SelectedClassSubject] || []).map(
                (subject, index) => (
                  <span key={index} className={styles.subjectCheckboxes}>
                    <input
                      type="checkbox"
                      id={`${SelectedClassSubject}-${index}`}
                      checked={SelectedSubjects.includes(subject)}
                      onChange={() => handleSubjectCheckboxChange(subject)}
                    />
                    <label htmlFor={`${SelectedClassSubject}-${index}`}>
                      {subject}
                    </label>
                  </span>
                )
              )}
            </div>
          </>
        )}

        {SelectedClassStream === "11th" && (
          <span className={styles.subjectCheckboxes}>
            <input
              type="checkbox"
              id="integrate-classes"
              checked={formState.IntegrateClasses}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="integrate-classes"
              className={styles.desc}
              style={{ color: "aqua" }}
            >
              If you want to integrate the class for 11th and 12th Board
            </label>
          </span>
        )}

        {/* Country Dropdown */}
        <div>
          <label htmlFor="Country" className={styles.classTitle}>Country:</label>
          <select name="Country" value={Country} onChange={handleChange} required>
            <option value="">Select Country</option>
            {countries.map(({ iso2, name }) => (
              <option key={iso2} value={iso2}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* State Dropdown */}
        {Country && states.length > 0 && (
          <div>
            <label htmlFor="State" className={styles.classTitle}>State:</label>
            <select name="State" value={State} onChange={handleChange} required>
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
        {State && cities.length > 0 && (
          <div>
            <label htmlFor="City" className={styles.classTitle}>City:</label>
            <select name="City" value={City} onChange={handleChange} required>
              <option value="">Select City</option>
              {cities.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className={styles.inputBox}>
          <button type="submit" className={styles.submitButton}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}

