// app/blog/page.tsx
import BlogCard from './components/blogCard';
import blogs from '@/lib/blog.json';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className=" mx-auto px-38 py-16">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-16">
         Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}