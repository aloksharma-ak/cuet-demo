import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./Blogs.module.css";
import Blog from "./BlogComponent/Blog";
import blog1 from "../../../assets/blogIMG1.jpg";
import blog2 from "../../../assets/blogIMG2.png";
import blog3 from "../../../assets/UniversityDemoImg.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useSpring, animated, useSprings } from "@react-spring/web";
import { useNavigate } from "react-router-dom";

const blogData = [
  {
    img: blog1,
    title: "The Power of Lifelong",
    desc: "In a rapidly changing world, lifelong learning is essential for personal.",
  },
  {
    img: blog2,
    title: "The Power of Lifelong",
    desc: "In a rapidly changing world, lifelong learning is essential for personal.",
  },
  {
    img: blog3,
    title: "The Power of Lifelong",
    desc: "In a rapidly changing world, lifelong learning is essential for personal.",
  },
  {
    img: blog1,
    title: "The Power of Lifelong",
    desc: "In a rapidly changing world, lifelong learning is essential for personal.",
  },
  {
    img: blog3,
    title: "The Power of Lifelong",
    desc: "In a rapidly changing world, lifelong learning is essential for personal.",
  },
  {
    img: blog1,
    title: "The Power of Lifelong",
    desc: "In a rapidly changing world, lifelong learning is essential for personal.",
  },
];

const LatestNews = () => {
  const animationSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/blogs#LatestBlogs"); // Navigate to Blogs page with fragment
  };

  return (
    <animated.div style={animationSpring} className={styles.componentContainer}>
      <div className={styles.componentContent}>
        <h1 className={styles.componentContentHeading}>
          Latest News: <span>CUET 2025</span>
        </h1>
        <div className={styles.componentContentDesc}>
          Stay updated with CUET 2025’s latest news, public notices, and
          circulars. Our main page provides essential updates, while dedicated
          sub-pages offer detailed announcements and circulars, ensuring you
          never miss important CUET information. Prepare with confidence!
        </div>
        <div className={styles.componentContentDesc}>
          Start your journey with Cuetinfoline today and unlock your potential!
        </div>
        <button
          className={styles.componentContentButton}
          onClick={handleNavigate}
        >
          Visit Now
        </button>
      </div>
      <div className={styles.componentContentBlogs}>
        <div className={styles.col}>
          <h1 className={styles.componentContentBlogHeading}>Public Notice</h1>
          <div className={styles.componentContentBlog}>
            <Swiper
              modules={[Pagination, Autoplay]}
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              slidesPerView={3}
              slidesPerGroup={1}
              // spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              loop={blogData.length > 1}
              grabCursor={true}
              className={styles.mySwiper}
              style={{
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-color": "#fff",
              }}
            >
              {blogData.map((blog, index) => (
                <SwiperSlide key={index}>
                  <Blog img={blog.img} title={blog.title} desc={blog.desc} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={styles.col}>
          <h1 className={styles.componentContentBlogHeading}>Circulars</h1>
          <div className={styles.componentContentBlog}>
            <Swiper
              modules={[Pagination, Autoplay]}
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              slidesPerView={3}
              slidesPerGroup={1}
              // spaceBetween={20}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              loop={blogData.length > 1}
              grabCursor={true}
              className={styles.mySwiper}
              style={{
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-color": "#fff",
              }}
            >
              {blogData.map((blog, index) => (
                <SwiperSlide key={index}>
                  <Blog img={blog.img} title={blog.title} desc={blog.desc} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

const Notification = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/blogs#Notifications"); // Navigate to Blogs page with fragment
  };
  return (
    <div className={styles.componentContainer}>
      <div className={styles.componentContent}>
        <h1 className={styles.componentContentHeading}>
          Notification: <span>Latest Updates</span>
        </h1>
        <div className={styles.componentContentDesc}>
          Stay updated with the latest CUET 2025 notification! Access real-time
          announcements, important dates, eligibility details, and updates on
          the CUET 2025 application process. Our page provides all essential
          information to keep you prepared for your CUET journey
        </div>
        <button className={styles.componentContentButton} onClick={handleNavigate}>Visit Now</button>
      </div>
      <div className={styles.componentContentBlogs}>
        <div className={styles.col}>
          <h1 className={styles.componentContentBlogHeading}>Latest Updates</h1>
          <div className={styles.componentContentBlog}>
            <Swiper
              modules={[Pagination, Autoplay]}
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              slidesPerView={3}
              slidesPerGroup={1}
              // spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              loop={blogData.length > 1}
              grabCursor={true}
              className={styles.mySwiper}
              style={{
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-color": "#fff",
              }}
            >
              {blogData.map((blog, index) => (
                <SwiperSlide key={index}>
                  <Blog img={blog.img} title={blog.title} desc={blog.desc} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={styles.col}>
          <h1 className={styles.componentContentBlogHeading}>Announce</h1>
          <div className={styles.componentContentBlog}>
            <Swiper
              modules={[Pagination, Autoplay]}
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              slidesPerView={3}
              slidesPerGroup={1}
              // spaceBetween={20}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              loop={blogData.length > 1}
              grabCursor={true}
              className={styles.mySwiper}
              style={{
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-color": "#fff",
              }}
            >
              {blogData.map((blog, index) => (
                <SwiperSlide key={index}>
                  <Blog img={blog.img} title={blog.title} desc={blog.desc} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const InformationBulletin = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/blogs#InformationBulletin"); // Navigate to Blogs page with fragment
  };
  return (
    <div className={styles.componentContainer}>
      <div className={styles.componentContent}>
        <h1 className={styles.componentContentHeading}>Information Bulletin</h1>
        <div className={styles.componentContentDesc}>
          Stay informed with the latest updates, guides, and resources on CUET
          and Board Exams. Our Information Bulletin page is your essential guide
          for exam patterns, preparation tips, important dates, and more to
          streamline your academic journey.
        </div>
        <button className={styles.componentContentButton} onClick={handleNavigate}>Visit Now</button>
      </div>
      <div className={styles.componentContentBlogs}>
        <div className={styles.col}>
          <h1 className={styles.componentContentBlogHeading}>CUET 2025</h1>
          <div className={styles.componentContentBlog}>
            <Swiper
              modules={[Pagination, Autoplay]}
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              slidesPerView={3}
              slidesPerGroup={1}
              // spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              loop={blogData.length > 1}
              grabCursor={true}
              className={styles.mySwiper}
              style={{
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-color": "#fff",
              }}
            >
              {blogData.map((blog, index) => (
                <SwiperSlide key={index}>
                  <Blog img={blog.img} title={blog.title} desc={blog.desc} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={styles.col}>
          <h1 className={styles.componentContentBlogHeading}>Board Exams</h1>
          <div className={styles.componentContentBlog}>
            <Swiper
              modules={[Pagination, Autoplay]}
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              slidesPerView={3}
              slidesPerGroup={1}
              // spaceBetween={20}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              loop={blogData.length > 1}
              grabCursor={true}
              className={styles.mySwiper}
              style={{
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-color": "#fff",
              }}
            >
              {blogData.map((blog, index) => (
                <SwiperSlide key={index}>
                  <Blog img={blog.img} title={blog.title} desc={blog.desc} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudyAbroad = () => (
  <div className={styles.componentContainer}>
    <div className={styles.componentContent}>
      <h1 className={styles.componentContentHeading}>
        Study Abroad with <span>CUETPlus</span>
      </h1>

      <div className={styles.componentContentDesc}>
        Join our community to gain valuable insights, enhance your academic
        profile, and increase your chances of admission. Your dream of studying
        abroad is within reach with CUETPlus!
      </div>
      <button className={styles.componentContentButton}>Visit Now</button>
    </div>
    <div className={styles.componentContentBlogs}>
      <div className={styles.col}>
        <h1 className={styles.componentContentBlogHeading}>Study Abroad</h1>
        <div className={styles.componentContentBlog}>
          <Swiper
            modules={[Pagination, Autoplay]}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            slidesPerView={3}
            slidesPerGroup={1}
            // spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={blogData.length > 1}
            grabCursor={true}
            className={styles.mySwiper}
            style={{
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-color": "#fff",
            }}
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <Blog img={blog.img} title={blog.title} desc={blog.desc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.col}>
        <h1 className={styles.componentContentBlogHeading}>Latest News</h1>
        <div className={styles.componentContentBlog}>
          <Swiper
            modules={[Pagination, Autoplay]}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            slidesPerView={3}
            slidesPerGroup={1}
            // spaceBetween={20}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            loop={blogData.length > 1}
            grabCursor={true}
            className={styles.mySwiper}
            style={{
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-color": "#fff",
            }}
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <Blog img={blog.img} title={blog.title} desc={blog.desc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
);

const SalahPlus = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/blogs#SalahPlus"); // Navigate to Blogs page with fragment
  };
  return(
  <div className={styles.componentContainer}>
    <div className={styles.componentContent}>
      <h1 className={styles.componentContentHeading}>
        SalahPlus: <span>Expert Advice</span>
      </h1>
      <div className={styles.componentContentDesc}>
        SalahPlus offers expert tips and strategies for CUET and board exam
        preparation, helping students master effective study techniques, manage
        time, and enhance performance. From seasoned guidance to actionable
        advice, SalahPlus is every student's go-to resource for academic
        success."
      </div>
      <button className={styles.componentContentButton} onClick={handleNavigate}>Visit Now</button>
    </div>
    <div className={styles.componentContentBlogs}>
      <div className={styles.col}>
        <h1 className={styles.componentContentBlogHeading}>Study</h1>
        <div className={styles.componentContentBlog}>
          <Swiper
            modules={[Pagination, Autoplay]}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            slidesPerView={3}
            slidesPerGroup={1}
            // spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={blogData.length > 1}
            grabCursor={true}
            className={styles.mySwiper}
            style={{
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-color": "#fff",
            }}
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <Blog img={blog.img} title={blog.title} desc={blog.desc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.col}>
        <h1 className={styles.componentContentBlogHeading}>Exams</h1>
        <div className={styles.componentContentBlog}>
          <Swiper
            modules={[Pagination, Autoplay]}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            slidesPerView={3}
            slidesPerGroup={1}
            // spaceBetween={20}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            loop={blogData.length > 1}
            grabCursor={true}
            className={styles.mySwiper}
            style={{
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-color": "#fff",
            }}
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <Blog img={blog.img} title={blog.title} desc={blog.desc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
)};

function Blogs() {
  const menuItemsData = [
    "Latest News",
    "Notification",
    "Information Bulletin",
    "SalahPlus",
    "Study abroad",
  ];

  const [selectedItem, setSelectedItem] = useState("Latest News");

  const getSelectedComponent = () => {
    switch (selectedItem) {
      case "Latest News":
        return <LatestNews />;
      case "Notification":
        return <Notification />;
      case "Information Bulletin":
        return <InformationBulletin />;
      case "SalahPlus":
        return <SalahPlus />;
      case "Study abroad":
        return <StudyAbroad />;
      default:
        return <p>No content available</p>;
    }
  };

  // Staggered animation for menu items
  const springs = useSprings(
    menuItemsData.length,
    menuItemsData.map((_, index) => ({
      opacity: 1,
      transform: "translateY(0)",
      from: { opacity: 0, transform: "translateY(-20px)" },
      config: { tension: 250, friction: 20 },
      delay: index * 100,
    }))
  );

  return (
    <div className={styles.menuDrop}>
      <div className={styles.menuDropContainer}>
        <div className={styles.menuDropHeader}>
          {springs.map((style, index) => (
            <animated.h2
              style={style}
              key={index}
              className={`${styles.menuItem} ${
                index % 2 === 0 ? styles.bgDarkGray : styles.bgLightGray
              } ${
                selectedItem === menuItemsData[index] ? styles.selected : ""
              }`}
              onClick={() => setSelectedItem(menuItemsData[index])}
              onMouseEnter={() => setSelectedItem(menuItemsData[index])}
            >
              {menuItemsData[index]} <IoIosArrowForward />
            </animated.h2>
          ))}
        </div>
        <div className={styles.menuDropContent}>
          {getSelectedComponent() ? (
            getSelectedComponent()
          ) : (
            <p>No content {selectedItem}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
