// "use client";

// export default function GradientButton({ title }) {
//   return (
//     <button
//       className="flex font-semibold items-center justify-center gap-10 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white mt-6 px-6 py-3 rounded-2xl shadow-md hover:opacity-90 transition text-lg"
//     >
//       {title}
//     </button>
//   );
// }
"use client";

export default function GradientButton({ title, className = "", children }) {
  return (
    <button
      className={`flex font-semibold items-center justify-center gap-10 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white mt-6 px-6 py-3 rounded-2xl shadow-md hover:opacity-90 transition text-lg ${className}`}
    >
      {title}
      {children}

    </button>
  );
}
