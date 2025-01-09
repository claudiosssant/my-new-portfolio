"use client";

const ContactForm = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full p-6 bg-orange-500 rounded-lg md:w-1/2">
      <header className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Entre em Contato
        </h2>
        <p className="text-sm text-white">
          Preencha o formulário abaixo e entrarei em contato com você o mais rápido possível.
        </p>
      </header>

      <form 
        action="#" 
        method="post" 
        className="flex flex-col w-full gap-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Escreva sua mensagem"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700"
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactForm;
