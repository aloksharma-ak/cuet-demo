import React from "react";
import { BoxCard } from "../../CuetFranchisee/FranchiseeIntro/FranchiseeIntro";
import b1 from "../../../assets/excellence.png";
import b2 from "../../../assets/system-integration.png";
import b3 from "../../../assets/light-bulb.png";
import b4 from "../../../assets/inclusive.png";

const OurFocus = () => {
  const promoCards = [
    {
      img: b1,
      title: "Integrity:",
      desc: `"We believe in honestly and transparency in everything we do."`,
    },
    {
      img: b2,
      title: "Excellence:",
      desc: `"Our teaching method and materials reflect our commitment to excellence."`,
    },
    {
      img: b3,
      title: "Innovation:",
      desc: `"We embrace modern technology to make learning more effective and engaging."`,
    },
    {
      img: b4,
      title: "Inclusively",
      desc: `"We welcome students and partners from diverse backgrounds."`,
    },
  ];

  const heading1 = ["What Drives Us Every Day"];
  return (
    <section style={{ width: "100%", padding: "0 0 3rem" }}>
      <BoxCard promoCards={promoCards} heading1={heading1} />
    </section>
  );
};

export default OurFocus;
