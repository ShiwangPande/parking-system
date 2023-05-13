import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
function Booking() {
    return (
        <div className='booking_bg w-screen '>
            <Navbar />
            <h1>Booking</h1>
            <div className="flex justify-evenly mt-10 lg:h-[91vh] md:h-full h-[100%] flex-wrap">
                <div className='shadow-lg shadow-black/20 '>
                    <form className="w-full max-w-lg lg:m-10 bg-black/20 backdrop-blur-[1px] " >
                        <div className="flex flex-wrap justify-between mx-3 mb-6 m-10 lg:m-10 md:mx-[20px] md:m-[20px]" >
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name" type="text" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"

                                    id="grid-last-name" type="text" />

                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" for="number">
                                    Car Number
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                                        focus:bg-white focus:border-gray-500" id="number" type="text" placeholder="XX-XX-XX-XXXX" />
                            </div>

                            <br />

                            {/* date and time */}
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" for="date">
                                    Date
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3
                                        leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center" id="date" type="date" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" for="time">
                                    Time
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4
                                            leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center" id="time" type="time" />
                            </div>

                            <br />

                            {/* locality/area */}
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" for="locality">
                                    Locality/Area
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4
                                            leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="locality" type="text" placeholder="Enter Locality/Area" />
                            </div>
                            {/* button */}

                        </div>
                        <div className="w-full px-3">

                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white flex m-auto font-bold py-2 px-4 rounded-full">
                                <a href="/bookconfirm"> Book Now   </a>
                            </button>

                        </div>
                    </form>
                </div>
                <div>
                    {/* PRicing List */}
                    <div className="bg-black/20 lg:w-[28vw]  shadow overflow-hidden backdrop-blur-[1px] sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-2xl text-center leading-6 font-medium text-white ">
                                Pricing
                            </h3>
                            <p className="mt-1 max-w-2xl text-xl text-white">
                                Parking Charges
                            </p>
                            <div className="mt-5 border-t border-gray-200">
                                <dl className="divide-y divide-gray-200">
                                    <div className="py-3 flex justify-between text-m font-medium">
                                        <dt className="text-white">First Hour</dt>
                                        <dd className="text-white">Rs. 50</dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-m font-medium">
                                        <dt className="text-white">1 day</dt>
                                        <dd className="text-white">Rs. 100</dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-m font-medium">
                                        <dt className="text-white">1 week</dt>
                                        <dd className="text-white">Rs. 500</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* pricing */}




        </div>
    )
}

export default Booking