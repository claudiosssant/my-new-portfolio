import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";

export const ProjectModal = () => {
  return (
    <div className="border border-red-600 flex-1 bg-slate-600 absolute">
      <Dialog>
        <DialogHeader>
          <DialogTitle>Nome do projeto</DialogTitle>
        </DialogHeader>
        <DialogContent>
          IMAGEM DO PROJETO
          <DialogDescription>Descrição do projeto</DialogDescription>
        </DialogContent>
        <DialogFooter></DialogFooter>
        <DialogClose>
          <Button>Voltar</Button>
        </DialogClose>
        <DialogTrigger asChild>
          <Button>Abrir</Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};
