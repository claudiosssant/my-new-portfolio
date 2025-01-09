import ContactForm from "./components/contact-form";
import ContactTitle from "./components/contact-title";

const Contacts = () => {
  return (
    <main className="flex mt-40 lg:flex-row bg-orange-500 rounded-2xl mx-32 my-10 justify-between items-center lg:items-stretch h-screen p-4 lg:p-8 shadow-2xl">
      <section className="flex-1 flex flex-col items-center lg:items-start rounded-lg">
        <ContactTitle />
      </section>
      <section className="flex-1 mt-10 flex flex-col items-center rounded-lg">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contacts;
