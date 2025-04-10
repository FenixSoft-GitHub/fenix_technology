import { useParams } from 'react-router-dom';

// Datos de ejemplo (REEMPLAZA ESTO con tu lógica para obtener los datos del blog)
const blogData = [
  { id: 1, slug: 'mejor-laptop-2025', title: 'La Mejor Laptop para Estudiantes en 2025', date: '2025-04-01', author: 'Equipo de Tecnología', content: '<p>Contenido detallado sobre la mejor laptop para estudiantes...</p><p>Puedes agregar más párrafos e incluso imágenes aquí.</p>', imageUrl: '/img/Laptop.avif' },
  { id: 2, slug: 'camaras-seguridad-hogar', title: 'Guía para elegir cámaras de seguridad para tu hogar', date: '2025-03-25', author: 'Departamento de Seguridad', content: '<p>Información completa sobre cómo seleccionar las cámaras de seguridad adecuadas para tu hogar...</p>', imageUrl: '/img/Looking.avif' },
  { id: 3, slug: 'mejor-laptop-2025', title: 'La Mejor Laptop para Estudiantes en 2025', date: '2025-04-01', author: 'Equipo de Tecnología', content: '<p>Contenido detallado sobre la mejor laptop para estudiantes...</p><p>Puedes agregar más párrafos e incluso imágenes aquí.</p>', imageUrl: '/img/Laptop.avif' },
  { id: 4, slug: 'camaras-seguridad-hogar', title: 'Guía para elegir cámaras de seguridad para tu hogar', date: '2025-03-25', author: 'Departamento de Seguridad', content: '<p>Información completa sobre cómo seleccionar las cámaras de seguridad adecuadas para tu hogar...</p>', imageUrl: '/img/Looking.avif' },
  { id: 5, slug: 'mejor-laptop-2025', title: 'La Mejor Laptop para Estudiantes en 2025', date: '2025-04-01', author: 'Equipo de Tecnología', content: '<p>Contenido detallado sobre la mejor laptop para estudiantes...</p><p>Puedes agregar más párrafos e incluso imágenes aquí.</p>', imageUrl: '/img/Laptop.avif' },
  { id: 6, slug: 'camaras-seguridad-hogar', title: 'Guía para elegir cámaras de seguridad para tu hogar', date: '2025-03-25', author: 'Departamento de Seguridad', content: '<p>Información completa sobre cómo seleccionar las cámaras de seguridad adecuadas para tu hogar...</p>', imageUrl: '/img/Looking.avif' },
  // ... más publicaciones
];

const BlogPostDetail = () => {
  const { slug } = useParams();

  // Simula la obtención de la publicación basada en el slug
  const post = blogData.find(post => post.slug === slug);

  if (!post) {
    return <div className="py-10 text-center">Publicación no encontrada.</div>;
  }

  return (
    <div className="container mx-auto py-8 mt-[52px]">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="w-full object-cover mb-6" style={{ maxHeight: '500px' }} />
        )}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500 text-sm mb-2">Publicado el {post.date} por {post.author}</p>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;