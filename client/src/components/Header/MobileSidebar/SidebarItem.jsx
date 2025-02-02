import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer motion

export default function SidebarItem({ item, isOpen, onToggle }) {
  const [openChildIndex, setOpenChildIndex] = useState(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handleChildToggle = (index) => {
    setOpenChildIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClick = () => {
    if (item.path) {
      navigate(item.path);
    } else {
      onToggle();
    }
  };

  // Framer Motion variants for smooth dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }, // Automatically adjusts the height
  };

  if (item.childrens) {
    return (
      <div className={isOpen ? "MobileSidebar-sidebar-item open" : "MobileSidebar-sidebar-item"}>
        <div className="MobileSidebar-sidebar-title" onClick={handleClick}>
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          {!isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </div>

        {/* Using motion.div to animate the child content */}
        <motion.div
          className="MobileSidebar-sidebar-content"
          ref={contentRef}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={dropdownVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {item.childrens.map((child, index) => (
            <div key={index} onClick={() => { 
              if (child.path) {
                navigate(child.path); // Navigate to child path
              }
              // Do not toggle parent open state on child click
            }}>
              <SidebarItem
                item={child}
                isOpen={openChildIndex === index}
                onToggle={() => handleChildToggle(index)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="MobileSidebar-sidebar-item MobileSidebar-plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
}
