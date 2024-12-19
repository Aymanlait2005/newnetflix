import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>
      <div className="navbar__menu">
        <a href="/">Home</a>
        <a href="/tv-shows">TV Shows</a>
        <a href="/movies">Movies</a>
        <a href="/new-popular">New & Popular</a>
        <a href="/my-list">My List</a>
      </div>
      <div className="navbar__profile">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
