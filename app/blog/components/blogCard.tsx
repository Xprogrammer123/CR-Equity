// components/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Share2 } from 'lucide-react';

export default function BlogCard({ blog }: { blog: any }) {
  const isRealImage = blog.thumb && blog.thumb.startsWith('http');

  // Get current page URL (works in browser)
  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/blog/${blog.slug}`
    : `https://yourdomain.com/blog/${blog.slug}`; // fallback, replace with your domain if needed

  const shareTitle = blog.title;
  const shareText = blog.excerpt || "Check out this blog post!";

  // Social share URLs
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="group relative"> {/* Wrapper to allow absolute positioning of share buttons */}
      <Link href={`/blog/${blog.slug}`} className="block">
        {/* Image Section */}
        <div className="relative w-full h-[48vh] bg-gray-300 rounded-lg overflow-hidden">
          {isRealImage ? (
            <Image
              src={blog.thumb}
              alt={blog.title}
              fill
              className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              priority
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-5xl font-extrabold text-gray-700 tracking-wider">
                {blog.thumb || '570×410'}
              </span>
            </div>
          )}

          {/* Share Buttons - Appear on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-3">
            <span className="flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-100 transition">
              <Share2 className="w-5 h-5 text-gray-700" />
            </span>
            
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-[#1877F2] text-white rounded-full shadow-lg hover:bg-[#166fe5] transition transform hover:scale-110"
              aria-label="Share on Facebook"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition transform hover:scale-110"
              aria-label="Share on X/Twitter"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a
              href={linkedinShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-[#0A66C2] text-white rounded-full shadow-lg hover:bg-[#004182] transition transform hover:scale-110"
              aria-label="Share on LinkedIn"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Content — overlays bottom of image */}
        <div className="relative px-8 pb-10 pt-8 bg-white shadow-xl rounded-lg -mt-20 mx-8">
          <div className="flex items-center gap-6 text-sm text-black mb-4">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4"/>
              <span className='text-lg text-gray-400'>{blog.date}</span>  
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className='text-lg text-gray-400'>{blog.author}</span>  
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
            {blog.excerpt}
          </p>

          <div className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
            Read More
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}