"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
];

const InfiniteCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex space-x-4"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust for speed
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="w-64 h-40 flex-shrink-0 overflow-hidden relative">
            <Image
              src={src}
              alt={`carousel-image-${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
