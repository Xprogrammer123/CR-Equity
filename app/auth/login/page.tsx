// app/auth/login/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { z } from "zod";

// Zod validation schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginFormData, string>>
  >({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    try {
      loginSchema.parse(formData);
      // If validation passes
      setSuccessMessage("Login successful!");
      console.log("Login attempt:", formData);
      // Reset form
      setFormData({ email: "", password: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {};
        if (error.issues && Array.isArray(error.issues)) {
          error.issues.forEach((err) => {
            const field = err.path[0] as keyof LoginFormData;
            if (field) {
              fieldErrors[field] = err.message;
            }
          });
        }
        setErrors(fieldErrors);
      }
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleLinkedInLogin = () => {
    console.log("LinkedIn login clicked");
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

        <div className="grid grid-cols-1 lg:grid-cols-[0.67fr_1.33fr] gap-0 items-stretch min-h-screen">
          {/* LEFT: Form - 40% on desktop, 100% on mobile */}
          <div className="lg:col-span-1 py-6 md:py-8 lg:py-8 px-3 md:px-6 lg:px-8 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
              Welcome Back
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-6 md:mb-8 lg:mb-10">
              to Crequity.ai
            </h3>

            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              {successMessage && (
                <div className="p-3 bg-green-50 border border-green-300 rounded-lg text-green-700 text-sm">
                  {successMessage}
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-xs md:text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-lg border transition text-xs md:text-sm placeholder:text-gray-500 focus:outline-none ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-xs md:text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-lg border transition text-xs md:text-sm placeholder:text-gray-500 focus:outline-none ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1">
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm md:text-base py-3 md:py-3.5 rounded-lg transition transform hover:scale-105 shadow-lg mt-6"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-gray-500 text-xs md:text-sm">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Join Section */}
              <div>
                <p className="text-center text-gray-700 font-semibold text-sm md:text-base mb-4">
                  Join Crequity with 10K+ Users!
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {/* Google Login */}
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-sm md:text-base py-3 md:py-3.5 rounded-lg transition"
                  >
                    <svg
                      className="w-4 md:w-5 h-4 md:h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="hidden sm:inline">Google</span>
                  </button>

                  {/* LinkedIn Login */}
                  <button
                    type="button"
                    onClick={handleLinkedInLogin}
                    className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-sm md:text-base py-3 md:py-3.5 rounded-lg transition"
                  >
                    <svg
                      className="w-4 md:w-5 h-4 md:h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                        fill="#0A66C2"
                      />
                    </svg>
                    <span className="hidden sm:inline">LinkedIn</span>
                  </button>
                </div>
              </div>

              <p className="text-center text-gray-600 text-xs md:text-sm mt-6">
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

          {/* RIGHT: Hero Image - 60% */}
          <div className="hidden lg:block lg:col-span-1 h-full">
            <Image
              src="/cr.jpeg"
              alt="Crequity.ai Platform"
              width={1800}
              height={1600}
              className="w-full h-full object-contain rounded-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
