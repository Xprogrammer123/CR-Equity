// components/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';

export default function BlogCard({ blog }: { blog: any }) {
  const isRealImage = blog.thumb && blog.thumb.startsWith('http');

  return (
    <Link href={`/blog/${blog.slug}`} className="block group">
     
        {/* Image Section */}
        <div className="relative w-full h-[48vh] bg-gray-300 rounded-lg">
          {isRealImage ? (
            <Image
              src={blog.thumb}
              alt={blog.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-5xl font-extrabold text-gray-700 tracking-wider">
                {blog.thumb || '570×410'}
              </span>
            </div>
          )}
        </div>

        {/* Content — now overlays the bottom of the image slightly */}
        <div className="relative px-8 pb-10 pt-8 bg-white shadow-xl rounded-lg -mt-20 mx-8">
          <div className="flex items-center gap-6 text-sm text-black mb-4">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4"/>
            <span className='text-lg text-gray-400 '>{blog.date}</span>  
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
             <span className='text-lg text-gray-400 '>{blog.author}</span>  
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
  );
}