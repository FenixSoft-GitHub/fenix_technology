import React from 'react';

interface SuccessMessageProps {
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg text-center">
        <h2 className="text-xl font-semibold text-green-600 mb-4">¡Mensaje Enviado!</h2>
        <p className="text-gray-700 mb-4">Gracias por contactarnos. Responderemos a tu consulta en un plazo de 24 horas hábiles.</p>
        <button onClick={onClose} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;