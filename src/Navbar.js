import React from "react";
import "./navbar.css"; // Import your CSS file

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">NGO Name</h1>
                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#programs">Programs</a>
                    </li>
                    <li>
                        <a href="#donate">Donate</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
