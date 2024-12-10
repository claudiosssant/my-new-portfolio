import NextjsIcon from "../../../../public/nextjs-icon.svg";
import NodejsIcon from "../../../../public/node-icon.svg";
import TsIcon from "../../../../public/typescript-icon.svg";
import PostgreIcon from "../../../../public/postgre-icon.svg";
import NestIcon from "../../../../public/icons8-carregou-144.png";
import ReactIcon from "../../../../public/react-icon.svg";
import TailwindIcon from "../../../../public/tailwind-icon.svg";
import GitIcon from "../../../../public/git-icon.svg";
import JsIcon from "../../../../public/javascript-icon.svg";
import Image from "next/image";

const SkillCarousel = () => {
  return (
    <div className="flex overflow-hidden space-x-0 group">
      <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none pl-8" src={NextjsIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none px-4" src={TsIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={ReactIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={NestIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={TailwindIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={PostgreIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={GitIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={NodejsIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none pr-10" src={JsIcon} alt="icon" />
      </div>
      <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none pl-8" src={NextjsIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none px-4" src={TsIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={ReactIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={NestIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={TailwindIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={PostgreIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={GitIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none" src={NodejsIcon} alt="icon" />
        <Image className="hover:scale-110 transition-transform  cursor-pointer max-w-none pr-10" src={JsIcon} alt="icon" />
      </div>
    </div>
  );
};

export default SkillCarousel;
