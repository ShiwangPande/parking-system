import React, { useState } from 'react';
import Parkingimg from '../assets/img/parking.jpg';
import { useHistory } from "react-router-dom";
import Navbar from '../components/Navbar'
import "./home.css"
import { Link } from 'react-router-dom';
function Home() {

    return (
        <div >
            <Navbar />
            <div className='loginScreen'>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-5xl text-white font-bold">Parking Made Easy</h1>
                    <p className="text-2xl text-white font-bold">Book your parking spot now</p>

                    <button className="bg-white text-black px-10 py-2 rounded-full mt-5"> <a href="/booking"> Book Now </a></button>
                </div>

                <div className='home_bg'></div>

            </div>
        </div>
    )
}

export default Home