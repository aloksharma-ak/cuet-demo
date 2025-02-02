import React, { useState } from "react";
import "./FormToGoogleSheet.css";
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from "firebase/auth";

// Firebase configuration (replace with your provided config)
const firebaseConfig = {
  apiKey: "AIzaSyDd9WwT_KTSGAe-lRKAQkXrdaRz5kLdu4M",
  authDomain: "cuetphone.firebaseapp.com",
  projectId: "cuetphone",
  storageBucket: "cuetphone.firebasestorage.app",
  messagingSenderId: "598009854290",
  appId: "1:598009854290:web:ca49b97c1332e710f3e28b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const FormToGoogleSheet = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Request OTP
  const requestOtp = () => {
    if (!mobile || !/^\+?[1-9]\d{1,14}$/.test(mobile)) {
      alert("Please enter a valid mobile number in E.164 format (e.g., +1234567890).");
      return;
    }
  
    // Check if ReCAPTCHA is already initialized
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "invisible" },
        auth
      );
    }
  
    signInWithPhoneNumber(auth, mobile, window.recaptchaVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        setIsOtpSent(true);
        alert("OTP sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending OTP: ", error);
        alert("Failed to send OTP. Please try again.");
      });
  };
  

  // Verify OTP
  const verifyOtp = () => {
    if (!otp || !verificationId) {
      alert("Please enter the OTP.");
      return;
    }

    const credential = PhoneAuthProvider.credential(verificationId, otp);
    auth.signInWithCredential(credential)
      .then(() => {
        alert("Phone number verified successfully!");
        setIsOtpVerified(true);
      })
      .catch((error) => {
        console.error("Error verifying OTP: ", error);
        alert("Invalid OTP. Please try again.");
      });
  };

  const Submit = (e) => {
    e.preventDefault();
    if (!isOtpVerified) {
      alert("Please verify your phone number first.");
      return;
    }

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbxC2bITcRPwuUWdU95JdZFhcwFR47w9gVRuBsMflPQTSRHIBAVcSKG7MgaoKzVgnq6s/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Form submitted successfully: ", data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting form: ", error);
        alert("Failed to submit the form. Please try again.");
      });
  };

  return (
    <div>
      <h1>Contact Me Form</h1>
      <div id="recaptcha-container"></div>
      <form className="formDemo" onSubmit={(e) => Submit(e)}>
        <input placeholder="Name" name="Name" type="text" required />
        <input
          placeholder="Mobile (E.164 format)"
          name="Mobile"
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <button type="button" onClick={requestOtp}>
          Send OTP
        </button>

        {isOtpSent && (
          <>
            <input
              placeholder="Enter OTP"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="button" onClick={verifyOtp}>
              Verify OTP
            </button>
          </>
        )}

        <input placeholder="Email" name="Email" type="email" required />
        <input placeholder="Message" name="Message" type="text" required />
        <input className="buttonDemo" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormToGoogleSheet;
