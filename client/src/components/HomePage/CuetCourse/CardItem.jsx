import React from "react";
import "./CardItem.css";

function CardItem({ cuetData, onCheckEligibility }) {

 
  return (
    <>
      {cuetData.map((item) => (
        <div className="course-card-item" key={item.id}>
          <img src={item.img} alt={item.title} loading="lazy" />
          <div className="course-card-padding">
            <h3 className="course-card-heading">{item.title}</h3>
            {item.subTitle && <h4 className="course-card-subHeading">{item.subTitle}</h4>}
            <p className="course-card-desc">{item.desc}</p>
            <div className="course-card-price">
              <span className="course-card-price-no">{item.price}</span>
              <span className="course-card-price-fees">{item.fees}</span>
            </div>
          </div>
          <span className="course-card-off" onClick={() => onCheckEligibility(item.id)}>
            Up to <span>{item.off} Off</span>{" "}
            <button className="eligibility-btn">Check eligibility</button>
          </span>
        </div>
      ))}
    </>
  );
}

export default CardItem;
