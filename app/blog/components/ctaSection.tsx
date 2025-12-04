// components/CTASection.tsx  (or paste directly into your page)
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-blue-700 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side — Text */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              At CR equity AI, We are
              <br />
              Committed To Businesses
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our IT specialists to discuss your objectives and explore how our innovative solutions can propel.
            </p>
          </div>

          {/* Right Side — Buttons (aligned to the right on large screens) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-end items-start lg:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-blue-700 font-semibold px-8 py-5 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/solutions"
              className="group inline-flex items-center gap-3 border-2 border-white text-white font-semibold px-8 py-5 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
            >
              Explore Solution
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}