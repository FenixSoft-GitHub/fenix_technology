const AboutPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Sobre Fenix Technology
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
          <p className="text-gray-700">
            Proporcionar soluciones tecnológicas innovadoras y accesibles para todos.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Visión</h2>
          <p className="text-gray-700">
            Ser líderes en el mercado tecnológico, destacando por nuestra calidad y servicio al cliente.
          </p>
        </div>
      </section>
      <section className="prose lg:prose-xl max-w-none">
        <p className="text-lg text-gray-700">
          Somos una empresa líder en tecnología, dedicada a proporcionar las mejores soluciones en equipos y accesorios.
        </p>
      </section>
    </main>
  )
}

export default AboutPage
