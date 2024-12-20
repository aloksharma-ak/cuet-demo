import { useState } from "react";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import "./MobileSidebar.css";
import logoMob from "../../../assets/CUETPlus_logo_mob.png";
import { IoClose } from "react-icons/io5";

export default function MobileSidebar({ className, handleToggle }) {
  const [openIndex, setOpenIndex] = useState(null); // Track the open item index


  // Toggle handler to open/close a parent item
  const handleItemToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // If already open, close it; otherwise open it
  };

  return (
    <>
      <aside className="MobileSidebar-sidebar-btn">
        <img src={logoMob} alt="brand-img" className="logoMob" />
        <IoClose onClick={handleToggle} />
        {/* Close the sidebar using handleToggle */}
      </aside>
      <div className={`MobileSidebar-sidebar ${className}`}>
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            isOpen={openIndex === index} // Determine if this parent item is open
            onToggle={() => handleItemToggle(index)} // Toggle parent item
          />
        ))}
      </div>
    </>
  );
}
