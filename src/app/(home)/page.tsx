"use client";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import HomeText from "./components/home-text";
import { Chakra_Petch } from "next/font/google";
import Skills from "../skills/page";
import Projects from "../projects/page";
import { motion } from "framer-motion";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: "500",
});

const Home = () => {
  return (
    <div className={chakra.className}>
      <Header />
      <div className="h-screen justify center">
        <HomeText />
      </div>
      <motion.div
        className="w-44 h-44 bg-blue-600"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      ></motion.div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
