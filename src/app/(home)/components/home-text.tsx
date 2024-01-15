import HomeBtn from "./home-cta";

const HomeText = () => {
  return ( 
    <div className="flex flex-col justify-center h-full w-1/2 pl-48 gap-4">
      <div className="flex">
        <h1 className="font-extrabold text-6xl">Olá, sou o Cláudio</h1><span className="font-extrabold text-6xl text-teal-300">.</span>
      </div>
      <div className="flex gap-1">
        <span className="text-black font-bold text-2xl">Sou</span>
        <h4 className="text-teal-300 font-bold text-2xl">Desenvolvedor Full Stack</h4>
      </div>
      <p className="text-sm w-1/2 text-left">Com foco em desenvolvimento web, e mais de um ano de experiência na área. Busco sempre expandir meu conhecimento e aprimorar minhas habilidades para continuar contribuindo de maneira significativa para meus projetos.</p>
      <HomeBtn />
    </div>
   );
}
 
export default HomeText;