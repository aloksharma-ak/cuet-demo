import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    if (contentRef.current) {
      const fullHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = isOpen ? `${fullHeight}px` : "0";
      contentRef.current.style.opacity = isOpen ? "1" : "0";
    }
  }, [isOpen, openChildIndex]);

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
        <div className="MobileSidebar-sidebar-content" ref={contentRef}>
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
        </div>
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
