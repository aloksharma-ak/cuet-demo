import React, { useState } from "react";
import "./ReviewSection.css";
import review_img_1 from "../../../assets/11.png";
import review_img_2 from "../../../assets/22.png";
import review_img_3 from "../../../assets/13.png";
import review_img_4 from "../../../assets/31.png";
import review_img_5 from "../../../assets/28.png";
import review_img_6 from "../../../assets/29.png";

const review_imgs = [
  {
    img: review_img_1,
    name: "Devyani Mengi",
    subject:
      "Political Science-100 | Psychology-100 | English-98.09 | Economics-97.9",
    review_des: "In my opinion, the most valuable aspect of the CUET Plus...",
    description:
      "In my opinion, the most valuable aspect of the CUET Plus CUET online course was the abundance of mock exams available to us. These practice tests provided ample opportunities to prepare effectively.",
  },
  {
    img: review_img_2,
    name: "Vansh Bansal",
    subject: "English - 100 percentile",
    review_des: "One of the best features of CUET PLUS is its flexibility...",
    description:
      "One of the best features of CUET PLUS is its flexibility and clarity. Students can select their own subject combinations based on their individual preferences and goals.",
  },
  {
    img: review_img_3,
    name: "Muskan",
    subject: "English - 97.68 Percentile",
    review_des: "The CUET Plus mocks were incredibly beneficial for my...",
    description:
      "The CUET Plus mocks were incredibly beneficial for my preparations. The questions in the CUET Plus mocks were excellent and entirely aligned with the NCERT curriculum.",
  },
  {
    img: review_img_4,
    name: "Jyoti Garg",
    subject: "English - 95.26",
    review_des:
      "CUET Plus was a tremendous support during my CUET preparations...",
    description:
      "CUET Plus was a tremendous support during my CUET preparations. The video lessons, along with quizzes and mock tests, were instrumental in enhancing my understanding.",
  },
  {
    img: review_img_5,
    name: "Mohak Jain",
    subject:
      "Political Science-100 | Psychology-100 | English-98.09 | Economics-97.9",
    review_des:
      "Cuet Plus has motivated me to reach my goals. I am grateful...",
    description:
      "Cuet Plus has motivated me to reach my goals. I am grateful for the support and guidance they have provided throughout my journey.",
  },
  {
    img: review_img_6,
    name: "Shivansh Tiwari",
    subject: "English - 100 percentile",
    review_des:
      "Cuet Plus provided high-quality study materials and exceptional...",
    description:
      "Cuet Plus provided high-quality study materials and exceptional faculty support, which greatly assisted me in my preparation and helped me clear my exams successfully.",
  },
];

function ReviewSection() {
  const [selectedReview, setSelectedReview] = useState(review_imgs[0]);

  return (
    <div className="section-review">
      <h2>Our CUET Topper Reviews</h2>
      <div className="review-container">
        <div className="review-left">
          {review_imgs.map((review, index) => (
            <div
              className={`review-card ${
                selectedReview === review ? "border-color" : ""
              }`}
              key={index}
              onMouseEnter={() => setSelectedReview(review)}
            >
              <div className="student-details">
                <div className="img">
                  <img src={review.img} alt={review.name} loading="lazy" />
                </div>
                <h3>{review.name}</h3>
              </div>
              <h4>{review.subject}</h4>
              <p>{review.review_des}</p>
            </div>
          ))}
        </div>
        <div className="review-right">
          <div className="review-card-right">
            <div className="student-details">
              <div className="img">
                <img
                  src={selectedReview.img}
                  alt={selectedReview.name}
                  loading="lazy"
                />
              </div>
              <h3>{selectedReview.name}</h3>
            </div>
            <h4>{selectedReview.subject}</h4>
            <p>{selectedReview.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
  