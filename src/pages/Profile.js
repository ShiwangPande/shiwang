import React from "react";
import profile from "./profile.png";
function Profile() {
    return (
        <div>
            {" "}
            <div className=" relative top-3  h-100 w-100">

                <svg
                    id="sw-js-blob-svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inset-0 lg:w-[36rem] z-[-10] lg:h-[36rem] w-[25rem] h-[25rem] "
                >
                    {" "}
                    <defs>
                        {" "}
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            {" "}
                            <stop
                                id="stop1"
                                stop-color="#033333"
                                offset="0%"
                            ></stop>{" "}
                            <stop
                                id="stop2"
                                stop-color="#00e6e6"
                                offset="100%"
                            ></stop>{" "}
                        </linearGradient>{" "}
                    </defs>{" "}
                    <mask id="mask1" mask-type="alpha">
                        <path
                            fill="url(#sw-gradient)"
                            d="M33.2,-18.2C39.7,-7.8,39.5,7.4,32.8,19.1C26.2,30.8,13.1,38.9,0.8,38.4C-11.5,38,-22.9,28.9,-28.8,17.7C-34.6,6.5,-34.8,-6.9,-29.1,-16.8C-23.4,-26.8,-11.7,-33.3,0.8,-33.7C13.3,-34.2,26.6,-28.6,33.2,-18.2Z"
                            width="100%"
                            height="100%"
                            transform="translate(50 50)"
                            stroke-width="0"
                            style={{ transition: "all 0.3s ease" }}
                        ></path>
                    </mask>
                    <g mask="url(#mask1)">
                        <path
                            fill="url(#sw-gradient)"
                            d="M33.2,-18.2C39.7,-7.8,39.5,7.4,32.8,19.1C26.2,30.8,13.1,38.9,0.8,38.4C-11.5,38,-22.9,28.9,-28.8,17.7C-34.6,6.5,-34.8,-6.9,-29.1,-16.8C-23.4,-26.8,-11.7,-33.3,0.8,-33.7C13.3,-34.2,26.6,-28.6,33.2,-18.2Z"
                            width="100%"
                            height="100%"
                            transform="translate(50 50)"
                            stroke-width="0"
                            style={{ transition: "all 0.3s ease" }}
                        />
                        <image
                            href={profile}
                            alt="Profile"
                            className="w-20 h-16"
                            x={60}
                            y={80}
                            style={{ transform: "translate(-50%, -50%)" }}
                        />
                        {" "}
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default Profile;
