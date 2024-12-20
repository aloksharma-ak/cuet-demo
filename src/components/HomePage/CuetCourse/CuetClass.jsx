import React from 'react'
import CardItem from './CardItem';
import course_cuet_img_1 from '../../../assets/course_cuet_img_1.avif'
import course_cuet_img_2 from '../../../assets/course_cuet_img_2.avif'
import course_cuet_img_3 from '../../../assets/course_cuet_img_3.avif'

const CuetClass = () => {
    const cuetData = [
        {
          img: course_cuet_img_1,
          title: "Boards + CUET 2025 Commerce | English and General Test",
          desc: 'Comprehensive Test Series for aspirants who are targeting not just CUET but ohter UG exams.',
          price: '₹7,999/-',
          fees: 'Base Fees: ₹6,999 GST: 18% (₹1,199)',
          off: '40%'
        },
        {
          img: course_cuet_img_2,
          title: "Boards + CUET 2025 Humanities",
          desc: 'Comprehensive Test Series for aspirants who are targeting not just CUET but ohter UG exams.',
          price: '₹7,999/-',
          fees: 'Base Fees: ₹6,999 GST: 18% (₹1,199)',
          off: '60%'
        },
        {
          img: course_cuet_img_3,
          title: "CUET 2025 - GENERAL TEST",
          desc: 'Comprehensive Test Series for aspirants who are targeting not just CUET but ohter UG exams.',
          price: '₹7,999/-',
          fees: 'Base Fees: ₹6,999 GST: 18% (₹1,199)',
          off: '30%'
        },
        {
          img: course_cuet_img_1,
          title: "CUET 2026 Boards + Commerce",
          desc: 'Comprehensive Test Series for aspirants who are targeting not just CUET but ohter UG exams.',
          price: '₹7,999/-',
          fees: 'Base Fees: ₹6,999 GST: 18% (₹1,199)',
          off: '60%'
        },
        {
          img: course_cuet_img_2,
          title: "CUET UG Self-Paced Recorded Course",
          desc: 'Comprehensive Test Series for aspirants who are targeting not just CUET but ohter UG exams.',
          price: '₹7,999/-',
          fees: 'Base Fees: ₹6,999 GST: 18% (₹1,199)',
          off: '50%'
        },
        {
          img: course_cuet_img_3,
          title: "IPMAT CUET FULL COURSE(2025)",
          desc: 'Comprehensive Test Series for aspirants who are targeting not just CUET but ohter UG exams.',
          price: '₹7,999/-',
          fees: 'Base Fees: ₹6,999 GST: 18% (₹1,199)',
          off: '60%'
        },
      ];
    
      return (
        <div className="course-cuet-container">
          <div className="card-div">
            <CardItem cuetData={cuetData} />
          </div>
        </div>
      );
}

export default CuetClass