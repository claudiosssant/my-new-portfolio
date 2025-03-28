const AboutContent = () => {
  return (
    <article className="flex flex-col items-start justify-center w-full space-y-8">
      <header className="space-y-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          Olá, sou o Cláudio Santos
        </h2>
        <h3 className="text-xl lg:text-2xl text-orange-600 font-medium">
          Desenvolvedor apaixonado por tecnologia e inovação
        </h3>
      </header>

      <main className="text-gray-700 text-lg leading-relaxed space-y-6">
        <p className="text-gray-600">
          Com experiência em desenvolvimento de software, gosto de criar
          soluções que impactam positivamente a vida das pessoas. Minhas
          principais habilidades incluem trabalhar com tecnologias como React,
          Node.js, e TypeScript.
        </p>
        <p className="text-gray-600">
          Sempre estou em busca de novos desafios e aprendizados. Meu objetivo
          é desenvolver produtos que combinem funcionalidade, performance e um
          ótimo design. Vamos construir algo incrível juntos!
        </p>
      </main>
    </article>
  );
};

export default AboutContent;
