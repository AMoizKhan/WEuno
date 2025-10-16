"use client";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="bg-black text-white w-full fixed top-0 left-0 z-50"
            style={{
                height: "auto",
                padding: "10pt 0",
            }}
        >
            {/* Top Section */}
            <div className="flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <img
                    src="../Image/groveslogo.png"
                    alt="Logo"
                    className="h-10 w-auto object-contain"
                />

                {/* Hamburger (mobile only) */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Right Side (Desktop view) */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <img src="/Image/tiktok.png" alt="TikTok" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/insta.png" alt="Instagram" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/x.png" alt="X" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/snapchat.png" alt="Snapchat" className="h-6 w-6 cursor-pointer" />
                    </div>

                    {/* Login Button */}
                    <button className="w-[120pt] h-[40pt] rounded-[12pt] bg-[rgba(173,135,73,1)] font-semibold text-white">
                        Login
                    </button>

                    {/* Language Dropdown */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <span>▼</span>
                        <img src="/Image/flag.png" alt="English Flag" className="h-5 w-9" />
                        <span>English</span>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown (when menu is open) */}
            {menuOpen && (
                <div className="flex flex-col items-center text-center border-t border-white md:hidden">
                    {/* Each item separated with white line */}
                    <div className="w-full border-b border-white py-3 flex justify-center gap-4">
                        <img src="/Image/tiktok.png" alt="TikTok" className="h-6 w-6" />
                        <img src="/Image/insta.png" alt="Instagram" className="h-6 w-6" />
                        <img src="/Image/x.png" alt="X" className="h-6 w-6" />
                        <img src="/Image/snapchat.png" alt="Snapchat" className="h-6 w-6" />
                    </div>

                    <div className="w-full border-b border-white py-3">
                        <div className="flex items-center justify-center gap-2">
                            <span>▼</span>
                            <img src="/Image/flag.png" alt="English Flag" className="h-5 w-9" />
                            <span>English</span>
                        </div>
                    </div>

                    <div className="w-full border-b border-white py-3">
                        <div className="flex flex-col items-center gap-3 text-sm">
                            <span>DINE WITH US</span>
                            <span>PLACE YOUR VISIT</span>
                            <span>EVENTS</span>
                            <span>VIEW GROVES MAP</span>
                            <span>OUR STORY</span>
                            <span>CONTACT US</span>
                        </div>
                    </div>

                    {/* Login at bottom */}
                    <div className="w-full py-4 flex justify-center">
                        <button className="w-[140pt] h-[42pt] rounded-[12pt] bg-[rgba(173,135,73,1)] font-semibold text-white">
                            Login
                        </button>
                    </div>
                </div>
            )}

            {/* Bottom Menu (Desktop only) */}
            <div className="hidden md:block border-t border-b border-white py-3 text-center mt-2">
                <div className="flex flex-wrap justify-center gap-6 text-sm">
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
