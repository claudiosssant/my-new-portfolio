"use client"

import Image from "next/image";
import { GithubLogo, LinkBreak } from "@phosphor-icons/react";
import Link from "next/link";

const ProjectCards = () => {
  return ( 
    <div className="hover:scale-105 transition-transform cursor-pointer">
      <div className="bg-gray-100 px-44 py-20 rounded-t-xl">
        <p>Imagem do projeto</p>
      </div>
      <article className=" px-4 py-2">
        <header className="flex justify-between">
          <h4 className="font-bold text-lg">Nome do projeto</h4>
          <div className="flex">
            <Link href="www.google.com" >
              <GithubLogo />
            </Link>
            <Link href="www.google.com">
              <LinkBreak />
            </Link>
          </div>
        </header>
        <main className="">
          <p className="font-semibold text-orange-500">Node - Express - Postgres - Kafka - Redis</p>
          <p className="font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
        </main>
      </article>
    </div>
   );
}
 
export default ProjectCards;