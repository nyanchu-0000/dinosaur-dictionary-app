"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
    const [isHomePage, setIsHomePage] = useState(false);

    useEffect(() => {
        setIsHomePage(window.location.pathname === "/");
    }, []);

    const handleDinoGuideClick = (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 710,
            behavior: "smooth",
        });
    };

    return (
        <footer className="w-full bg-neutral-900 bg-opacity-50 text-slate-400 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-8">
                <a
                    href="/"
                    className="hover:text-lime-600 transition-colors duration-300"
                >
                    ホーム
                </a>
                {isHomePage && (
                    <a
                        href="#"
                        onClick={handleDinoGuideClick}
                        className="hover:text-lime-600 transition-colors duration-300"
                    >
                        恐竜図鑑
                    </a>
                )}
            </div>

            <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
                &copy; 2025 DinoVerse. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
