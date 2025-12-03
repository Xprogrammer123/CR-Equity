// app/blog/[slug]/page.tsx
import blogs from '@/lib/blog.json';
import BlogPost from '../components/blogPost';
import Comment from '../components/Comment';
import { notFound } from 'next/navigation';

// This tells Next.js to pre-generate all blog pages at build time
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug, // Must match exactly
  }));
}

// NEW Next.js 15 pattern: params is a Promise!
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ← This is the magic line

  // Find the blog post (decode in case of special chars)
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const recentBlogs = blogs.filter((b) => b.id !== blog.id);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">


         {/* Sidebar */}
        <aside className="lg:col-span-1">
          <h3 className="text-2xl font-bold mb-8">Recent Blogs</h3>
          <div className="space-y-6">
            {recentBlogs.map((b) => (
              <div key={b.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
                <div className="bg-gray-300 rounded-lg w-24 h-24 flex items-center justify-center text-xs text-gray-600">
                  100x100
                </div>
                <div>
                  <p className="text-sm text-gray-500">{b.date}</p>
                  <h4 className="font-semibold text-gray-900 line-clamp-2 mt-1">
                    {b.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </aside>
        
        {/* Main Content */}
        <div className="lg:col-span-2">
          <BlogPost blog={blog} />

          {/* Comments */}
          <div className="mt-20 border-t pt-10">
            <h2 className="text-3xl font-bold mb-8">
              Blog Comments ({blog.comments?.length || 0})
            </h2>
            <div className="space-y-8">
              {blog.comments?.map((c: any, i: number) => (
                <Comment key={i} comment={c} />
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}