// app/auth/signup/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Upload, X, CheckCircle } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import { z } from "zod";
import "react-international-phone/style.css";

// Zod validation schema
const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    businessPlan: z
      .instanceof(File, { message: "Business plan PDF is required" })
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [file, setFile] = useState<File | null>(null);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof SignupFormData, string>>
  >({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.type === "application/pdf") {
      setFile(f);
      setErrors((prev) => ({ ...prev, businessPlan: "" }));
    } else {
      alert("Only PDF files allowed");
      e.target.value = "";
    }
  };

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
      signupSchema.parse({
        fullName: formData.fullName,
        email: formData.email,
        phone,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        businessPlan: file,
      });

      // If validation passes
      setSuccessMessage("Form submitted successfully!");
      console.log("Form data:", {
        ...formData,
        phone,
        businessPlan: file?.name,
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setPhone("");
      setFile(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof SignupFormData, string>> = {};
        if (error.issues && Array.isArray(error.issues)) {
          error.issues.forEach((err) => {
            const field = err.path[0] as keyof SignupFormData;
            if (field) {
              fieldErrors[field] = err.message;
            }
          });
        }
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto px-3 md:px-4 lg:px-6 py-4 md:py-6 lg:py-8">
        <div className="mb-6 md:mb-8">
          <Image
            src="/logo.svg"
            alt="Apply"
            width={200}
            height={80}
            className="w-32 md:w-40"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.85fr] gap-0 items-stretch min-h-screen">
          {/* LEFT: Form - 26% on desktop, 100% on mobile */}
          <div className="lg:col-span-1 py-6 md:py-8 lg:py-8 px-3 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
              Hi
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-4 md:mb-6 lg:mb-8">
              Welcome to Crequity.ai
            </h3>

            <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
              {successMessage && (
                <div className="p-3 bg-green-50 border border-green-300 rounded-lg text-green-700 text-sm">
                  {successMessage}
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs md:text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg border transition text-xs md:text-sm placeholder:text-gray-500 focus:outline-none ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-0.5">
                    {errors.fullName}
                  </p>
                )}
              </div>

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
                  className={`w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg border transition text-xs md:text-sm placeholder:text-gray-500 focus:outline-none ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs md:text-sm">
                  Phone Number
                </label>
                <PhoneInput
                  defaultCountry="us"
                  value={phone}
                  onChange={(phone) => {
                    setPhone(phone);
                    setErrors((prev) => ({ ...prev, phone: "" }));
                  }}
                  className={`w-full rounded-lg border transition text-xs md:text-sm ${
                    errors.phone
                      ? "border-red-500 focus-within:border-red-500"
                      : "border-gray-300 focus-within:border-blue-500"
                  }`}
                  inputClassName="px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-xs md:text-sm focus:outline-none"
                  style={
                    {
                      "--react-international-phone-height": "36px",
                    } as React.CSSProperties
                  }
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-0.5">{errors.phone}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg border transition text-xs md:text-sm placeholder:text-gray-500 focus:outline-none ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-0.5">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs md:text-sm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg border transition text-xs md:text-sm placeholder:text-gray-500 focus:outline-none ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-0.5">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* PDF Upload */}
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 md:mb-2 text-xs md:text-sm">
                  Upload Business Plan (PDF)
                </label>
                {!file ? (
                  <label className="block border-2 border-dashed border-gray-300 rounded-lg p-3 md:p-4 text-center cursor-pointer hover:border-blue-500 transition">
                    <Upload className="w-6 md:w-8 h-6 md:h-8 mx-auto text-gray-400 mb-1.5 md:mb-2" />
                    <p className="text-gray-600 text-xs md:text-sm">
                      Drag & drop your PDF here
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 md:mt-1">
                      or click to select
                    </p>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFile}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="flex items-center justify-between bg-green-50 border border-green-300 rounded-lg p-2 md:p-3">
                    <div className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-green-600 shrink-0" />
                      <div className="min-w-0">
                        <p className="font-medium text-gray-800 text-xs md:text-sm truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="text-red-600 hover:text-red-800 shrink-0 ml-2"
                    >
                      <X className="w-4 md:w-5 h-4 md:h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-1.5 md:pt-2">
                <input
                  type="checkbox"
                  className="mt-0.5 w-3 md:w-4 h-3 md:h-4 accent-blue-600 shrink-0"
                />
                <label className="text-xs md:text-xs text-gray-600 leading-tight">
                  By creating your account in Crequity.ai, you agree to our{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Statement
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm md:text-base py-2 md:py-2.5 lg:py-3 rounded-lg transition transform hover:scale-105 shadow-lg mt-2"
              >
                Sign up
              </button>

              <p className="text-center text-gray-600 text-xs md:text-sm mt-2">
                Already have account?{" "}
                <a href="#" className="text-blue-600 font-bold hover:underline">
                  Login
                </a>
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
