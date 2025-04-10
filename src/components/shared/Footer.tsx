import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import { socialLinks } from "@/constants/links";
import { ReactNode } from "react";
import { useState } from "react";

interface SocialLink {
  id: number;
  title: string;
  href: string;
  icon: ReactNode;
}

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Aquí iría la lógica para enviar el email al backend
    }
  };

  return (
    <footer className="bg-gray-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección principal del footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-3xl md:text-4xl font-display2 font-bold text-white inline-block hover:scale-105 transition-transform"
            >
              Fenix Technology
            </Link>
            <p className="text-sm text-slate-400 mt-2">
              Tu destino confiable para encontrar los mejores precios en equipos de tecnología y accesorios.
            </p>
          </div>

          {/* Formulario de suscripción */}
          <div className="space-y-4">
            <h3 className="font-semibold uppercase tracking-wider text-white">
              Suscríbete
            </h3>
            <p className="text-sm text-slate-400">
              Recibe promociones exclusivas y las últimas novedades
            </p>
            <form onSubmit={handleSubscribe} className="mt-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo Electrónico"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                  aria-label="Suscribirse"
                >
                  <BiChevronRight size={20} />
                </button>
              </div>
            </form>
            {subscribed && (
              <p className="text-green-500 text-sm animate-fade-in">
                ¡Gracias por suscribirte!
              </p>
            )}
          </div>

          {/* Enlaces útiles */}
          <div className="space-y-4">
            <h3 className="font-semibold uppercase tracking-wider text-white">
              Enlaces Útiles
            </h3>
            <nav className="space-y-3">
              <Link to="/celulares" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Productos
              </Link>
              <Link to="/soporte" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Soporte
              </Link>
              <Link to="/privacidad" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Políticas de privacidad
              </Link>
              <Link to="/terminos" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Términos de uso
              </Link>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="font-semibold uppercase tracking-wider text-white">
              Síguenos
            </h3>
            <p className="text-sm text-slate-400">
              No te pierdas las novedades que CelularesBaratos tiene para ti.
            </p>
            <div className="grid grid-cols-4 gap-2">
              {socialLinks.map((link: SocialLink) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-2 text-slate-400 bg-gray-900 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                  aria-label={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              {new Date().getFullYear()} Fenix Technology. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contacto" className="text-sm text-slate-400 hover:text-white transition-colors">
                Contacto
              </Link>
              <Link to="/faq" className="text-sm text-slate-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
