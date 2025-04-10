import BlogPostsList from '@/pages/BlogPostsList';

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

const BlogPage = () => {
  return (
    <div className="container mx-auto py-8 mt-[52px]">
        <BlogPostsList posts={blogData} />
    </div>
  );
};

export default BlogPage;