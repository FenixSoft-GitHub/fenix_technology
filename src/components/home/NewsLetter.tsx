const NewsLetter = () => {
    return (
        <div className="relative bg-gray-500 text-white py-20">
          {/* IMAGEN DE FONDO */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70 h-full bg-[url('/img/img3.webp')]"
          />
    
          {/* CONTENIDO DE NEWSLETTER */}
          <div className="container mx-auto z-10 relative">
            <div className="w-full text-black bg-white p-8 space-y-5 md:w-[50%] lg:w-[40%] rounded-md">
              <p className="text-xs uppercase font-semibold">
                Suscríbete a nuestro boletín y recibe promociones exclusivas
              </p>
              <p className="text-xs font-medium w-[80%] leading-4">
                Introduce tu correo para recibir ofertas
              </p>
              <form className="flex flex-col gap-5 xl:flex-row">
                <input
                  type="email"
                  className="border border-slate-300 focus:outline-none rounded-md py-2 px-4 w-full text-xs font-medium"
                  placeholder="Correo Electrónico"
                />
    
                <button className="bg-black text-white font-semibold rounded-full uppercase tracking-wider py-3 text-xs xl:px-5 transition duration-300 ease-in-out hover:scale-105 shadow-lg">
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </div>
      )
}

export default NewsLetter