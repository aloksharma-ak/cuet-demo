import axios from "axios"; // Import axios for API requests
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new"; // Import Quill editor
import "react-quill-new/dist/quill.snow.css"; // Import styles for the editor
import styles from "./TextEditor.module.css"; // Import CSS module
import "./TextEditor.css";
import { useNavigate } from "react-router-dom";

const TextEditor = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    author: "",
    textContent: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [titleError, setTitleError] = useState("");
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle text editor changes
  const handleEditorChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      textContent: value,
    }));
  };

  // Check if title already exists
  const checkTitleExists = async (title) => {
    try {
      const response = await axios.get("/api/getArticles");
      const existingTitles = response.data.articles.map(
        (article) => article.title
      );
      if (existingTitles.includes(title)) {
        setTitleError("Title already exists");
      } else {
        setTitleError("");
      }
    } catch (error) {
      console.error("Error checking title:", error.message);
    }
  };

  // Check title existence whenever the title changes
  useEffect(() => {
    if (formData.title) {
      checkTitleExists(formData.title);
    } else {
      setTitleError(""); // Reset error when title is cleared
    }
  }, [formData.title]);

  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();


    if (titleError) {
      return; // Prevent form submission if title already exists
    }

    const dataToSend = {
      title: formData.title,
      desc: formData.desc,
      author: formData.author,
      textContent: formData.textContent,
    };

    try {
      // Send data to backend
      const response = await axios.post("/api/submitForm", dataToSend, {
        headers: {
          "Content-Type": "application/json", // Set content-type to JSON
        },
      });

      setStatusMessage(response.data.message || "Form submitted successfully!");
      // Reset form
      setFormData({
        title: "",
        desc: "",
        author: "",
        textContent: "",
      });
      navigate("/posts");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Failed to submit the form. Please try again.");
    }
  };

  const modules = {
    toolbar: [
      // Dropdowns for headers and fonts
      [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }],
      [{ font: [] }],

      [{ size: ["small", false, "large", "huge"] }], // Font size

      // Text styling options
      ["bold", "italic", "underline", "strike"], // Basic formatting
      [{ color: [] }, { background: [] }], // Text color and background color
      [{ script: "sub" }, { script: "super" }], // Subscript and superscript

      // Alignment and lists
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // Lists and indentation
      [{ align: [] }], // Alignment

      // Media and advanced features
      ["blockquote", "code-block"], // Blockquote and code block
      ["link"], // Links, images, and videos

      // Clear formatting
      ["clean"], // Removes formatting
      [{ table: true }],
    ],
  };

  return (
    <section className={styles.TextEditor}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className={styles.input}
            required
          />
           {titleError && <p className={styles.titleError}>{titleError}</p>}
          <input
            type="text"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Short Description"
            className={styles.input}
            required
          />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            className={styles.input}
            required
          />
          <ReactQuill
            theme="snow"
            value={formData.textContent}
            onChange={handleEditorChange}
            placeholder="Write something..."
            modules={modules}
            className={styles.editor}
            required
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
        {statusMessage && (
          <p className={styles.statusMessage}>{statusMessage}</p>
        )}
      </div>
    </section>
  );
};

export default TextEditor;
