import NextjsIcon from "../../../../public/icons8-nextjs-144.png";
import NodejsIcon from "../../../../public/icons8-nodejs-128.png";
import TsIcon from "../../../../public/icons8-texto-datilografado-150.png";
import PostgreIcon from "../../../../public/icons8-postgreesql-150.png";
import FigmaIcon from "../../../../public/icons8-figma-150.png";
import ReactIcon from "../../../../public/icons8-react-96 (1).png";
import TailwindIcon from "../../../../public/icons8-tailwind-css-96 (1).png";
import GitIcon from "../../../../public/icons8-git-150.png";
import RNIcon from "../../../../public/icons8-nextjs-144.png";

import Image from "next/image";

const SkillCarousel = () => {
  return (
    <div className="flex overflow-hidden space-x-16 w-full">
      <div className="flex space-x-16 animate-loop-scroll">
        <Image width={150} height={150} src={NextjsIcon} alt="icon" />
        <Image width={150} height={150} src={TsIcon} alt="icon" />
        <Image width={150} height={150} src={ReactIcon} alt="icon" />
        <Image width={150} height={150} src={FigmaIcon} alt="icon" />
        <Image width={150} height={150} src={TailwindIcon} alt="icon" />
        <Image width={150} height={150} src={PostgreIcon} alt="icon" />
        <Image width={150} height={150} src={GitIcon} alt="icon" />
        <Image width={150} height={150} src={NodejsIcon} alt="icon" />
      </div>
      <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
        <Image width={150} height={150} src={NextjsIcon} alt="icon" />
        <Image width={150} height={150} src={TsIcon} alt="icon" />
        <Image width={150} height={150} src={ReactIcon} alt="icon" />
        <Image width={150} height={150} src={FigmaIcon} alt="icon" />
        <Image width={150} height={150} src={TailwindIcon} alt="icon" />
        <Image width={150} height={150} src={PostgreIcon} alt="icon" />
        <Image width={150} height={150} src={GitIcon} alt="icon" />
        <Image width={150} height={150} src={NodejsIcon} alt="icon" />
      </div>
    </div>
  );
};

export default SkillCarousel;
