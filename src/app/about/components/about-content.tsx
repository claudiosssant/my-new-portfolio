const AboutContent = () => {
  return (
    <article className="flex flex-col items-center justify-center w-full lg:w-3/4 p-6 lg:p-12 space-y-6 text-center">
      <header>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Olá, sou o Cláudio Santos</h2>
        <h3 className="text-lg lg:text-xl text-gray-600 mt-2">
          Desenvolvedor apaixonado por tecnologia e inovação
        </h3>
      </header>

      <main className="text-gray-700 text-base lg:text-lg leading-relaxed">
        <p>
          Com experiência em desenvolvimento de software, gosto de criar
          soluções que impactam positivamente a vida das pessoas. Minhas
          principais habilidades incluem trabalhar com tecnologias como React,
          Node.js, e TypeScript.
        </p>
        <p className="mt-4">
          Sempre estou em busca de novos desafios e aprendizados. Meu objetivo
          é desenvolver produtos que combinem funcionalidade, performance e um
          ótimo design. Vamos construir algo incrível juntos!
        </p>
      </main>
    </article>
  );
};

export default AboutContent;
