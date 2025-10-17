"use client";

export default function Card({ image, title, size }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`overflow-hidden rounded-2xl sm:rounded-3xl ${
          size === "large"
            ? "w-[280px] h-[380px] sm:w-[350px] sm:h-[480px] md:w-[385px] md:h-[526px]"
            : "w-[180px] h-[250px] sm:w-[200px] sm:h-[280px] md:w-[228px] md:h-[322px]"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl sm:rounded-3xl duration-300 hover:scale-105 transition"
        />
      </div>
      <h3 className="mt-2 sm:mt-3 text-white text-xl sm:text-2xl md:text-3xl font-medium">{title}</h3>
    </div>
  );
}