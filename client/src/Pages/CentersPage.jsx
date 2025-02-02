import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../components/CenterPages/CentersPage.module.css";

import delhiImg from "../assets/Delhi.avif";
import upImg from "../assets/lUCKNOW.png";
import punjabImg from "../assets/pUNJAB.png";
import jharkhandImg from "../assets/rANCHI.png";
import haryanaImg from "../assets/gURUGRAM.png";
import rajasthanImg from "../assets/jAIPUR.png";
import biharImg from "../assets/pATNA.png";
import wbImg from "../assets/kOLKATA.png";

import Delhi from "../components/CenterPages/Delhi/Delhi";
import UttarPradesh from "../components/CenterPages/UttarPradesh/UttarPradesh";
import WestBengal from "../components/CenterPages/WestBengal/WestBengal";
import Rajasthan from "../components/CenterPages/Rajasthan/Rajasthan";
import Jharkhand from "../components/CenterPages/Jharkhand/Jharkhand";
import Haryana from "../components/CenterPages/Haryana/Haryana";
import Bihar from "../components/CenterPages/Bihar/Bihar";
import Punjab from "../components/CenterPages/Punjab/Punjab";

export const centersData = [
  {
    id: 1,
    url: "best-cuet-coaching-in-delhi",
    component: <Delhi />,
    state: "Delhi",
    city: "New Delhi",
    image: delhiImg,
  },
  {
    id: 2,
    url: "best-cuet-coaching-in-uttar-pradesh",
    component: <UttarPradesh />,
    state: "Uttar Pradesh",
    city: "Lucknow",
    image: upImg,
  },
  {
    id: 3,
    url: "best-cuet-coaching-in-punjab",
    component: "",
    state: "Punjab",
    city: "Chandigarh",
    image: punjabImg,
  },
  {
    id: 4,
    url: "best-cuet-coaching-in-jharkhand",
    component: <Jharkhand />,
    state: "Jharkhand",
    city: "Ranchi",
    image: jharkhandImg,
  },
  {
    id: 5,
    url: "best-cuet-coaching-in-haryana",
    component: <Haryana />,
    state: "Haryana",
    city: "Gurgaon",
    image: haryanaImg,
  },
  {
    id: 6,
    url: "best-cuet-coaching-in-rajsthan",
    component: <Rajasthan />,
    state: "Rajasthan",
    city: "Jaipur",
    image: rajasthanImg,
  },
  {
    id: 7,
    url: "best-cuet-coaching-in-bihar",
    component: <Bihar />,
    state: "Bihar",
    city: "Patna",
    image: biharImg,
  },
  {
    id: 8,
    url: "best-cuet-coaching-in-west-bengal",
    component: <WestBengal />,
    state: "West Bengal",
    city: "Kolkata",
    image: wbImg,
  },
];

const CentersPage = () => {
  return (
    <>
      <Helmet>
        {/* <!-- Meta Tags for Centers Page --> */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CUET Coaching Centers Near You | Find the Best Locations</title>
        <meta
          name="description"
          content="Explore our CUET coaching centers across India. Find the best location near you with expert faculty, top-notch facilities, and flexible learning options."
        />
        <meta
          name="keywords"
          content="CUET coaching centers, CUET preparation locations, best CUET centers, CUET classes near me, CUET coaching in India, top CUET institutes"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cuet.plus/centers" />
        <meta name="author" content="Piyush Jaiswal" />
        {/* <!-- Open Graph Meta Tags --> */}
        <meta
          property="og:title"
          content="CUET Coaching Centers Near You | Find the Best Locations"
        />
        <meta
          property="og:description"
          content="Explore our CUET coaching centers across India. Find the best location near you with expert faculty, top-notch facilities, and flexible learning options."
        />
        <meta property="og:url" content="https://www.cuet.plus/centers" />
        <meta
          property="og:image"
          content="https://www.cuet.plus/assets/centers-banner.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CUET Plus" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CUET Coaching Centers Near You | Find the Best Locations"
        />
        <meta
          name="twitter:description"
          content="Explore our CUET coaching centers across India. Find the best location near you with expert faculty, top-notch facilities, and flexible learning options."
        />
        <meta
          name="twitter:image"
          content="https://www.cuet.plus/assets/centers-banner.jpg"
        />
      </Helmet>

      <section className={styles.centersContainer}>
        <h1 className={styles.centersTitle}>Our Centers</h1>
        <div className={styles.centersGrid}>
          {centersData.map((center) => (
            <div className={styles.centerCard} key={center.id}>
              <Link to={`/centers/${center.url}`} className={styles.centerLink}>
                {" "}
                {/* Dynamic Link */}
                <img
                  src={center.image}
                  alt={`${center.city}`}
                  className={styles.centerImage}
                />
                <div className={styles.centerInfo}>
                  <h3 className={styles.centerState}>{center.state}</h3>
                  <p className={styles.centerCity}>{center.city}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CentersPage;

export const CenterDetailPage = () => {
  const { centerUrl } = useParams();

  // Finding the center based on the URL parameter
  const center = centersData.find((center) => center.url === centerUrl);

  // If the center is found, render its component, otherwise show a fallback message
  return (
    <section className={styles.centerDetailContainer}>
      {center ? (
        center.component ? (
          center.component
        ) : (
          <h2 className={styles.centerDetailTitle}>
            Center details are not available
          </h2>
        )
      ) : (
        <h2 className={styles.centerDetailTitle}>Center not found</h2>
      )}
    </section>
  );
};
