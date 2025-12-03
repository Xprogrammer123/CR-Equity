// app/blog/[slug]/page.tsx
import blogs from '@/lib/blog.json';
import BlogPost from '../components/blogPost';
import Comment from '../components/Comment';
import { notFound } from 'next/navigation';
import Link from "next/link"
import Image from "next/image"
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


      {/* Sidebar — Only 5 most recent blogs */}
<aside className="lg:col-span-1">
  <h3 className="text-2xl font-bold mb-8 text-black">Recent Blogs</h3>
  <div className="space-y-6">
    {recentBlogs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // newest first
      .slice(0, 5) // ← only the latest 5
      .map((b) => (
        <div key={b.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
         <Image
                     src={blog.thumb}
                     alt={blog.title}
                     width={1200}
                     height={600}
                     className="object-cover w-20 h-20"
                   />
          <div>
            <p className="text-sm text-gray-500">{b.date}</p>
            <h4 className="font-semibold text-gray-900 line-clamp-2 mt-1">
              <Link href={`/blog/${b.slug}`} className="hover:text-blue-600 transition-colors">
                {b.title}
              </Link>
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