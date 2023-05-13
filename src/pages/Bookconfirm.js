import React from 'react'
import Navbar from '../components/Navbar'
function Bookconfirm() {
    return (
        <div className='booked'>
            <Navbar />
            <div className="flex justify-center bg-white/30 items-center h-screen backdrop-blur-[2px] ">
                <div className=" p-10 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center">Booking Confirmed!</h1>
                    <p className="text-xl text-center">Your booking has been confirmed. Please check your email for further details.</p>
                    <div className="flex justify-center items-center mt-5">
                        <button className="bg-blue-500 text-white px-10 py-2 rounded-full"> <a href="/"> Home </a></button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Bookconfirm