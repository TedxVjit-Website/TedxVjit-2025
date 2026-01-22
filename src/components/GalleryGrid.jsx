// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const sections = {
//   "Tedx@2024": [
//     { src: "/gallery/G-images-2.jpg", alt: "Event Combo", grid: "col-span-3 row-span-2 relative" },
//     { src: "/gallery/G-images-1.JPG", alt: "Event Highlight 1", grid: "col-span-2 row-span-3 col-start-4 relative" },
//     { src: "/gallery/G-images-3.JPG", alt: "Event Highlight 2", grid: "col-span-2 row-span-3 col-start-2 row-start-3 relative" },
//     { src: "/gallery/TEDimage.JPG", alt: "Ambiance", grid: "row-span-3 col-start-1 row-start-3 relative" },
//     { src: "/gallery/G-images-4.JPG", alt: "Event Highlight 3", grid: "col-span-2 row-span-2 col-start-4 row-start-4 relative" },
//   ],
 
//   "Visual Stories": [
//     { src: "/gallery/G-images-1.JPG", alt: "Story 1", grid: "col-span-3 row-span-2 relative" },
//     { src: "/gallery/G-images-2.jpg", alt: "Story 2", grid: "col-span-2 row-span-3 col-start-4 relative" },
//     { src: "/gallery/G-images-3.JPG", alt: "Story 3", grid: "col-span-2 row-span-3 col-start-2 row-start-3 relative" },
//     { src: "/gallery/G-images-2.JPG", alt: "Ambiance", grid: "row-span-3 col-start-1 row-start-3 relative" },

//     { src: "/gallery/G-images-4.JPG", alt: "Story 4", grid: "col-span-2 row-span-2 col-start-4 row-start-4 relative" },
//   ],
// };

// export default function GalleryGrid() {
//   // Use the first section as default to avoid undefined error
//   const sectionKeys = Object.keys(sections);
//   const [activeSection, setActiveSection] = useState(sectionKeys[0]);

//   return (
//     <>
//       {/* Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 animate-fade-in-delay-2 pb-8">
//         {Object.keys(sections).map((section) => (
//           <button
//             key={section}
//             onClick={() => setActiveSection(section)}
//             className={`px-4 py-2 rounded-full border transition-colors backdrop-blur-sm ${activeSection === section
//               ? "bg-red-500/80 text-white border-red-500"
//               : "bg-white/10 border-white/20 hover:bg-white/20"
//               }`}
//           >
//             {section}
//           </button>
//         ))}
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full h-[90vh] md:h-[120vh]">
//         {sections[activeSection].map((img, i) => (
//           <div key={i} className={img.grid}>
//             <Image
//               src={img.src}
//               alt={img.alt}
//               fill
//               className="object-cover rounded-xl drop-shadow-lg shadow-red-500 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }


"use client";

import Image from "next/image";
import { useState } from "react";
import VideoCarousel from "./VideoCarousel";

const sections = {
  "Tedx@2024": [
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/Dance.jpeg", alt: "Dance Performance" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/Screenshot%202025-10-04%20213144.png?updatedAt=1759593832587", alt: "Event Moment 1" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/Screenshot%202025-10-04%20213202.png?updatedAt=1759593832115", alt: "Event Moment 2" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-2.JPG?updatedAt=1759593304566", alt: "Gallery Image 2" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/_DSC7474.JPG?updatedAt=1759593301174", alt: "Crowd Shot" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-1.JPG?updatedAt=1759593298737", alt: "Gallery Image 1" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-3.JPG?updatedAt=1759593295760", alt: "Gallery Image 3" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/WhatsApp%20Image%202026-01-22%20at%2011.47.20.jpeg", alt: "Event Photo 1" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/WhatsApp%20Image%202026-01-22%20at%2011.47.24.jpeg", alt: "Event Photo 2" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/WhatsApp%20Image%202026-01-22%20at%2011.47.20%20(1).jpeg", alt: "Event Photo 3" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/WhatsApp%20Image%202026-01-22%20at%2011.47.25.jpeg", alt: "Event Photo 4" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/WhatsApp%20Image%202026-01-22%20at%2011.47.19.jpeg", alt: "Event Photo 5" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/WhatsApp%20Image%202026-01-22%20at%2011.54.15.jpeg", alt: "Event Photo 6" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/464679405_17988238910725134_490165794121894385_n.jpg", alt: "Event Photo 7" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/614360197_777239104720744_6081083442848712092_n.jpg", alt: "Event Photo 8" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/619726688_1201127638889646_4557554877996195732_n.jpg", alt: "Event Photo 9" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/598225175_1840367709947344_2346019355344637147_n.jpg", alt: "Event Photo 10" },
    { src: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/WhatsApp%20Image%202026-01-22%20at%2011.48.37.jpeg", alt: "Event Photo 11" },
  ],

  // 👇 Visual Stories is only videos
  "Visual Stories": [
    "/animations/Tedxvjit.mp4",
     "/animations/Tedxvjit.mp4",
      "/animations/Tedxvjit.mp4",
    
  ],
};

// Fixed heights pattern for consistent masonry layout
const imageHeights = {
  "Tedx@2024": [
    '100%',  // Dance Performance - Square
    '125%',  // Event Moment 1 - Portrait
    '90%',   // Event Moment 2 - Landscape
    '133%',  // Gallery Image 2 - Tall
    '75%',   // Crowd Shot - Wide landscape
    '100%',  // Gallery Image 1 - Square
    '125%',  // Gallery Image 3 - Portrait
    '90%',   // Event Photo 1 - Landscape
    '133%',  // Event Photo 2 - Tall
    '75%',   // Event Photo 3 - Wide landscape
    '100%',  // Event Photo 4 - Square
    '125%',  // Event Photo 5 - Portrait
    '100%',  // Event Photo 6 - Square
    '100%',  // Event Photo 7 - Square
    '100%',  // Event Photo 8 - Square
    '100%',  // Event Photo 9 - Square
    '100%',  // Event Photo 10 - Square
    '100%',  // Event Photo 11 - Square
  ]
};

export default function GalleryGrid() {
  const sectionKeys = Object.keys(sections);
  const [activeSection, setActiveSection] = useState(sectionKeys[0]);

  return (
    <>
      {/* Section Buttons */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 animate-fade-in-delay-2 pb-8">
        {sectionKeys.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded-full border transition-colors backdrop-blur-sm ${
              activeSection === section
                ? "bg-red-500/80 text-white border-red-500"
                : "bg-white/10 border-white/20 hover:bg-white/20"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeSection === "Visual Stories" ? (
        <div className="max-w-7xl h-[90vh] md:h-[100vh] ">
          <VideoCarousel videos={sections["Visual Stories"]} />
        </div>
      ) : (
        <div className="columns-3 md:columns-4 lg:columns-6 gap-4 w-full space-y-4">
          {sections[activeSection].map((img, i) => {
            const height = imageHeights[activeSection][i];
            return (
              <div 
                key={i} 
                className="relative break-inside-avoid mb-4"
              >
                <div className="relative w-full" style={{ paddingBottom: height }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-xl drop-shadow-lg shadow-red-500 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
