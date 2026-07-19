// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const fadeUpVariants = {
//   hidden: { opacity: 0, y: 25 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function HeroSection() {
//   const containerRef = useRef<HTMLElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
//   const yTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen w-full flex items-center bg-brand-teal overflow-hidden z-20 pt-44 md:pt-56"
//     >
//       {/* Premium Gradient Overlay for Text Legibility and Detailing */}
//       <div
//         className="absolute inset-0 z-10 pointer-events-none block lg:hidden"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(29, 84, 82, 0.6) 0%, rgba(29, 84, 82, 0.3) 50%, rgba(29, 84, 82, 0.75) 100%)",
//         }}
//       />

//       {/* Radial Readability Fade behind centered content */}
//       <div
//         className="absolute inset-0 z-10 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse at center, rgba(29, 84, 82, 0.85) 0%, rgba(29, 84, 82, 0.6) 45%, rgba(29, 84, 82, 0.3) 75%, transparent 100%)",
//         }}
//       />

//       {/* Top-to-Bottom Readability Fade for Navigation Items */}
//       <div
//         className="absolute inset-0 z-10 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(29, 84, 82, 0.95) 0%, rgba(29, 84, 82, 0) 25%)",
//         }}
//       />

//       <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 relative z-20">
//         <div className="flex flex-col items-center justify-center text-center">
//           {/* Content Box (centered) */}
//           <motion.div
//             className="flex flex-col items-center justify-center text-center max-w-[620px] mx-auto"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div className="mb-6 select-none" variants={fadeUpVariants}>
//               <img
//                 src="/updatedheroimage.jpeg"
//                 alt="Just Waffles Logo"
//                 className="mx-auto block w-[min(90vw,40rem)] lg:w-[min(70vw,46rem)] h-auto object-contain"
//                 loading="eager"
//               />
//             </motion.div>

//             {/* Description (max 3 lines, white text) */}
//             <motion.p
//               className="text-[14px] sm:text-[15px] leading-relaxed text-white/90 font-sans font-light mb-8 text-center"
//               variants={fadeUpVariants}
//             >
//               Handcrafted eggless waffles prepared with carefully selected ingredients, premium
//               chocolate and artisanal techniques that transform every bite into an unforgettable
//               experience.
//             </motion.p>

//             {/* Buttons (strictly 56px height, 8px radius) */}
//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 items-center justify-center"
//               variants={fadeUpVariants}
//             >
//               <button
//                 onClick={() => {
//                   document
//                     .querySelector("#signature")
//                     ?.scrollIntoView({ behavior: "smooth", block: "start" });
//                 }}
//                 className="h-14 px-8 bg-white text-brand-teal-dark text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white/90 rounded-[8px] cursor-pointer"
//               >
//                 Explore Menu
//               </button>

//               <button
//                 onClick={() => {
//                   document
//                     .querySelector("#locations")
//                     ?.scrollIntoView({ behavior: "smooth", block: "start" });
//                 }}
//                 className="h-14 px-8 bg-transparent text-white border border-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white hover:text-brand-teal-dark rounded-[8px] cursor-pointer"
//               >
//                 Find Us
//               </button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
//         <span className="text-[9px] font-sans font-medium uppercase tracking-[0.25em] text-white/70">
//           Scroll
//         </span>
//         <div className="w-[1.5px] h-12 bg-white/25 relative overflow-hidden rounded-full">
//           <motion.div
//             className="absolute top-0 left-0 right-0 h-4 bg-white rounded-full"
//             animate={{
//               y: [0, 32, 0],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden z-20 pt-44 md:pt-56"
      style={{ backgroundColor: "#14C8C4" }}
    >
      {/* Premium Gradient Overlay for Text Legibility and Detailing */}
      <div
        className="absolute inset-0 z-10 pointer-events-none block lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 200, 196, 0.6) 0%, rgba(20, 200, 196, 0.3) 50%, rgba(20, 200, 196, 0.75) 100%)",
        }}
      />

      {/* Radial Readability Fade behind centered content */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20, 200, 196, 0.85) 0%, rgba(20, 200, 196, 0.6) 45%, rgba(20, 200, 196, 0.3) 75%, transparent 100%)",
        }}
      />

      {/* Top-to-Bottom Readability Fade for Navigation Items */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 200, 196, 0.95) 0%, rgba(20, 200, 196, 0) 25%)",
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 relative z-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Content Box (centered) */}
          <motion.div
            className="flex flex-col items-center justify-center text-center max-w-[620px] mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-6 select-none" variants={fadeUpVariants}>
              <img
                src="/updatedheroimage.jpeg"
                alt="Just Waffles Logo"
                className="mx-auto block w-[min(90vw,40rem)] lg:w-[min(70vw,46rem)] h-auto object-contain"
                loading="eager"
              />
            </motion.div>

            {/* Description (max 3 lines, white text) */}
            <motion.p
              className="text-[14px] sm:text-[15px] leading-relaxed text-white font-sans font-semibold mb-8 text-center"
              variants={fadeUpVariants}
            >
              Handcrafted eggless waffles prepared with carefully selected ingredients, premium
              chocolate and artisanal techniques that transform every bite into an unforgettable
              experience.
            </motion.p>

            {/* Buttons (strictly 56px height, 8px radius) */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
              variants={fadeUpVariants}
            >
              <button
                onClick={() => {
                  document
                    .querySelector("#signature")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="h-14 px-8 bg-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white/90 rounded-[8px] cursor-pointer"
                style={{ color: "#14C8C4" }}
              >
                Explore Menu
              </button>

              <button
                onClick={() => {
                  document
                    .querySelector("#locations")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="h-14 px-8 bg-transparent text-white border border-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white rounded-[8px] cursor-pointer"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#14C8C4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                Find Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
        <span className="text-[9px] font-sans font-medium uppercase tracking-[0.25em] text-white/70">
          Scroll
        </span>
        <div className="w-[1.5px] h-12 bg-white/25 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 right-0 h-4 bg-white rounded-full"
            animate={{
              y: [0, 32, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
