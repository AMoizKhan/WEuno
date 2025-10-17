"use client";

export default function GradientButton({ title, className = "", children }) {
  return (
    <button
      className={`flex font-semibold items-center justify-center gap-4 sm:gap-6 md:gap-10 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-md hover:opacity-90 transition text-sm sm:text-base md:text-lg ${className} font-[family-name:var(--font-playfair)]`}
    >
      {title}
      {children}
    </button>
  );
}