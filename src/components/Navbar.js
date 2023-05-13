import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import ParkingImg from "../assets/img/parklogo.png";
function Navbar() {
    const [show, handleShow] = useState(false);
    const history = useNavigate();

    function toggleShow(event) {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleShow);
        return () => {
            window.removeEventListener("scroll", toggleShow);
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <a href="/">
                <img
                    className="nav__logo"
                    src={ParkingImg}
                    alt="Netflix Logo"
                /> </a>
            <a href="/profile">
                <img

                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                    alt="Netflix Logo"
                /></a>
        </div>
    );
}

export default Navbar;
