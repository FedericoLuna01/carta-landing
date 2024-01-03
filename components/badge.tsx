'use client'

import { motion } from "framer-motion";

export const Badge = () => {
  return (
    <a
      href="https://www.producthunt.com/posts/awesome-framer-motion-components"
      target="__blank"
      className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
    >
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
        <h1>🚀 Tu carta en todos lados</h1>
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier"
            strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              d="M9 6L15 12L9 18"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                x: 0,
              }}
              animate={{
                x: [0, 3, 0],
              }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
          </g>
        </svg>
      </div>
      <span className="absolute -bottom-[2px] left-[1.125rem] h-[3px] w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-400/0 via-red-800/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </a>
  );
};


