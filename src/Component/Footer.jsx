"use client";

export default function Footer() {
    return (
        <footer className="bg-transparent text-white py-8 sm:py-12 px-4 sm:px-8 font-[family-name:var(--font-playfair)]">
            <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16">

                {/* Top Section: Join Us + Download App */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-10">
                    {/* Left */}
                    <div className="text-left md:w-1/2">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6">
                            Join us for an <br /> unforgettable experience
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-start md:items-end md:w-1/2 w-full">
                        <p className="text-sm sm:text-base mb-3 tracking-wide font-semibold">
                            DOWNLOAD THE GROVES APP
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 w-full sm:w-auto">
                            <img src="/Image/ios.png" alt="App Store" className="w-[140px] sm:w-[160px] md:w-[180px] h-10 sm:h-12 object-contain" />
                            <img src="/Image/app.png" alt="Google Play" className="w-[140px] sm:w-[160px] md:w-[180px] h-10 sm:h-12 object-contain" />
                        </div>
                    </div>
                </div>

                {/* Middle Section: Top Location & Working Hours */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 md:gap-16">
                    {/* Location */}
                    <div className="lg:w-1/3">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">LOCATION</h3>
                        <p className="text-sm sm:text-base">
                            AL-Hizam Park <br /> Al-Semairi, Yanbu Al Bahr 46455 <br /> Riyadh Saudi Arabia
                        </p>
                    </div>

                    {/* Working Hours */}
                    <div className="lg:w-1/3">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">WORKING HOURS</h3>
                        <p className="text-sm sm:text-base">
                            Sun until Thurs 4:00PM <br /> Fri & Sat 2:30PM
                        </p>
                        <br />
                        <p className="text-sm sm:text-base">
                            Gate Close at: <br /> Sat–Wed 12:00M <br /> Thurs & Fri 12:30AM
                        </p>
                    </div>
                    
                    {/* Guest Service */}
                    <div className="lg:w-1/3">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">GUEST SERVICE CALL</h3>
                        <p className="text-sm sm:text-base">
                            cc@thegroves-sa.com
                            <br />
                            920001672
                        </p>
                        <br />
                        <p className="text-sm sm:text-base">
                            +966556631309
                        </p>
                    </div>
                </div>

                {/* Logo and Social Icons */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 pt-4 sm:pt-6">
                    <img 
                        src="/Image/groveslogo.png" 
                        alt="Logo" 
                        className="w-[200px] sm:w-[240px] md:w-[286px] h-[45px] sm:h-[55px] md:h-[65px] object-contain" 
                    />
                    <div className="flex gap-4 sm:gap-5">
                        <img src="/Image/tiktok.png" alt="TikTok" className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                        <img src="/Image/insta.png" alt="Instagram" className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                        <img src="/Image/x.png" alt="X" className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                        <img src="/Image/snapchat.png" alt="Snapchat" className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                    </div>
                </div>

                {/* Bottom Section: Terms & Payment Methods */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 p-4 pt-6">
                    {/* Left Side: Terms & Copyright */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-white text-center sm:text-left">
                        <button className="px-3 sm:px-4 py-1 rounded transition hover:bg-white hover:text-black text-xs sm:text-sm">
                            Terms & Conditions
                        </button>
                        <button className="px-3 sm:px-4 py-1 rounded transition hover:bg-white hover:text-black text-xs sm:text-sm">
                            Privacy Policy
                        </button>
                        <span className="whitespace-nowrap text-xs sm:text-sm">© 2023 The Groves for Entertainment</span>
                    </div>

                    {/* Right Side: Payment Methods */}
                    <div className="flex items-center gap-2">
                        <img src="/Image/visa.png" alt="Visa" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded" />
                        <img src="/Image/master.png" alt="Mastercard" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded" />
                        <img src="/Image/america.png" alt="American Express" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded" />
                    </div>
                </div>

            </div>
        </footer>
    );
}