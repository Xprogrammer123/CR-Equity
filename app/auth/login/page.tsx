// app/auth/login/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto px-3 md:px-4 lg:px-6 py-4 md:py-6 lg:py-8">
        <div className="mb-6 md:mb-8">
          <Image
            src="/logo.svg"
            alt="CR Equity"
            width={200}
            height={80}
            className="w-32 md:w-40"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.85fr] gap-0 items-stretch min-h-screen">
          {/* LEFT: Form - 26% on desktop, 100% on mobile */}
          <div className="lg:col-span-1 py-6 md:py-8 lg:py-8 px-3 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
              Welcome Back
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-4 md:mb-6 lg:mb-8">
              to Crequity.ai
            </h3>

            <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs md:text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition text-xs md:text-sm placeholder:text-gray-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs md:text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition text-xs md:text-sm placeholder:text-gray-500"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1 md:pt-2">
                <label className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="w-3 md:w-4 h-3 md:h-4 accent-blue-600 shrink-0"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-xs md:text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm md:text-base py-2 md:py-2.5 lg:py-3 rounded-lg transition transform hover:scale-105 shadow-lg mt-4"
              >
                Login
              </button>

              <p className="text-center text-gray-600 text-xs md:text-sm mt-4">
                Don't have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>

          {/* RIGHT: Hero Image - 74% */}
          <div className="hidden lg:block lg:col-span-1 h-full">
            <Image
              src="/cr.jpeg"
              alt="Crequity.ai Platform"
              width={1800}
              height={1600}
              className="w-full h-full object-cover rounded-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
