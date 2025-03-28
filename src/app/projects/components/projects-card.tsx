"use client";

import { GithubLogo, LinkBreak } from "@phosphor-icons/react";
import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface Project {
  name: string;
  techStack: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
  imageSrc: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [openModal, setOpenModal] = useState(false);

  function handleShowModal(open: boolean) {
    setOpenModal(open);
  }

  return (
    <>
      <div
        className="hover:scale-105 transition-transform cursor-pointer shadow-lg rounded-lg"
        onClick={() => handleShowModal(true)}
      >
        <div className="">
          <Image src={project.imageSrc} alt={project.name} width={700} height={300} />
        </div>
        <article className="px-4 py-2">
          <header className="flex justify-between items-center">
            <h4 className="font-bold text-lg">{project.name}</h4>
            <div className="flex space-x-2">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <GithubLogo size={20} />
              </Link>
              <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                <LinkBreak size={20} />
              </Link>
            </div>
          </header>
          <main>
            <p className="font-semibold text-orange-500">{project.techStack}</p>
            <p className="font-light text-gray-600">{project.description}</p>
          </main>
        </article>
      </div>


      <Dialog open={openModal} onOpenChange={handleShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="font-semibold text-orange-500">{project.techStack}</p>
            <p>{project.description}</p>
            <div className="flex space-x-4">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center space-x-2">
                  <GithubLogo size={20} />
                  <span>GitHub</span>
                </Button>
              </Link>
              <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center space-x-2">
                  <LinkBreak size={20} />
                  <span>Link</span>
                </Button>
              </Link>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => handleShowModal(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ProjectCards = () => {
  const projects: Project[] = [
    {
      name: "IndaHouse Pet Grooming",
      techStack: "NextJs - ReactJs - TailwindCSS - Nodejs - Vercel",
      description: "Landing Page responsiva para empresa de Pet Grooming de Nova York (EUA).",
      githubLink: "https://github.com/Blacktech-Company/indahouse",
      liveDemoLink: "https://indahouse.vercel.app/",
      imageSrc: "/indahouse-img.svg",
    },
    {
      name: "Wolp Barber",
      techStack: "Nuxtjs - Vuejs - Javascript - TailwindCSS",
      description: "Landing Page profissional para barbearia localizada em Recife, Pernambuco.",
      githubLink: "https://github.com",
      liveDemoLink: "https://example.com",
      imageSrc: "/wolpbarber.svg",
    },
    {
      name: "Lista de Produtos",
      techStack: "Node - Express - Reactjs - TailwindCSS - ShadcnUI",
      description: "Repositório de estudo em criação de API, realização de CRUD e exibição no Front-End.",
      githubLink: "https://github.com",
      liveDemoLink: "https://products-frontend-sepia.vercel.app/",
      imageSrc: "/productslist.svg",
    },
    {
      name: "LA Chargers 60th",
      techStack: "HTML - CSS - Javascript - Vercel",
      description: "Landing Page responsiva de comemoração dos 60 anos do time Los Angeles Chargers.",
      githubLink: "https://github.com",
      liveDemoLink: "https://claudiosssant.github.io/la-chargers-60/",
      imageSrc: "/lachargers.svg", 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
