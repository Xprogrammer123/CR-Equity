// app/blog/[slug]/page.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import blogs from "@/lib/blog.json";
import BlogPost from "../components/blogPost";
import Comment from "../components/Comment";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, Send } from "lucide-react";

type CommentType = {
  author: string;
  body: string;
  date: string;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = params as { slug: string };
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const [sidebarSearch, setSidebarSearch] = useState("");
  const [comments, setComments] = useState<CommentType[]>(blog.comments || []);

  const { register, handleSubmit, reset } = useForm();

  // Load comments from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`comments-${slug}`);
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, [slug]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`comments-${slug}`, JSON.stringify(comments));
  }, [comments, slug]);

  const onSubmitComment = (data: any) => {
    const newComment: CommentType = {
      author: data.author || "Anonymous",
      body: data.body,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    setComments((prev) => [...prev, newComment]);
    reset();
  };

  const filteredRecentBlogs = useMemo(() => {
    const others = blogs.filter((b) => b.id !== blog.id);
    if (!sidebarSearch.trim()) return others;

    const query = sidebarSearch.toLowerCase();
    return others.filter(
      (b) =>
        b.title.toLowerCase().includes(query) ||
        b.excerpt.toLowerCase().includes(query)
    );
  }, [sidebarSearch, blog.id]);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <h3 className="text-2xl font-bold mb-6 text-black">Recent Blogs</h3>

          {/* Sidebar Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search recent posts..."
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-6">
            {filteredRecentBlogs
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 5)
              .map((b) => (
                <div
                  key={b.id}
                  className="flex gap-4 pb-6 border-b border-gray-200 last:border-0"
                >
                  <Image
                    src={b.thumb}
                    alt={b.title}
                    width={80}
                    height={80}
                    className="object-cover w-20 h-20 rounded-lg flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm text-gray-500">{b.date}</p>
                    <h4 className="font-semibold text-gray-900 line-clamp-2 mt-1">
                      <Link
                        href={`/blog/${b.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
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

          {/* Comments Section */}
          <div className="mt-20 border-t pt-10">
            <h2 className="text-3xl font-bold mb-8">
              Blog Comments ({comments.length})
            </h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmit(onSubmitComment)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
              <div className="grid gap-4">
                <input
                  {...register("author")}
                  placeholder="Your name (optional)"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  {...register("body", { required: true })}
                  rows={4}
                  placeholder="Share your thoughts..."
                  className "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="self-start flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Send className="w-5 h-5" />
                  Post Comment
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-8">
              {comments.length === 0 ? (
                <p className="text-gray-500 text-center py-10">No comments yet. Be the first!</p>
              ) : (
                comments.map((c, i) => <Comment key={i} comment={c} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}