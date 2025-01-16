"use client";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import HomeText from "./components/home-text";
import { Chakra_Petch } from "next/font/google";
import Skills from "../skills/page";
import Projects from "../projects/page";
import About from "../about/page";
import Contacts from "../contact/page";
import HomeImg from "./components/home-img";
import Drag from "./components/drag";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: "500",
});

const Home = () => {
  return (
    <div className={chakra.className}>
      <Header />
      <Drag />
      <div className="h-screen flex justify center">
        <HomeText />
        <HomeImg />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;

