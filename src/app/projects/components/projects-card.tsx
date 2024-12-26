"use client";

import { GithubLogo, LinkBreak } from "@phosphor-icons/react";
import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ProjectCards = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleShowModal(open: boolean) {
    setOpenModal(open);
  }

  const project = {
    name: "Nome do projeto",
    techStack: "Node - Express - Postgres - Kafka - Redis",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    githubLink: "https://github.com",
    liveDemoLink: "https://example.com",
  };

  return (
    <>
      <div
        className="hover:scale-105 transition-transform cursor-pointer shadow-lg rounded-lg"
        onClick={() => handleShowModal(true)}
      >
        <div className="bg-gray-100 px-44 py-20 rounded-t-xl flex items-center justify-center">
          <p>Imagem do projeto</p>
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

      {/* Modal */}
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
                  <span>Live Demo</span>
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

export default ProjectCards;
