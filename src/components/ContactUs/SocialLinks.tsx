import React from "react";
import { socialLinks } from "@/constants/links";

const SocialLinks: React.FC = () => {
  return (

    <section className="max-w-3xl mx-auto px-4 py-10 text-gray-900 dark:text-gray-100 ">
      <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
        Redes Sociales
      </h2>
      <div className="flex justify-center gap-18 bg-linear-to-t from-zinc-400 dark:from-zinc-700 to-zinc-200 dark:to-zinc-900 rounded-lg px-6 py-10">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            className={link.className2}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
