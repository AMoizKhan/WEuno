"use client";
import GradientButton from "@/Component/Button";
import Card from "@/Component/Card";
import Cardgrid from "@/Component/Cardgrid";
import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function MainPage() {
  const slides = [
    {
      image: "/Image/bg.png",
      smallHeading: "KHAWAJA YANNI",
      bigHeading: "The new era of luxury",
      text: "lorium ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      image: "/Image/bg.png",
      smallHeading: "KHAWAJA YANNI",
      bigHeading: "The new era of luxury",
      text: "lorium ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      image: "/Image/bg.png",
      smallHeading: "KHAWAJA YANNI",
      bigHeading: "The new era of luxury",
      text: "lorium ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
  ];

  const cards = [
    {
      title: "Little Krazy",
      image: "/Image/card1.png",
    },
    {
      title: "Hawanim Groves City",
      image: "/Image/card2.png",
    },
    {
      title: "Picnic Market",
      image: "/Image/card3.png",
    },
    {
      title: "Lucawa Market",
      image: "/Image/card4.png",
    },
  ];

  const cardsgrid = [
    {
      image: "/images/blog1.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
    {
      image: "/images/blog2.jpg",
      title: "Emerging AI Trends in 2025",
      description: "A quick look at how artificial intelligence is reshaping industries and daily life.",
      link: "#",
    },
    {
      image: "/images/blog3.jpg",
      title: "The Future of Cloud Computing",
      description: "Explore how cloud-native solutions are transforming modern software systems.",
      link: "#",
    },
    {
      image: "/images/blog4.jpg",
      title: "Sustainable Tech Innovations",
      description: "Discover how technology is paving the way for a greener and more sustainable future.",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="w-full min-h-screen font-[family-name:var(--font-playfair)]">
      {/* Header ko absolute position diya hai taki slider ke upar aa jaye */}
      <div className="absolute top-2 left-0 w-full z-50">
        <Header />
      </div>

      <div className="w-full " style={{ background: "linear-gradient(97deg, rgba(40,54,6,1), rgba(15,21,0,1))" }}>
        {/* Slider Section - yahan se mt-[120px] hata diya */}
        <div className="relative w-full">
          <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[950px] overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-1/4 sm:top-1/3 left-4 sm:left-6 md:left-16 text-white max-w-xs sm:max-w-md md:max-w-lg px-4">
                  <p className="text-xs sm:text-sm md:text-lg font-semibold mb-2">
                    {slide.smallHeading}
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                    {slide.bigHeading}
                  </h1>
                  <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
                    {slide.text}
                  </p>
                  <GradientButton className="mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    Book reservation now
                    <FaArrowRight className="text-white text-lg sm:text-xl" />
                  </GradientButton>
                </div>
              </div>
            ))}
          </div>
          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-3 sm:bottom-5 left-1/2 space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Centered Content Section */}
        <div className="flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 text-white space-y-6 sm:space-y-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-wide px-2">
            Mall Of: Endless Possibilities
          </h1>

          {/* Paragraph */}
          <p className="text-center max-w-xs sm:max-w-lg md:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed font-normal text-white px-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          {/* Large Image */}
          <img
            src="/Image/endless.png"
            alt="Example"
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-[900px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded"
          />

          {/* Grid Box */}
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[960px] p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-start bg-white/10 shadow-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 backdrop-blur-[30px] overflow-hidden gap-4 sm:gap-6">
              <div className="flex flex-col text-white">
                <span className="text-xs sm:text-sm font-semibold">25 SR/GUEST</span>
                <span className="text-xl sm:text-xl md:text-2xl font-bold mt-1 leading-tight">
                  Get Your General Access Ticket
                </span>
                <p className="text-xs sm:text-sm font-light mt-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
              </div>
              <FaArrowRight className="justify-self-center sm:justify-self-end self-center text-gray-700 text-lg sm:text-xl" />
              {/* Left-bottom shine */}
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/30 rounded-full blur-2xl sm:blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto my-8 sm:my-10 px-4 text-white">
          {/* Heading and Button */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Book General Access ticket and <br className="hidden sm:block" /> enjoy the attractions for free
            </h1>
            <button className="flex font-semibold items-center justify-center gap-4 sm:gap-10 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-md hover:opacity-90 transition text-sm sm:text-lg w-full sm:w-auto">
              Book General Access Ticket
              <FaArrowRight className="text-white text-xl sm:text-2xl" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="max-w-7xl mx-auto my-8 sm:my-10 overflow-hidden">
            <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-hidden pb-4 px-2">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 ${index % 2 !== 0 ? "mt-4 sm:mt-8 md:mt-10" : "mt-0"}`}
                >
                  <Card {...card} size={index % 2 === 0 ? "large" : "small"} />
                </div>
              ))}
            </div>
          </div>

          <section className="max-w-6xl mx-auto p-4 text-center">
            {/* Heading */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Experience the Finest Cuisine
              </h2>
              <p className="mt-2 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              </p>
            </div>

            {/* Grid: 1 column on xs, 2 columns on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <Cardgrid image="/Image/cardgrid1.png" title="Vida Vera" />
              <Cardgrid image="/Image/cardgrid2.png" title="Zama Zulu" />
              <Cardgrid image="/Image/cardgrid3.png" title="Khawaja Yanni" />
              <Cardgrid image="/Image/cardgrid4.png" title="Yamagata" />
            </div>
          </section>

          <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 p-4 sm:p-6">
            {/* Left Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Curate your <br />experienceas <br /> you like
              </h2>
              <GradientButton className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl mx-auto md:mx-0">
                Book Tickets
                <FaArrowRight className="text-white text-lg sm:text-xl" />
              </GradientButton>
            </div>

            {/* Right Section - Cards Zig-Zag */}
            <div className="md:w-1/2 flex gap-2 sm:gap-3 md:gap-4 justify-center items-end mt-6 md:mt-0">
              <div className="scale-75 sm:scale-90">
                <Card image="/Image/card2.png" title="Resturants" />
              </div>
              <div className="scale-90 sm:scale-110 -mt-4 sm:-mt-6">
                <Card image="/Image/card5.png" title="Experiences" />
              </div>
              <div className="scale-75 sm:scale-90">
                <Card image="/Image/card6.png" title="Events" />
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 p-4 sm:p-6">
            {/* Left Section - Image */}
            <div className="md:w-1/2 order-2 md:order-1">
              <img
                src="/Image/map.png"
                alt="Sample"
                className="rounded-2xl sm:rounded-3xl w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
              />
            </div>

            {/* Right Section - Text + Button */}
            <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-3 sm:space-y-4 order-1 md:order-2">
              <p className="text-xs sm:text-sm tracking-widest">EXPERIENCE THE GROVES</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Place
              </h2>
              <p className="text-gray-300 max-w-xs sm:max-w-md text-sm sm:text-base">
                Our interactive map will show you the way to the shops and restaurants that you want to see.
              </p>
              <div className="flex items-center gap-3">
                <GradientButton title="Open the Map" className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base">
                  <FaArrowRight className="text-white text-lg sm:text-xl" />
                </GradientButton>
              </div>
            </div>
          </section>
        </div>

        <hr className="my-8 sm:my-12" />
        <Footer />
      </div>
    </div>
  );
}