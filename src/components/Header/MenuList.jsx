import React, { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Result from "./MenuListContent/Result";
import KnowUs from "./MenuListContent/KnowUs";
import Blogs from "./MenuListContent/Blogs";
import OfflineCenters from "./MenuListContent/OfflineCenters";
import Courses from "./MenuListContent/Courses";
import FreeResources from "./MenuListContent/FreeResources";
import styles from "./MenuList.module.css"; // Importing the CSS Module
import { useLocation } from "react-router-dom";

function MenuList() {
  const [activeItem, setActiveItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation(); // Detect the current route

  const menuItems = [
    { label: "Courses", component: <Courses /> },
    { label: "Results", component: <Result /> },
    { label: "Resources", component: <FreeResources /> },
    { label: "Know Us", component: <KnowUs /> },
    { label: "Centers", component: <OfflineCenters /> },
    { label: "Blog", component: <Blogs /> },
  ];

  // Reset active state when route changes
  useEffect(() => {
    setActiveItem(null);  // Clear active item
    setIsHovered(false);   // Ensure hover state is also reset
  }, [location.pathname]); // Trigger when route changes

  const handleMouseEnter = (item) => {
    setActiveItem(item);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveItem(null);
  };

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  return (
    <>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={styles.menuItem}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleItemClick(item)}
          >
            <span className={`${styles.navLink} ${activeItem === item ? styles.active : ""}`}>
              {item.label} <RiArrowDownSLine className={styles.dropdownIcon} />
            </span>
          </li>
        ))}
      </ul>

      {activeItem && isHovered && (
        <div
          className={styles.activeItemContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          {activeItem.component}
        </div>
      )}
    </>
  );
}

export default MenuList;
