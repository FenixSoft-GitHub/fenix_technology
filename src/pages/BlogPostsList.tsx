import BlogPostCard from '@/components/Blog/BlogPostCard';

const BlogPostsList = ({ posts }: { posts: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
    
  );
};

export default BlogPostsList;
