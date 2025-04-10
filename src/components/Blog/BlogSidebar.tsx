const BlogSidebar = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Categorías</h3>
      <ul>
        <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Equipos de Computación</a></li>
        <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Telefonía Celular</a></li>
        <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Seguridad y Vigilancia</a></li>
        {/* ... más categorías */}
      </ul>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Publicaciones Recientes</h3>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Título de la publicación reciente 1</a></li>
          <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Título de la publicación reciente 2</a></li>
          {/* ... más publicaciones recientes */}
        </ul>
      </div>

      {/* ... otros elementos de la barra lateral */}
    </div>
  );
};

export default BlogSidebar;