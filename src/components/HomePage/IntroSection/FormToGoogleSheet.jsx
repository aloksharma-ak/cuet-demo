import React from "react";
import "./FormToGoogleSheet.css";

const FormToGoogleSheet = () => {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Submitted");

    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzt__KQ23KbCgAzT6bRHt78JklNqXxXMZP9wS3k9FhoN9RiSgXwrDwi3f8NKgLb8Pp3/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("submitted");
      })
      .catch((error) => console.error("Fetch error: ", error));
  }
  return (
    <div>
      <h1>Contact Me Form</h1>
      <form className="formDemo" onSubmit={(e) => Submit(e)}>
        <input placeholder="Name" name="Name" type="text" />
        <input placeholder="Email" name="Email" type="email" />
        <input placeholder="Message" name="Message" type="text" />
        <input className="buttonDemo" type="submit" />
      </form>
    </div>
  );
};

export default FormToGoogleSheet;
