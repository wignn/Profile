"use client";
import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

function ResponsiveNavbar() {
  const [showNav, setShowNav] = React.useState(false);

  const handleShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav={handleShowNav} />
      <MobileNavbar showNav={showNav} closeNav={handleCloseNav}/>
    </div>
  );
}

export default ResponsiveNavbar;
