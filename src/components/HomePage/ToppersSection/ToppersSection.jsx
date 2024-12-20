import React, { useRef } from "react";
import "./ToppersSection.css";
import img1 from "../../../assets/1.png";
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import img4 from '../../../assets/4.png';
import img5 from '../../../assets/5.png';
import img6 from '../../../assets/6.png';
import img7 from '../../../assets/7.png';
import img8 from '../../../assets/8.png';
import img9 from '../../../assets/9.png';
import img10 from '../../../assets/10.png';

const SuccessStory = ({ name, college, story, imageUrl }) => (
  <div className="success-story">
    <img src={imageUrl} alt={name} className="profile-image" loading="lazy" />
    <div className="content">
      <p className="story-text">{story}</p>
      <div className="author">
        <strong>{name}</strong>
        <br />
        <span>{college}</span>
      </div>
      <button className="read-more">Read my Success Story</button>
    </div>
  </div>
);

const ToppersSection = () => {
  const cardRef = useRef(null);

  const scroll = (direction) => {
    const { current } = cardRef;
    if (current) {
      const scrollAmount = direction === "left" ? -current.clientWidth : current.clientWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const successStories = [
    {
      name: "Shweta Arya",
      college: "IIM Shillong",
      story:
        "I think iQuanta CAT online coaching is a pre-requisite to nail any management exam. It helped me strengthen my weaker sections and also improve my score...",
      imageUrl: img1,
    },
    {
      name: "Arpit Behl",
      college: "MDI, Gurgaon",
      story:
        "iQuanta played a leading role in my success. With the help of Indrajeet Sir in Quant- my stronger section, I scored a sectional score of 98.79%ile in ...",
      imageUrl: img2,
    },
    {
      name: "Shubham Varshney",
      college: "IIM Ahmedabad",
      story:
        "When offline coaching ditched us, then iQuanta's CAT online classes came to the rescue. Thanks a lot Indrajeet!",
      imageUrl: img3,
    },
    {
      name: "Arpit Behl",
      college: "MDI, Gurgaon",
      story:
        "iQuanta played a leading role in my success. With the help of Indrajeet Sir in Quant- my stronger section, I scored a sectional score of 98.79%ile in ...",
      imageUrl: img4,
    },
    {
      name: "Shubham Varshney",
      college: "IIM Ahmedabad",
      story:
        "When offline coaching ditched us, then iQuanta's CAT online classes came to the rescue. Thanks a lot Indrajeet!",
      imageUrl: img5,
    },
    {
      name: "Arpit Behl",
      college: "MDI, Gurgaon",
      story:
        "iQuanta played a leading role in my success. With the help of Indrajeet Sir in Quant- my stronger section, I scored a sectional score of 98.79%ile in ...",
      imageUrl: img6,
    },
    {
      name: "Shubham Varshney",
      college: "IIM Ahmedabad",
      story:
        "When offline coaching ditched us, then iQuanta's CAT online classes came to the rescue. Thanks a lot Indrajeet!",
      imageUrl: img7,
    },
    {
      name: "Arpit Behl",
      college: "MDI, Gurgaon",
      story:
        "iQuanta played a leading role in my success. With the help of Indrajeet Sir in Quant- my stronger section, I scored a sectional score of 98.79%ile in ...",
      imageUrl: img8,
    },
    {
      name: "Shubham Varshney",
      college: "IIM Ahmedabad",
      story:
        "When offline coaching ditched us, then iQuanta's CAT online classes came to the rescue. Thanks a lot Indrajeet!",
      imageUrl: img9,
    },
  ];

  return (
    <section className="toppers-section">
      <div className="topper-container">
        <div className="heading">
          <h2>Read Toppers' Success Stories</h2>
          <p>
            Out of many 99%lers and Top IIM Converts from iQuanta, few have
            penned down their success stories to help out their juniors.
          </p>
          <button className="connect-now">Connect now ►</button>
        </div>
        <div className="stories-container">
          <div className="card" ref={cardRef}>
            {successStories.map((story, index) => (
              <SuccessStory key={index} {...story} />
            ))}
          </div>
          <div className="navigation">
            <button className="prev" onClick={() => scroll("left")}>
              {"<"}
            </button>
            <button className="next" onClick={() => scroll("right")}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToppersSection;
