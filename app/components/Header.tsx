// app/components/Header.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Careers", href: "#" },
    { name: "Success Story", href: "#" },
    { name: "Growth Pathways", href: "#" },
  ];

  return (
    <>
      {/* Desktop + Tablet Header */}
      <header className="w-full max-w-[98%] mx-auto bg-gray-100 flex items-center justify-between py-4 px-2 md:px-12 lg:px-20 rounded-sm mb-20 md:mb-32">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={180}
            height={80}
            className="w-40 md:w-48"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 flex-1 justify-center bg-white max-w-2xl p-2 rounded-full">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 font-semibold hover:text-sky-800 hover:underline underline-offset-4 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Apply Button */}
        <Link href="/auth/signup">
          <button className="hidden md:block bg-blue-500 text-white font-semibold px-10 py-1 rounded-full hover:bg-sky-600 transition shadow-md">
            Apply
          </button>
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2"
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8 text-sky-700" />
        </button>
      </header>

      {/* Mobile Sidebar - Pure Tailwind Animation */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <Image src="/logo.svg" alt="Logo" width={140} height={60} />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <X className="w-7 h-7 text-gray-700" />
            </button>
          </div>

          <nav className="px-6 py-10 space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-medium text-gray-800 hover:text-sky-700 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="px-6 mt-12">
            <Link href="/auth/signup">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-sky-700 text-white font-bold text-lg py-4 rounded-full hover:bg-sky-600 transition shadow-lg"
              >
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
