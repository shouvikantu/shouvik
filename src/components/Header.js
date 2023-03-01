import { useState } from "react";
import shouvik from "../asset/shouvik.webp"

export default function Header() {
    const [navbar, setNavbar] = useState(false);
    

    return (
        <nav className="w-full bg-stone-800 shadow sticky top-0 z-30">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div className="flex items-center justify-between py-3 md:block">
                <div className="flex items-center ">

                <img className=" rounded-full border border-gray-400 mr-2" height={40} width={40} src={shouvik} alt="shouvik headshot logo" />
                <a href="./">
                    <h2 className="text-2xl text-gray-200">Shouvik Ahmed Antu</h2>
                </a>
                </div>
                <div className="md:hidden">
                    <button
                        className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-200"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-gray-200 hover:text-7395AE">
                        <a href="./">Home</a>
                    </li>
                    <li  className="text-gray-200 hover:text-7395AE">
                        <a href="./#about">About</a>
                    </li>
                    <li className="text-gray-200 hover:text-7395AE">
                        <a href="./#exp">Experience</a>
                    </li>
                    <li className="text-gray-200 hover:text-7395AE">
                        <a href="./#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>

    );
}

