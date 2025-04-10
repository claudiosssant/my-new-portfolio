import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import homeImg from "../../../../public/home-img.svg";

const HomeImg = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-full w-full md:w-1/2"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop", 
        ease: "easeInOut", 
        scale: { type: "spring", duration: 0.4, bounce: 0.5 },
      }}
    >
      <Image
        alt="Home image"
        src={homeImg}
        width={400}
        height={400}
        className="object-contain"
        priority
      />
    </motion.div>
  );
};

export default HomeImg;
