import React, { useRef, useState } from "react";
import "./Navbar.css"; // Import your CSS file
import { IoMdMenu } from "react-icons/io";
import { MdCancelPresentation } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const sideMenuRef = useRef(null);

  const [hoveredItem, setHoveredItem] = useState("");

  const toggleMenu = () => {
    sideMenuRef.current.classList.toggle("show");
  };

  const handleMouseEnter = (e) => {
    const itemName = e.target.innerHTML; // Extract the content of the hovered item
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem("");
  };

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="navbar__brand">Brand</div>
          <div className="navbar__side-menu" ref={sideMenuRef}>
            <div className="" onClick={toggleMenu}>
              <MdCancelPresentation size={30} />
            </div>
            <ul>
              <motion.li
                initial={{ y: 50, opacity: 0 }} // Initial animation properties
                whileInView={{ y: 0, opacity: 1 }} // Animation properties when visible
                transition={{ duration: 0.5, delay: 0.1 }} // Animation duration and delay
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Contact
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Events
              </motion.li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="navbar__menu-icon" onClick={toggleMenu}>
        <IoMdMenu size={30} />
      </div>

      {/* Display hovered item in larger size */}

      <div className="hovered-item-background">
        <p>{hoveredItem}</p>
      </div>
    </>
  );
};

export default Navbar;
