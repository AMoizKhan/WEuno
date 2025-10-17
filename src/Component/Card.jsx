// "use client";

// export default function Card({ title, date, image, link }) {
//   return (
//     <div className="h-full">
//       <a href={link}>
//         <div className="h-[200px] border border-gray-600 rounded relative group overflow-hidden hover:border-brand duration-200">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover duration-200"
//           />

//           <div className="absolute bg-gradient-to-b from-transparent to-black/90 w-full h-full px-1 py-2 top-0 left-0 flex items-end justify-start flex-col group-hover:opacity-100 group-hover:visible opacity-0 invisible duration-200 text-white">
//             <h5 className="translate-y-10 group-hover:translate-y-0 duration-200 tracking-wide text-sm px-2 text-gray-200">
//               {title}
//             </h5>
//             <p className="translate-y-10 group-hover:translate-y-0 duration-200 text-gray-400 text-xs px-2 delay-100">
//               Last updated: {date}
//             </p>
//           </div>
//         </div>
//       </a>
//       {/* Text below image */}
//       <div className="mt-2 text-center">
//         <h4 className="text-sm font-medium text-gray-800">{title}</h4>
//       </div>
//     </div>
//   );
// }
"use client";

export default function Card({ image, title, size }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`overflow-hidden rounded-3xl  ${
          size === "large"
            ? "w-[385px] h-[526px]"
            : "w-[228px] h-[322px]"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-3xl duration-300 hover:scale-105 transition"
        />
      </div>
      <h3 className="mt-3 text-white text-3xl font-medium ">{title}</h3>
    </div>
  );
}
