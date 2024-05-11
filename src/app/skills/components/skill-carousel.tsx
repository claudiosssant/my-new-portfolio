import NextjsIcon from "../../../../public/nextjs-icon.svg";
import NodejsIcon from "../../../../public/node-icon.svg";
import TsIcon from "../../../../public/typescript-icon.svg";
import PostgreIcon from "../../../../public/postgre-icon.svg";
import FigmaIcon from "../../../../public/figma-icon.svg";
import ReactIcon from "../../../../public/react-icon.svg";
import TailwindIcon from "../../../../public/tailwind-icon.svg";
import GitIcon from "../../../../public/git-icon.svg";
import JsIcon from "../../../../public/javascript-icon.svg";

import Image from "next/image";

const SkillCarousel = () => {
  return (
    <div className="flex overflow-hidden space-x-16 w-full">
      <div className="flex gap-3 space-x-16 animate-loop-scroll">
        <Image className="max-w-none" src={NextjsIcon} alt="icon" />
        <Image className="max-w-none" src={TsIcon} alt="icon" />
        <Image className="max-w-none" src={ReactIcon} alt="icon" />
        <Image className="max-w-none" src={FigmaIcon} alt="icon" />
        <Image className="max-w-none" src={TailwindIcon} alt="icon" />
        <Image className="max-w-none" src={PostgreIcon} alt="icon" />
        <Image className="max-w-none" src={GitIcon} alt="icon" />
        <Image className="max-w-none" src={NodejsIcon} alt="icon" />
        <Image className="max-w-none" src={JsIcon} alt="icon" />
      </div>
      <div className="flex space-x-16 gap-3 animate-loop-scroll" aria-hidden="true">
        <Image className="max-w-none" src={NextjsIcon} alt="icon" />
        <Image className="max-w-none" src={TsIcon} alt="icon" />
        <Image className="max-w-none" src={ReactIcon} alt="icon" />
        <Image className="max-w-none" src={FigmaIcon} alt="icon" />
        <Image className="max-w-none" src={TailwindIcon} alt="icon" />
        <Image className="max-w-none" src={PostgreIcon} alt="icon" />
        <Image className="max-w-none" src={GitIcon} alt="icon" />
        <Image className="max-w-none" src={NodejsIcon} alt="icon" />
        <Image className="max-w-none" src={JsIcon} alt="icon" />
      </div>
    </div>
  );
};

export default SkillCarousel;
