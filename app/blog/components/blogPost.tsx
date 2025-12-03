// components/BlogPost.tsx
import Image from 'next/image';
import { Calendar, User, MessageCircle } from 'lucide-react';

export default function BlogPost({ blog }: { blog: any }) {
  const isRealImage = blog.thumb && blog.thumb.startsWith('http');

  return (
    <>
      {/* Hero Image — Real or Placeholder */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
        {isRealImage ? (
          <Image
            src={blog.thumb}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full object-cover"
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhZPQAJOwPqTqL7nQAAAABJRU5ErkJggg=="
          />
        ) : (
          <div className="bg-gray-300 w-full h-96 md:h-[500px] flex items-center justify-center">
            <span className="text-6xl md:text-7xl font-extrabold text-gray-700 tracking-wider">
              {blog.thumb || '750×450'}
            </span>
          </div>
        )}
      </div>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-8 text-gray-600 text-lg">
          <span className="flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            {blog.date}
          </span>
          <span className="flex items-center gap-3">
            <User className="w-6 h-6" />
            {blog.author}
          </span>
          <span className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6" />
            {blog.comments?.length || 0} Comments
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700 mb-20">
        <p className="text-xl leading-relaxed text-gray-800">{blog.content}</p>

        {blog.sections?.map((section: any, i: number) => (
          <div key={i} className="mt-16 border-t pt-12 border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{section.body}</p>
          </div>
        ))}
      </div>
      <div>
  {isRealImage ? (
          <Image
            src={blog.thumb}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full object-cover"
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhZPQAJOwPqTqL7nQAAAABJRU5ErkJggg=="
          />
        ) : (
          <div className="bg-gray-300 w-full h-96 md:h-[500px] flex items-center justify-center">
            <span className="text-6xl md:text-7xl font-extrabold text-gray-700 tracking-wider">
              {blog.thumb || '750×450'}
            </span>
          </div>
        )}
      </div>
    </>
  );
}