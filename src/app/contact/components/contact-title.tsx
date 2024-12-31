import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const ContactTitle = () => {
  return (
    <main className="flex">
      <header>
        <h4 className="text-3xl font-bold">Vamos criar algo juntos? Me mande uma mensagem!</h4>
      </header>
      <div className="flex">
        <button>
          <LinkedinLogo />
        </button>
        <button>
          <InstagramLogo />
        </button>
        <button>
          <GithubLogo />
        </button>
      </div>
    </main>
  );
};

export default ContactTitle;
