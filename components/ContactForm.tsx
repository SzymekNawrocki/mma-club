
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl w-full mx-auto bg-neutral400 p-6 rounded-3xl shadow-md text-center">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-blackText font-bold">Imię</label>
        <input
          type="text"
          id="name"
          name="name"
          className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-blackText font-bold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-blackText font-bold">Treść wiadomości</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
          required
        />
      </div>
      <div className="justify-center flex">

      <HoverBorderGradient>Wyślij</HoverBorderGradient>
      </div>
    </form>
  );
};

export default ContactForm;
