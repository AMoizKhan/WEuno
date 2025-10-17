"use client";
import { useState } from "react";
import GradientButton from "./Button";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="text-white w-full transition-all duration-500 ease-in-out"
            style={{
                fontFamily: 'Playfair Display, serif',
                background: menuOpen
                    ? "linear-gradient(97deg, rgba(40,54,6,1), rgba(15,21,0,1))"
                    : "transparent",
                transition: "background 0.5s ease-in-out"
            }}
        >
            {/* Top Section */}
            <div className="flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <img
                    src="../Image/groveslogo.png"
                    alt="Logo"
                    className="h-10 w-auto object-contain md:ml-29"
                />

                {/* Hamburger Icon with Smooth Rotation */}
                <button
                    className="md:hidden text-white text-3xl transition-all duration-500 ease-in-out transform"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}
                >
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <img
                            src={menuOpen ? "/Image/close.png" : "/Image/bar.png"}
                            alt={menuOpen ? "Close Menu" : "Open Menu"}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                    </button>
                </button>

                {/* Desktop Right Side */}
                <div className="hidden md:flex items-center gap-7 mr-47">
                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                        <img src="/Image/tiktok.png" alt="TikTok" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/insta.png" alt="Instagram" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/x.png" alt="X" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/snapchat.png" alt="Snapchat" className="h-6 w-6 cursor-pointer" />
                    </div>

                    {/* Login Button */}
                    <GradientButton title="Log in" className="w-[120pt] h-[40pt] text-white rounded-[12pt] text-lg" />

                    {/* Language */}
                    <div className="flex items-center gap-3 cursor-pointer">
                        <span>▼</span>
                        <img src="/Image/flag.png" alt="English Flag" className="h-5 w-9" />
                        <span>English</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col items-start text-left md:hidden px-6 pb-4">
                    {/* Menu Items */}
                    {[
                        "DINE WITH US",
                        "PLACE YOUR VISIT",
                        "EVENTS",
                        "VIEW GROVES MAP",
                        "OUR STORY",
                        "CONTACT US",
                    ].map((item, i) => (
                        <div key={i} className="w-full border-y border-white py-3">
                            <span className="block">{item}</span>
                        </div>
                    ))}

                    {/* Language and Login */}
                    <div className="w-full py-4 flex flex-col items-start gap-4 mt-4">
                        <div className="flex items-center gap-3">
                            <img src="/Image/flag.png" alt="English Flag" className="h-5 w-9" />
                            <span className="">English</span>
                        </div>

                        <GradientButton title="Login" className="w-[140pt] h-[42pt] text-white rounded-[12pt] text-lg" />
                    </div>

                    {/* Social Icons */}
                    <div className="w-full py-4 mt-2 flex justify-start gap-5">
                        <img src="/Image/tiktok.png" alt="TikTok" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/insta.png" alt="Instagram" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/x.png" alt="X" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/snapchat.png" alt="Snapchat" className="h-6 w-6 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Desktop Bottom Menu */}
            <div className="hidden md:block border-t border-b border-white py-3 mt-2">
                <div className="flex justify-start gap-33 text-sm ml-36">
                    <span>DINE WITH US</span>
                    <span>PLACE YOUR VISIT</span>
                    <span>EVENTS</span>
                    <span>VIEW GROVES MAP</span>
                    <span>OUR STORY</span>
                    <span>CONTACT US</span>
                </div>
            </div>
        </header>
    );
}