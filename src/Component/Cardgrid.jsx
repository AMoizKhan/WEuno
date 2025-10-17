"use client";

import GradientButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

export default function Cardgrid({ image, title, description, link }) {
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg bg-white/10 shadow-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 backdrop-blur-[30px] border border-gray-200 font-[family-name:var(--font-playfair)]">
      <a href={link}>
        <img
          className="rounded-t-lg w-full h-48 sm:h-56 md:h-64 object-cover"
          src={image}
          alt={title}
        />
      </a>

      <div className="p-4 sm:p-5">
        <h5 className="text-left mb-3 sm:mb-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <GradientButton
            title="100 SR PER GUEST"
            className="text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl w-32 sm:w-40 md:w-50 h-8 sm:h-10"
          />
          <FaArrowRight className="text-gray-500 text-base sm:text-lg mt-2 sm:mt-5 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}