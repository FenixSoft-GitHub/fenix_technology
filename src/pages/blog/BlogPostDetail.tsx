import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/shared/Loader';
import { importMarkdownFiles } from '@/utils/markdownUtils';
import { IoReturnUpBack } from 'react-icons/io5';

interface BlogPost {
  title: string;
  date: string;
  author: string;
  slug: string;
  tags?: string[];
  imageUrl?: string;
  excerpt?: string;
  content: string;
}

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const modules = await importMarkdownFiles();
        const parsed = modules.find((post) => post.metadata.slug === slug);

        if (!parsed) throw new Error('Archivo no encontrado');

        setPost({
          ...parsed.metadata,
          content: parsed.html,
        });
      } catch (error) {
        console.error('Error loading blog post:', error);
        setError('Error al cargar la publicación');
      } finally {
        setLoading(false);
      }
    };
    if (slug) loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <Loader />
        <div className="animate-pulse">
          <div className="bg-gray-100 rounded-lg h-96"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center text-red-600">
          ERROR: {error}
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center text-gray-600">
          Post no encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        {post.imageUrl && (
          <div className="relative h-96 mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center justify-between text-gray-500 dark:text-gray-300 mb-8">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>Por {post.author}</span>
        </div>
        <div className="prose prose-lg max-w-none mb-8 dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-md capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 group">
              <Link
                to={'/blog'}
                className="inline-flex items-center gap-2 text-base text-cyan-600 dark:text-cyan-400 hover:underline font-medium group"
              >
                Regresar
                <IoReturnUpBack className="w-6 h-6 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostDetail;