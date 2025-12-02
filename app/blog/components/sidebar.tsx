"use client";

import Link from "next/link";
import Image from "next/image";
import blogsData from "@/data/blogs.json";

interface Blog {
  id: string;
  title: string;
  image: string;
  date: string;
  tags: string[];
}

interface Service {
  name: string;
}

interface SidebarProps {
  currentBlogId: string;
}

export default function Sidebar({ currentBlogId }: SidebarProps) {
  const recentBlogs: Blog[] = blogsData.blogs
    .filter((blog: Blog) => blog.id !== currentBlogId)
    .slice(0, 4);

  const allTags: string[] = [
    ...new Set(
      blogsData.blogs.flatMap((blog: Blog) => blog.tags)
    ),
  ];

  const services: Service[] = blogsData.services ?? [];

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Type keyword here..."
            className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5..." />
            </svg>
          </button>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index}>
              <Link
                href="#"
                className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group"
              >
                <span>{service.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0..."
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Blogs */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Blogs</h3>
        <div className="space-y-4">
          {recentBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="flex gap-4 group"
            >
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-1">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag, index) => (
            <Link
              key={index}
              href="#"
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Brochure */}
      <div className="gradient-primary rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Download Brochure</h3>
        <p className="text-white/80 text-sm mb-6">
          With a focus on excellence & commitment to exceeding expectations, our
          experienced team is here to empower your business.
        </p>
        <div className="space-y-3">
          <a
            href="#"
            className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors"
          >
            <span>PDF Download</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5..." />
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors"
          >
            <span>DOC Download</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5..." />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
