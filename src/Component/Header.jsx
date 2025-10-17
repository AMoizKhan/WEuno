// "use client";
// import { useState } from "react";
// import GradientButton from "./Button";

// export default function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className="bg-transparent text-white w-full transition-all duration-500 ease-in-out">
//             {/* Top Section */}
//             <div className="flex justify-between items-center px-6 py-3">
//                 {/* Logo */}
//                 <img
//                     src="../Image/groveslogo.png"
//                     alt="Logo"
//                     className="h-10 w-auto object-contain ml-29"
//                 />

//                 {/* Hamburger Icon */}
//                 <button
//                     className="md:hidden text-white text-3xl transition-all duration-300"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                     {menuOpen ? "✖" : "☰"}
//                 </button>

//                 {/* Desktop Right Side */}
//                 <div className="hidden md:flex items-center gap-7 mr-47">
//                     {/* Social Icons */}
//                     <div className="flex items-center gap-6">
//                         <img src="/Image/tiktok.png" alt="TikTok" className="h-6 w-6 cursor-pointer" />
//                         <img src="/Image/insta.png" alt="Instagram" className="h-6 w-6 cursor-pointer" />
//                         <img src="/Image/x.png" alt="X" className="h-6 w-6 cursor-pointer" />
//                         <img src="/Image/snapchat.png" alt="Snapchat" className="h-6 w-6 cursor-pointer" />
//                     </div>

//                     {/* Login Button */}
//                     {/* <button className="w-[120pt] h-[40pt] rounded-[12pt] bg-[rgba(173,135,73,1)]  text-white">
//                         Log in
//                     </button> */}
//                     <GradientButton title="Log in" className="w-[120pt] h-[40pt]  text-white rounded-[12pt] text-lg" />

//                     {/* Language */}
//                     <div className="flex items-center gap-3 cursor-pointer ">
//                         <span>▼</span>
//                         <img src="/Image/flag.png" alt="English Flag" className="h-5 w-9" />
//                         <span>English</span>
//                     </div>
//                 </div>
//             </div>

//             {/* ✅ Mobile Menu (unchanged) */}
//             <div
//                 className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                     menuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
//                 }`}
//             >
//                 <div className="flex flex-col items-start text-left md:hidden px-6">
//                     {[
//                         "DINE WITH US",
//                         "PLACE YOUR VISIT",
//                         "EVENTS",
//                         "VIEW GROVES MAP",
//                         "OUR STORY",
//                         "CONTACT US",
//                     ].map((item, i) => (
//                         <div key={i} className="w-full border-y border-white py-3">
//                             <span className="block ">{item}</span>
//                         </div>
//                     ))}

//                     <div className="w-full py-4 flex flex-col items-start gap-2 mt-4">
//                         <img src="/Image/flag.png" alt="English Flag" className="h-5 w-9" />
//                         <span className="">English</span>
//                     </div>

//                     <div className="w-full py-4">
//                         <button className="w-[140pt] h-[42pt] rounded-[12pt] bg-[rgba(173,135,73,1)]  text-white">
//                             Login
//                         </button>
//                     </div>

//                     <div className="w-full py-4 mt-2 flex justify-center gap-5">
//                         <img src="/Image/tiktok.png" alt="TikTok" className="h-6 w-6 cursor-pointer" />
//                         <img src="/Image/insta.png" alt="Instagram" className="h-6 w-6 cursor-pointer" />
//                         <img src="/Image/x.png" alt="X" className="h-6 w-6 cursor-pointer" />
//                         <img src="/Image/snapchat.png" alt="Snapchat" className="h-6 w-6 cursor-pointer" />
//                     </div>
//                 </div>
//             </div>

//             {/* ✅ Desktop Bottom Menu in one line, aligned with logo */}
//             <div className="hidden md:block border-t border-b border-white py-3 mt-2">
//                 <div className="flex justify-start gap-33 text-sm  ml-36">
//                     <span>DINE WITH US</span>
//                     <span>PLACE YOUR VISIT</span>
//                     <span>EVENTS</span>
//                     <span>VIEW GROVES MAP</span>
//                     <span>OUR STORY</span>
//                     <span>CONTACT US</span>
//                 </div>
//             </div>
//         </header>
//     );
// }
"use client";
import { useState } from "react";
import GradientButton from "./Button";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-transparent text-white w-full transition-all duration-500 ease-in-out " style={{ fontFamily: 'Playfair Display, serif' }}>
            {/* Top Section */}
            <div className="flex justify-between items-center px-6 py-3">
                {/* Logo - ml-29 for desktop, normal for mobile */}
                <img
                    src="../Image/groveslogo.png"
                    alt="Logo"
                    className="h-10 w-auto object-contain md:ml-29"
                />

                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-white text-3xl transition-all duration-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✖" : "☰"}
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
                    <GradientButton title="Log in" className="w-[120pt] h-[40pt]  text-white rounded-[12pt] text-lg" />

                    {/* Language */}
                    <div className="flex items-center gap-3 cursor-pointer ">
                        <span>▼</span>
                        <img src="/Image/flag.png" alt="English Flag" className="h-5 w-9" />
                        <span>English</span>
                    </div>
                </div>
            </div>

            {/* ✅ Mobile Menu with social icons at bottom left */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    menuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col items-start text-left md:hidden px-6">
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
                            <span className="block ">{item}</span>
                        </div>
                    ))}

                    {/* Language and Login */}
                    <div className="w-full py-4 flex flex-col items-start gap-4 mt-4">
                        <div className="flex items-center gap-3">
                            <img src="/Image/flag.png" alt="English Flag" className="h-5 w-9" />
                            <span className="">English</span>
                        </div>
                        
                        <GradientButton title="Login" className="w-[140pt] h-[42pt]  text-white rounded-[12pt] text-lg" />
                    </div>

                    {/* Social Icons - At bottom left */}
                    <div className="w-full py-4 mt-2 flex justify-start gap-5">
                        <img src="/Image/tiktok.png" alt="TikTok" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/insta.png" alt="Instagram" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/x.png" alt="X" className="h-6 w-6 cursor-pointer" />
                        <img src="/Image/snapchat.png" alt="Snapchat" className="h-6 w-6 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* ✅ Desktop Bottom Menu in one line, aligned with logo */}
            <div className="hidden md:block border-t border-b border-white py-3 mt-2">
                <div className="flex justify-start gap-33 text-sm  ml-36">
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