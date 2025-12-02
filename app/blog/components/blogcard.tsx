"use client";

import Link from "next/link";
import Image from "next/image";

// ✅ Define type for a single blog
interface Blog {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  authorImage?: string; // optional if not always present
}

// ✅ Define props type
interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
      {/* Blog Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Blog Info */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          {/* Date */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11 6.5a.5..." />
            </svg>
            <span>{formattedDate}</span>
          </div>

          {/* Author */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3..." />
            </svg>
            <span>{blog.author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>

        {/* Read More */}
        <Link
          href={`/blog/${blog.id}`}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793..."
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
