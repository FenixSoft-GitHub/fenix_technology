import { Link } from "react-router";
import { socialLinks } from "@/constants/links";
import { ReactNode } from "react";
import { PaymentMethods } from "@/constants/links";
import { Logo } from "./Logo";

interface SocialLink {
  id: number;
  title: string;
  href: string;
  icon: ReactNode;
  className: string;
}

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección principal del footer */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Logo />
            <p className="text-sm text-slate-400">
              Tu destino confiable para encontrar los mejores precios en equipos de tecnología y accesorios.
            </p>
          </div>

          {/* Formulario de suscripción */}
          <div className="space-y-4">
            <h3 className="font-semibold uppercase tracking-wider text-white text-center md:text-left">
              Métodos de Pagos
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-6 items-center sm:grid-cols-3 md:grid-cols-4">
              {PaymentMethods.map((paymentMethod, index) => (
                <div key={index} className="flex justify-center p-1">
                  <img
                    src={paymentMethod.image}
                    alt={paymentMethod.alt}
                    className={paymentMethod.size + " rounded"}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Enlaces útiles */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold uppercase tracking-wider text-white">
              Enlaces Útiles
            </h3>
            <nav className="space-y-1.5">
              <Link to="/products" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Productos
              </Link>
              <Link to="/about" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Sobre Nosotros
              </Link>
              <Link to="/blog" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Blog
              </Link>
              <Link to="/contact-us" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Contáctanos
              </Link>
              <Link to="/soporte" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Soporte
              </Link>
              <Link to="/policies" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Políticas de privacidad
              </Link>
              <Link to="/terms-of-use" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                Términos de uso
              </Link>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold uppercase tracking-wider text-white">
              Síguenos
            </h3>
            <p className="text-sm text-slate-400">
              No te pierdas las novedades que Fenix Technology tiene para ti.
            </p>
            <div className="grid grid-cols-5 gap-4 mt-6 justify-items-center">
              {socialLinks.map((link: SocialLink) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={link.className}
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
              {new Date().getFullYear()} Fenix Technology. ❤ Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact-us" className="text-sm text-slate-400 hover:text-white transition-colors">
                Contacto
              </Link>
              <Link to="/contact-us#location" className="text-sm text-slate-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

//         <div className="border-t border-gray-800">
//           <div className="py-6 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm text-slate-400">
//               {new Date().getFullYear()} Fenix Technology. ❤ Todos los derechos reservados.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link to="/contact-us" className="text-sm text-slate-400 hover:text-white transition-colors">
//                 Contacto
//               </Link>
//               <Link to="/contact-us#location" className="text-sm text-slate-400 hover:text-white transition-colors">
//                 FAQ
//               </Link>
//             </div>
//           </div>
//         </div>



// import { Link } from "react-router";
// import { socialLinks } from "@/constants/links";
// import { ReactNode } from "react";
// import { PaymentMethods } from "@/constants/links";

// interface SocialLink {
//   id: number;
//   title: string;
//   href: string;
//   icon: ReactNode;
//   className: string;

// }

// export const Footer = () => {
  
//   return (
//     <footer className="bg-gray-950 text-slate-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Sección principal del footer */}
//         <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Logo y descripción */}
//           <div className="space-y-4">
//             <Link
//               to="/"
//               className="text-3xl md:text-4xl font-display2 font-bold text-white inline-block hover:scale-105 transition-transform"
//             >
//               Fenix Technology
//             </Link>
//             <p className="text-sm text-slate-400 mt-2">
//               Tu destino confiable para encontrar los mejores precios en equipos de tecnología y accesorios.
//             </p>
//           </div>

//           {/* Formulario de suscripción */}
//           <div className="space-y-4">
//             <h3 className="font-semibold uppercase tracking-wider text-white text-center">
//               Métodos de Pagos
//             </h3>

//             <div className="grid grid-cols-2 gap-2 mt-6 items-center md:grid-cols-4">
//               {PaymentMethods.map((paymentMethod, index) => (
//                 <div key={index} className="flex justify-center p-1">
//                   <img 
//                     src={paymentMethod.image} 
//                     alt={paymentMethod.alt} 
//                     className={paymentMethod.size + " rounded-md"} 
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Enlaces útiles */}
//           <div className="space-y-4">
//             <h3 className="font-semibold uppercase tracking-wider text-white">
//               Enlaces Útiles
//             </h3>
//             <nav className="space-y-1.5">
//               <Link to="/products" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
//                 Productos
//               </Link>
//               <Link to="/about" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
//                 Sobre Nosotros
//               </Link>
//               <Link to="/blog" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
//                 Blog
//               </Link>
//               <Link to="/contact-us" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
//                 Contáctanos
//               </Link>
//               <Link to="/soporte" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
//                 Soporte
//               </Link>
//               <Link to="/policies" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
//                 Políticas de privacidad
//               </Link>
//               <Link to="/terms-of-use" className="block text-sm text-slate-400 hover:text-white hover:underline transition-colors">
//                 Términos de uso
//               </Link>
//             </nav>
//           </div>

//           {/* Redes sociales */}
//           <div className="space-y-4">
//             <h3 className="font-semibold uppercase tracking-wider text-white">
//               Síguenos
//             </h3>
//             <p className="text-sm text-slate-400">
//               No te pierdas las novedades que Fenix Technology tiene para ti.
//             </p>
//             <div className="grid grid-cols-5 gap-4">
//               {socialLinks.map((link: SocialLink) => (
//                 <a
//                   key={link.id}
//                   href={link.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   className={link.className}
//                   aria-label={link.title}
//                 >
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Línea divisoria */}
//         <div className="border-t border-gray-800">
//           <div className="py-6 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm text-slate-400">
//               {new Date().getFullYear()} Fenix Technology. ❤ Todos los derechos reservados.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link to="/contact-us" className="text-sm text-slate-400 hover:text-white transition-colors">
//                 Contacto
//               </Link>
//               <Link to="/contact-us#location" className="text-sm text-slate-400 hover:text-white transition-colors">
//                 FAQ
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
