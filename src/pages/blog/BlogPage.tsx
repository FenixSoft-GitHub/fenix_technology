import { importMarkdownFiles } from '@/utils/markdownUtils';
import BlogPostsList from './BlogPostsList';
import { useEffect, useState } from 'react';
import { ParsedBlogPost } from '@/components/actions/markdownParser';
import { GrPowerReset } from 'react-icons/gr';

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<ParsedBlogPost[]>([]);

  useEffect(() => {
    const loadBlogPosts = async () => {
      const posts = await importMarkdownFiles();
      const sortedPosts = posts.sort((a, b) =>
        new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
      );
      setPosts(sortedPosts);
    };

    loadBlogPosts();
  }, []);

  // 🔍 Filtrado por término de búsqueda y tag
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.metadata.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.metadata.tags?.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  // 🏷️ Obtener tags únicos
  const uniqueTags = Array.from(new Set(posts.flatMap(post => post.metadata.tags || [])));

  return (
    <div className="container mx-auto dark:bg-gray-900 dark:text-gray-100 py-6">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <h1 className="mb-1 text-3xl font-bold text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
            Blog
          </h1>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <label htmlFor="tags-filter" className="text-sm font-medium ">
              Filtrar por Tags:
            </label>
            <select
              id='tags-filter'
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="px-4 py-2 border border-gray-400 shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 capitalize dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
            >
              <option value="">Todas las categorías</option>
              {uniqueTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            {selectedTag && (
              <button
                onClick={() => {
                  setSelectedTag(null);
                }}
                className="text-cyan-600 dark:text-cyan-400 hover:scale-110 transition-all duration-300 flex items-center gap-2 cursor-pointer rounded-full bg-gray-200 p-2 dark:bg-gray-700"
              >
                <GrPowerReset className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      <BlogPostsList posts={filteredPosts} />
    </div>
  );
};
