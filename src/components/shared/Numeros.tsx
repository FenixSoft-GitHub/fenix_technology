import { CountUp } from "@/components/shared/CountUp";
import { useInView } from "react-intersection-observer";

const Numeros = () => {
  // Detectar cuando el componente entra en la vista
  const { ref, inView } = useInView({
    triggerOnce: true, // Se activa solo una vez
    threshold: 0.5, // Se activa cuando el 50% del elemento es visible
  });
  
  return (
    <section
      ref={ref}
      className="w-full max-w-[1300px] mx-auto p-6 md:p-8 lg:p-10 bg-gray-200/50 dark:bg-gray-800/50 rounded-lg mt-4 shadow-md mb-8"
    >
      <h2 className="text-3xl lg:text-5xl text-center text-balance mb-10 lg:mb-20 font-semibold font-lexend text-gray-900 dark:text-gray-100 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
        Fenix Technology en números
      </h2>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3">
        {/* Transacciones Realizadas */}
        <div className="flex flex-col justify-center items-center">
          <span className="number text-4xl lg:text-6xl font-bold tabular-nums tracking-tighter">
            +{inView && <CountUp initial={0} final={100} />}M
          </span>
          <span className="uppercase opacity-70 text-center">
            Transacciones Realizadas
          </span>
        </div>

        {/* Nuestros Clientes */}
        <div className="flex flex-col justify-center items-center">
          <span className="number text-4xl lg:text-6xl font-bold tabular-nums tracking-tighter">
            +{inView && <CountUp initial={0} final={800} />}
          </span>
          <span className="uppercase opacity-70 text-center">
            Nuestros Clientes
          </span>
        </div>

        {/* Años de experiencia */}
        <div className="flex flex-col justify-center items-center">
          <span className="number text-4xl lg:text-6xl font-bold tabular-nums tracking-tighter">
            +{inView && <CountUp initial={0} final={10} />}
          </span>
          <span className="uppercase opacity-70 text-center">
            Años de experiencia
          </span>
        </div>
      </div>
    </section>
  );
};

export default Numeros;