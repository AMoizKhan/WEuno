"use client";

import GradientButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

export default function Cardgrid({ image, title, description, link }) {
    return (
        <div className="max-w-sm sm:max-w-md md:max-w-lg bg-white/10 shadow-lg rounded-2xl sm:rounded-3xl backdrop-blur-[30px]  font-[family-name:var(--font-playfair)] overflow-hidden">
            <a href={link}>
                <img
                    className="w-full h-48 sm:h-56 md:h-64 object-cover p-2 rounded-t-4xl"
                    src={image}
                    alt={title}
                />
            </a>

            <div className="p-4 sm:p-5 -mt-2">
                <h5 className="text-left mb-3 sm:mb-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>

                <div className="flex items-center justify-between gap-2 sm:gap-4">
                    <GradientButton
                        title="100 SR PER GUEST"
                        className="text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1 sm:py-2 rounded-4xl h-8 sm:h-10 whitespace-nowrap min-w-[120px] sm:min-w-[140px]"
                    />
                    <FaArrowRight className="text-gray-500 text-base sm:text-lg flex-shrink-0" />
                </div>
            </div>
        </div>
    );
}