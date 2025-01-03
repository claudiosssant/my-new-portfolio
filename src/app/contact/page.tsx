import ContactForm from "./components/contact-form";
import ContactTitle from "./components/contact-title";

const Contacts = () => {
    return(
        <main className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch h-screen p-4 lg:p-8">
            <ContactTitle />
            <ContactForm />
        </main>
    );
};


export default Contacts;