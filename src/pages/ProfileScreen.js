import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../components/auth/userSlice";
import { auth } from "../firebase";
import "./ProfileScreen.css";
import Nav from "../components/Navbar";


function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen ">
            <Nav />
            <div className="profileScreen__body h-[100vh]">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info bg-black/20 backdrop-blur-[2px]">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>
                                Plans
                                <span className="profileScreen__planName">
                                    {" "}
                                    Giving you free service from Shiwang
                                </span>
                            </h3>
                            <h4>just follow him on:</h4>
                            <a target="_blank" href="https://www.instagram.com/__shiwang/">
                                <img
                                    class="icon"
                                    src="https://cdn.icon-icons.com/icons2/836/PNG/128/Instagram_icon-icons.com_66804.png" alt=""
                                />
                            </a>
                            <a target="_blank" href="https://twitter.com/Shiwang__Pandey">
                                <img
                                    class="icon"
                                    src="https://cdn.icon-icons.com/icons2/836/PNG/128/Twitter_icon-icons.com_66803.png" alt=""
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/shiwang-pandey-33a628221/" alt=""
                            >
                                <img
                                    class="icon"
                                    src="https://cdn.icon-icons.com/icons2/99/PNG/128/linkedin_socialnetwork_17441.png" alt=""
                                />
                            </a>
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;
