import HomeBtn from "./home-cta";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HomeText = () => {
  return (
    <motion.div
      className="flex flex-col justify-center pl-32 items-start h-full w-full gap-4"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex">
        <h1 className="font-extrabold text-6xl">
          <Typewriter
            words={["Cláudio Santos"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
      </div>
      <div className="flex gap-1 a">
        <h4 className="text-orange-600 font-bold text-2xl">
          Full Stack Developer
        </h4>
      </div>
      <p className="text-sm w-2/5 text-left">
        Com foco em desenvolvimento web, e mais de um ano de experiência na
        área. Busco sempre expandir meu conhecimento e aprimorar minhas
        habilidades para continuar contribuindo de maneira significativa para
        meus projetos.
      </p>
      <HomeBtn />
    </motion.div>
  );
};

export default HomeText;
