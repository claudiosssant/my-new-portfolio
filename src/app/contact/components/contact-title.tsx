"use client";

import contactImg from "../../../../public/contacts-img.svg";
import Image from "next/image";

const ContactTitle = () => {
  return (
    <main className="flex flex-col items-center p-6 md:justify-between">
      <header className="text-center md:text-left">
        <h4 className="text-2xl md:text-4xl font-bold text-white">
          Vamos criar algo juntos? <br /> Me mande uma mensagem!
        </h4>
      </header>

      <div className="">
        <Image 
          src={contactImg} 
          alt="mockup-contacts" 
          layout="responsive" 
          width={320} 
          height={320} 
          className="rounded-md"
        />
      </div>
    </main>
  );
};

export default ContactTitle;
