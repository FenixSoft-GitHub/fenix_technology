import BentoItem from "@/components/shared/BentoItem";
import Numeros from "@/components/shared/Numeros";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-gray-100 w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full bg-[url('/nosotros/About.avif')]"
          style={{ maskImage: "linear-gradient(black 60%, transparent)" }}
        />
        <div className="absolute inset-0 bg-black opacity-20" />

        <div className="relative flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-6">
            Nuestra Razón de Ser
          </h2>
          <p
            className="max-w-[800px] mx-auto text-balance text-center text-sm tracking-wide md:text-xl"
          >
            Creemos firmemente que la tecnología adecuada puede transformar la forma en que vives, trabajas y te conectas. Nos dedicamos a seleccionar cuidadosamente equipos y soluciones innovadoras que no solo satisfacen tus necesidades, sino que también te empoderan para alcanzar tus metas y explorar nuevas posibilidades. Somos más que una tienda; somos tu aliado tecnológico en el camino hacia un futuro más inteligente y conectado.
          </p>
        </div>
      </div>

      <section
        className="max-w-[1400px] w-full mx-auto gap-4 lg:gap-10 text-pretty p-6 text-left text-xl sm:px-20 flex flex-col md:flex-row items-center justify-between md:p-8 my-1 lg:my-12"
      >
        <div id="theater-text" className="md:w-1/2 space-y-4">
          <h1
            className="mx-auto mb-10 text-balance text-left text-3xl lg:text-5xl font-semibold tracking-wide text-gray-900 dark:text-gray-100 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]"
          >
            Nuestra Misión
          </h1>
          <p>
            Entender y satisfacer las necesidades tecnológicas de nuestros clientes, ofreciendo soluciones integrales y productos confiables a través de una plataforma de comercio electrónico transparente y con un fuerte enfoque en la construcción de relaciones duraderas.
          </p>
        </div>
        <div id="theater" className="mt-6 md:mt-0 md:w-1/2">
          <img
            className="object-cover w-full h-full rounded-md shadow-lg"
            height={500}
            src="/nosotros/Mision.webp"
            style={{
              aspectRatio: "812/556",
              objectFit: "cover",
            }}
            width={500}
          />
        </div>
      </section>

      <section
        className="max-w-[1400px] w-full mx-auto gap-4 lg:gap-10 text-pretty p-6 text-left text-xl sm:px-20 flex flex-col md:flex-row items-center justify-between md:p-8 my-1 lg:my-12"
      >
        <div id="trophies" className="mt-6 md:mt-0 md:w-1/2">
          <img
            className="object-cover w-full h-full rounded-md shadow-lg"
            height={556}
            src="/nosotros/Vision.webp"
            style={{
              aspectRatio: "812/556",
              objectFit: "cover",
            }}
            width={812}
          />
        </div>
        <div id="trophies-text" className="md:w-1/2 space-y-4">
          <h1
            className="mx-auto mb-10 text-balance text-left text-3xl lg:text-5xl font-semibold tracking-wide text-gray-900 dark:text-gray-100 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]"
          >
            Nuestra Visión
          </h1>
          <p>
            Ser la fuente de confianza número uno para la adquisición de tecnología en línea, reconocidos por nuestra experiencia, la calidad de nuestros productos y nuestro compromiso con el éxito tecnológico de nuestros clientes.
          </p>
        </div>
      </section>

      <section
        className="max-w-[1400px] w-full mx-auto gap-4 lg:gap-10 text-pretty p-6 text-left text-xl sm:px-20 flex flex-col md:flex-row items-center justify-between md:p-8 my-1 lg:my-12"
      >
        <div id="theater-text" className="md:w-1/2 space-y-4">
          <h1
            className="mx-auto mb-10 text-balance text-left text-3xl lg:text-5xl font-semibold tracking-wide text-gray-900 dark:text-gray-100 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]"
          >
            Nuestra Historia
          </h1>
          <p>
            Bienvenidos a la historia de Fenix Technology, un viaje impulsado por una profunda pasión por la tecnología y un compromiso inquebrantable con llevar las últimas innovaciones directamente a tus manos. Desde nuestros humildes comienzos en el 2010, hemos crecido hasta convertirnos en tu destino de confianza para descubrir y adquirir lo mejor del mundo tecnológico.
          </p>
          <Link
            to={'/about/nuestra-historia'}
            className="btn-primary"
          >
            Leer más
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div id="theater" className="mt-6 md:mt-0 md:w-1/2">
          <img
            className="object-cover w-full h-full rounded-md shadow-lg"
            height={500}
            src="/nosotros/NuestraHistoria.avif"
            style={{
              aspectRatio: "812/556",
              objectFit: "cover",
            }}
            width={500}
          />
        </div>
      </section>

      <section
        className="text-xl text-left px-6 lg:px-20 lg:max-w-[70ch] text-pretty mx-auto my-4 mt-10"
      >
        <h1
          className="text-3xl lg:text-5xl font-semibold text-center text-wrap mx-auto mb-5 tracking-wide text-gray-900 dark:text-gray-100 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]"
        >
          Nuestros Valores
        </h1>

        <p>
          En Fenix Technology, somos más que una empresa, somos una comunidad unida por valores sólidos que guían cada una de nuestras acciones.
        </p>
      </section>

      <section className="w-full max-w-[1400px] grid lg:grid-cols-10 auto-rows-[30rem] gap-4 mx-auto p-6 md:p-8 lg:p-12">
        {/* Sección 1 */}
        <BentoItem
          title="Confianza"
          description="La confianza es el pilar fundamental de cada relación que construimos en Fenix Technology. Sabemos que al elegirnos para sus necesidades tecnológicas en línea, nuestros clientes depositan su fe en nuestra promesa de calidad, servicio y seguridad. Nos comprometemos a honrar esa confianza en cada interacción"
          url="/nosotros/Confianza.avif" 
          classCol="lg:col-span-6"
          classMax="max-w-2xl"
        />

        {/* Sección 2 */}
        <BentoItem
          title="Responsabilidad"
          description="En Fenix Technology, la responsabilidad es un compromiso firme con la excelencia y la integridad en cada aspecto de nuestro negocio. Asumimos plenamente la responsabilidad de nuestras acciones y del impacto que generamos en nuestros clientes, nuestro equipo, nuestros socios y la comunidad en general."
          url="/nosotros/Responsabilidad.avif"
          classCol="lg:col-span-4"
          classMax="max-w-xl"
        />

        {/* Sección 3 */}
        <BentoItem
          title="Compromiso con la Tecnología"
          description="En Fenix Technology, nuestro compromiso con la tecnología va más allá de la simple venta; es la esencia de nuestra identidad. Somos apasionados creyentes en el poder transformador de la tecnología y esta convicción impulsa cada aspecto de nuestro negocio."
          description2="Nuestro compromiso con la tecnología es una promesa inquebrantable de que siempre estaremos informados, apasionados y dedicados a ofrecer lo mejor del universo tecnológico a nuestros clientes, ayudándoles a navegar y prosperar en la era digital."
          url="/nosotros/Compromiso.avif"
          classCol="lg:col-span-10"
          classMax="max-w-7xl"
        />

        {/* Sección 4 */}
        <BentoItem
          title="Aprendizaje"
          description="El aprendizaje continuo es mucho más que una política; es un principio fundamental que define nuestra cultura. Reconocemos la naturaleza dinámica y en constante evolución del mundo tecnológico, y por ello, hemos integrado el aprendizaje en el tejido mismo de nuestra organización."
          url="/nosotros/Aprendizaje.avif"
          classCol="lg:col-span-4"
          classMax="max-w-xl"
        />

        {/* Sección 5 */}
        <BentoItem
          title="Trabajo en equipo"
          description="El trabajo en equipo y la colaboración son pilares fundamentales de nuestra cultura. Creemos que la unión de talentos, perspectivas y esfuerzos es la clave para alcanzar nuestros objetivos y brindar una experiencia excepcional a nuestros clientes."
          url="/nosotros/Trabajo.avif"
          classCol="lg:col-span-6"
          classMax="max-w-2xl"
        />

        {/* Sección 6 */}
        <BentoItem
          title="Vocación de Servicio"
          description="Nuestra vocación de servicio es el alma de nuestra relación con cada cliente. No consideramos la atención al cliente como una tarea, sino como una oportunidad genuina y apasionada para ayudar, guiar y asegurar la completa satisfacción de quienes confían en nosotros para sus necesidades tecnológicas."
          url="/nosotros/Vocacion.webp"
          classCol="lg:col-span-6"
          classMax="max-w-2xl"
        />

        {/* Sección 7 */}
        <BentoItem
          title="Innovación"
          description="En Fenix Technology, la innovación es la fuerza vital que impulsa nuestra evolución y nos permite ofrecer a nuestros clientes las soluciones tecnológicas más avanzadas y emocionantes del mercado. No nos conformamos con seguir las tendencias; aspiramos a definirlas, liderando el camino hacia el futuro de la tecnología."
          url="/nosotros/Innovacion.avif"
          classCol="lg:col-span-4"
          classMax="max-w-xl"
        />
      </section>
      <section>
        <Numeros />
      </section>
    </div>
  );
};

export default AboutPage;

