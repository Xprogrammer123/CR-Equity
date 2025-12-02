import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "../components/sidebar";
import BlogCard from "../components/blogcard";
import CTA from "../components/cts";
import blogsData from "@/data/blogs.json";


// ✅ Define TypeScript types
interface Blog {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  tags: string[];
}

interface BlogParams {
  params: {
    id: string;
  };
}

interface MetadataParams {
  params: {
    id: string;
  };
}

// ✅ Static paths generation
export async function generateStaticParams() {
  return blogsData.blogs.map((blog: Blog) => ({
    id: blog.id,
  }));
}

// ✅ Metadata generation with type
export async function generateMetadata({ params }: MetadataParams) {
  const blog = blogsData.blogs.find((b: Blog) => b.id === params.id);

  if (!blog) {
    return {
      title: "Blog Not Found - TechXen",
    };
  }

  return {
    title: `${blog.title} - TechXen Blog`,
    description: blog.excerpt,
  };
}

// ✅ Main component
export default function BlogDetails({ params }: BlogParams) {
  const blog = blogsData.blogs.find((b: Blog) => b.id === params.id);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogsData.blogs
    .filter(
      (b: Blog) => b.id !== blog.id && b.category === blog.category
    )
    .slice(0, 3);

  const contentParagraphs = blog.content.split("\n\n");

  return (
    <>
     

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <Sidebar currentBlogId={blog.id} />
            </aside>

            {/* Main Blog */}
            <article className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Author / Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={blog.authorImage}
                      alt={blog.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium text-gray-900">
                    {blog.author}
                  </span>
                </div>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5..." />
                  </svg>
                  <span>
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {blog.title}
              </h1>

              <div className="prose prose-lg max-w-none mb-10">
                {contentParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags and Share */}
              <div className="border-t border-b border-gray-200 py-6 mb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-gray-900">Tags:</span>
                    {blog.tags.map((tag, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  {/* Share Icons (You already have them perfect) */}
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">Share:</span>
                    {/* ...your SVG icons */}
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Leave a Comment
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  ></textarea>
                  <button type="submit" className="btn-primary flex items-center gap-2">
                    Submit Comment
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354..."
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related Articles
              </h2>
              <p className="text-gray-600">
                Explore more articles in {blog.category}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog: Blog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
