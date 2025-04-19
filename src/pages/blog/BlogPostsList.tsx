import { BlogPostCard } from '@/components/blog/BlogPostCard';

interface ParsedBlogPost {
  metadata: {
    title: string;
    date: string;
    author: string;
    slug: string;
    tags?: string[];
    imageUrl?: string;
    excerpt?: string;
  };
  html: string;
}

const BlogPostsList = ({ posts }: { posts: ParsedBlogPost[] }) => {
  if (!posts.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No se encontraron publicaciones.
      </div>
    );
  }

  return (
    <div className="container mx-auto mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogPostCard
            key={post.metadata.slug}
            post={{
              title: post.metadata.title,
              date: post.metadata.date,
              author: post.metadata.author,
              slug: post.metadata.slug,
              tags: post.metadata.tags,
              excerpt: post.metadata.excerpt,
              imageUrl: post.metadata.imageUrl,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostsList;
