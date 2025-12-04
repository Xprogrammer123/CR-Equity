// app/blog/page.tsx
"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import BlogCard from "./components/blogCard";
import Pagination from "./components/pagination";
import blogs from "@/lib/blog.json";
import { Search, Menu } from "lucide-react";
import Image from "next/image";
import CTASection from "./components/ctaSection";

const POSTS_PER_PAGE = 8;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter blogs based on search
  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return blogs;

    const query = searchQuery.toLowerCase();
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query) ||
        (blog.content && blog.content.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredBlogs.slice(start, start + POSTS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/blog" className="flex items-center gap-3 group">
            <div className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={180}
                height={80}
                className="w-40 md:w-48"
              />
            </div>
          </Link>

          <div className="relative w-full sm:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder-gray-500 text-gray-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            )}
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-white">
        <section className="px-2 md:px-38 mx-auto py-16">
          {/* Results Counter */}
          <p className="text-2xl text-black mb-8 font-bold">
            {searchQuery ? (
              <>
                Found {filteredBlogs.length} post
                {filteredBlogs.length !== 1 ? "s" : ""} for “{searchQuery}”
              </>
            ) : (
              <>
                {blogs.length} Blog Post{blogs.length !== 1 ? "s" : ""}
              </>
            )}
          </p>

          {/* No Results */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">
                No posts found matching “{searchQuery}”
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 text-blue-600 font-semibold hover:underline"
              >
                ← Clear search
              </button>
            </div>
          ) : (
            <>
              {/* Blog Grid - Only 8 per page */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {paginatedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </section>

        <CTASection />
      </main>
    </>
  );
}