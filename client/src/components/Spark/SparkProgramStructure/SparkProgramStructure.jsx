import React from "react";
import styles from "./SparkProgramStructure.module.css";
import { Link } from "react-router-dom";

const SparkProgramStructure = ({ cards, bannerData, enrollData }) => {
  const hasSubTitle2 = cards.some((card) => card.subTitle2);
  console.log("Has subTitle2:", hasSubTitle2);

  return (
    <section className={styles.SparkProgramStructure}>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            {card.title && <h2 className={styles.title}>{card.title}</h2>}
            <h3 className={styles.subTitle}>{card.subTitle}</h3>
            <div className={styles.desc}>
              <ul>
                {card.desc.map((desc, index) => (
                  <li className={styles.desc_item} key={index}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            {card.subTitle2 && (
              <>
                <h3 className={styles.subTitle}>{card.subTitle2}</h3>
                <div className={styles.desc2}>
                  <ul>
                    {card.desc2.map((desc, index) => (
                      <li className={styles.desc_item} key={index}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
            {card.img_url && (
              <img
                src={card.img_url}
                alt="Spark_12_Year"
                className={styles.img_url}
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
      <div
        className={styles.banner}
        style={hasSubTitle2 ? { top: "56%" } : {}}
      >
        {bannerData && <SparkBanner bannerData={bannerData} />}
      </div>
      <div className={styles.enroll}>
        {enrollData && <Enroll enrollData={enrollData} />}
      </div>
    </section>
  );
};

export default SparkProgramStructure;

const SparkBanner = ({ bannerData }) => (
  <div className={styles.SparkBanner}>
    <h2 className={styles.bannerTitle}>{bannerData.title}</h2>
    <p className={styles.bannerDesc}>{bannerData.desc}</p>
    <Link to={bannerData.link} className={styles.btn}>
      {bannerData.buttonText}
    </Link>
  </div>
);

const Enroll = ({ enrollData }) => (
  <div className={styles.Enroll}>
    <h2 className={styles.enrollTitle}>{enrollData.title}</h2>
    <ul>
      {enrollData.list.map((item, index) => (
        <li className={styles.enroll_item} key={index}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);
