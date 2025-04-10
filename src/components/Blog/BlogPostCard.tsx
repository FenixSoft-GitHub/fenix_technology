import { Link } from 'react-router-dom'; // Si estás usando React Router para la navegación

const BlogPostCard = ({ post }: { post: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-[52px]">
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          <Link to={`/blog/${post.slug}`} className="hover:text-cyan-600">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
        <Link 
            to={`/blog/${post.slug}`} 
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;

