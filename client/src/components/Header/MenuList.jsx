import React, { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Result from "./MenuListContent/Result";
import KnowUs from "./MenuListContent/KnowUs";
import Blogs from "./MenuListContent/Blogs";
import OfflineCenters from "./MenuListContent/OfflineCenters";
import Courses from "./MenuListContent/Courses";
import FreeResources from "./MenuListContent/FreeResources";
import styles from "./MenuList.module.css"; // Importing the CSS Module
import { NavLink, useLocation } from "react-router-dom";

function MenuList() {
  const [activeItem, setActiveItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isActiveItemHovered, setIsActiveItemHovered] = useState(false);

  const location = useLocation(); // Detect the current route

  const menuItems = [
    { label: "Courses", route: "/our-courses", component: <Courses /> },
    { label: "Results", route: "/result", component: <Result /> },
    { label: "Resources", route: "/resources", component: <FreeResources /> },
    { label: "Know Us", route: "/about-company", component: <KnowUs /> },
    { label: "Centers", route: "/centers", component: <OfflineCenters /> },
    { label: "Blog", route: "/blogs", component: <Blogs /> },
  ];

  // Reset active state when route changes
  useEffect(() => {
    setActiveItem(null); // Clear active item
    setIsHovered(false); // Ensure hover state is also reset
    setIsActiveItemHovered(false);
  }, [location.pathname]); // Trigger when route changes

  const handleMouseEnter = (item) => {
    setActiveItem(item);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveItem(null);
    setIsActiveItemHovered(false);
  };

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };


  return (
    <>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.route}
            key={index}
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleItemClick(item)}
          >
            <li className={styles.navLink}>
              {item.label}{" "}
              <span className={styles.dropdownIcon}>
                <RiArrowDownSLine />
              </span>
            </li>
          </NavLink>
        ))}
      </ul>

      {activeItem && isHovered && (
        <div
          className={styles.activeItemContainer}
          onMouseEnter={() => {
            setIsActiveItemHovered(true);
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsActiveItemHovered(false);
            handleMouseLeave();
          }}
        >
          {activeItem.component}
        </div>
      )}
    </>
  );
}

export default MenuList;
