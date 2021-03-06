import React from "react";
import '../styles/styles.css';

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <img src={`${process.env.PUBLIC_URL}/images/globe.png`} alt="icon of a globe" className='navbar__icon' />
            <h1>My travel Journal</h1>
        </nav>
    )
}