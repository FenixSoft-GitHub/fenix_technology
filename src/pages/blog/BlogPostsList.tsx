import BlogPostCard from "@/components/Blog/BlogPostCard";


interface ParsedBlogPost {
  metadata: {
    title: string;
    date: string;
    author: string;
    slug: string;
    tags?: string[];
    imageUrl?: string;
    excerpt?: string;
    classCol: string;
    classMax: string;
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
    <section className="w-full max-w-[1400px] grid lg:grid-cols-10 auto-rows-[30rem] gap-6 mx-auto">
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
              classCol: post.metadata.classCol,
              classMax: post.metadata.classMax
            }}
          />
        ))}
    </section>
  );
};

export default BlogPostsList;