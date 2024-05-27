import React from "react";
import profile from "./profile.png";

function Profile2() {
    return (
        <div className="relative h-100 w-100">
            <svg
                id="sw-js-blob-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="inset-0 w-[15rem] lg:w-[20rem] z-[-10] h-[15rem] lg:h-[20rem]  "
            >
                {" "}
                <defs>
                    {" "}
                    <linearGradient id="sw-gradient1" x1="0" x2="1" y1="1" y2="0">
                        {" "}
                        <stop
                            id="stop1"
                            stop-color="rgba(8, 27, 41, 1)"
                            offset="0%"
                        ></stop>{" "}
                        <stop
                            id="stop2"
                            stop-color="rgba(8, 27, 41, 1)"
                            offset="100%"
                        ></stop>{" "}
                    </linearGradient>{" "}
                </defs>{" "}
                <mask id="mask2" mask-type="alpha">
                    <path
                        fill="url(#sw-gradient1)"
                        d="M30.1,-30.7C37.8,-22.4,42,-11.2,41.5,-0.6C40.9,10.1,35.6,20.2,27.9,27.6C20.2,35,10.1,39.6,0.1,39.5C-9.9,39.4,-19.7,34.5,-27.2,27.1C-34.7,19.7,-39.8,9.9,-40.7,-0.8C-41.5,-11.5,-38,-23,-30.5,-31.3C-23,-39.6,-11.5,-44.8,-0.1,-44.7C11.2,-44.5,22.4,-39.1,30.1,-30.7Z"
                        width="100%"
                        height="100%"
                        transform="translate(50 50)"
                        stroke-width="0"
                        style={{ transition: "all 0.3s ease 0s" }}
                        stroke="url(#sw-gradient1)"
                    ></path>{" "}
                </mask>
                <g mask="url(#mask2)">
                    <path
                        fill="url(#sw-gradient1)"
                        d="M30.1,-30.7C37.8,-22.4,42,-11.2,41.5,-0.6C40.9,10.1,35.6,20.2,27.9,27.6C20.2,35,10.1,39.6,0.1,39.5C-9.9,39.4,-19.7,34.5,-27.2,27.1C-34.7,19.7,-39.8,9.9,-40.7,-0.8C-41.5,-11.5,-38,-23,-30.5,-31.3C-23,-39.6,-11.5,-44.8,-0.1,-44.7C11.2,-44.5,22.4,-39.1,30.1,-30.7Z"
                        width="100%"
                        height="100%"
                        transform="translate(50 50)"
                        stroke-width="0"
                        style={{ transition: "all 0.3s ease 0s" }}
                        stroke="url(#sw-gradient1)"
                    ></path>{" "}

                    <image
                        href={profile}
                        alt="Profile"
                        className="w-24 h-24"
                        x={52}
                        y={68}
                        style={{ transform: "translate(-50%, -50%)" }}
                    />
                </g>
                <svg height="99" width="100" xmlns="http://www.w3.org/2000/svg">
                    <circle r="43" cx="50" cy="46" stroke-width="2" stroke="#00e6e6" fill="none" />
                </svg>


            </svg>

        </div>
    );
}

export default Profile2;
