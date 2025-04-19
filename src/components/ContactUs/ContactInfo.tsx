import React from "react";
import { contactItems } from "@/data/contactData";

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto space-y-14 bg-gray-100 dark:bg-gray-900 dark:border dark:border-gray-700 p-6 rounded-2xl shadow-md">
      <h3 className="text-2xl font-bold text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
        Información de Contacto
      </h3>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-700  p-3 rounded-lg transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-cyan-700 dark:text-gray-100 rounded-full hover:scale-125 transition-all ease-in-out duration-300">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {item.label}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-cyan-700 dark:text-cyan-300 hover:underline break-words"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-base text-gray-800 dark:text-gray-300 break-words">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;