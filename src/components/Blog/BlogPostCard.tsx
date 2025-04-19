import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  slug: string;
  tags?: string[];
  imageUrl?: string;
  excerpt?: string;
}

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
	return (
		<div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mt-8 hover:shadow-lg transition-shadow flex flex-col gap-4"
			key={post.slug}
		>
			{post.imageUrl && (
				<img
					src={post.imageUrl}
					alt={post.title}
					className="w-full h-48 object-cover"
          style={{ maskImage: 'linear-gradient(black 70%, transparent)' }} 
        />
      )}
      <div className="flex flex-col justify-between h-full p-4 flex-grow">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100  mb-3">
            <Link 
              to={`/blog/${post.slug}`} 
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {post.title}
            </Link>
          </h2>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          {post.excerpt && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
          )}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-2">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700  text-gray-600 dark:text-gray-100 shadow-md capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mt-4">
          <Link 
            to={`/blog/${post.slug}`} 
            className="btn-primary"
          >
            Leer más
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};