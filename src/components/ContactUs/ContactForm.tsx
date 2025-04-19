import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormData } from "./types";
import { FiSend } from "react-icons/fi";
import SuccessMessage from "./SuccessMessage";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSuccessMessage = () => {
    setIsSuccess(false);
};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-6 bg-gray-100 dark:bg-gray-900 px-8 py-6 rounded-2xl shadow-lg dark:border dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold mb-2 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
        Contáctanos
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
        Llena el siguiente formulario y te responderemos lo antes posible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
        <div>
          <label htmlFor="name" className="block text-sm font-medium ">
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            Asunto
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 shadow-sm bg-white dark:bg-gray-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          >
            <option value="">Selecciona un asunto</option>
            <option value="Consulta sobre un producto">Consulta sobre un producto</option>
            <option value="Soporte técnico">Soporte técnico</option>
            <option value="Pregunta sobre un pedido">Pregunta sobre un pedido</option>
            <option value="Devoluciones">Devoluciones</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full flex justify-center items-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition duration-200 ${
          isLoading
            ? "bg-cyan-400 cursor-wait"
            : "bg-cyan-600 hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-400"
        }`}
      >
        <FiSend className="text-lg" />
        {isLoading ? "Enviando..." : "Enviar Mensaje"}
      </button>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {isSuccess && <SuccessMessage onClose={handleCloseSuccessMessage} />}
    </form>
  );
};

export default ContactForm;