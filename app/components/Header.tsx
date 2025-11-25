import Image from "next/image";

export default function Header() {
  return (
    <header className="w-[70%] mx-auto bg-white flex items-center justify-between py-2 px-8 rounded-sm shadow-sm mb-32">
     
      <div className="text-2xl font-bold text-blue-600">
        <Image src="/logo.svg" alt="Logo" width={200} height={100} />
      </div>

      <nav className="flex items-center justify-center gap-15 mx-auto">
        <a href="#" className="text-sky-700 font-medium hover:underline">
          Careers
        </a>
        <a href="#" className="text-sky-700 font-medium hover:underline">
          Success Story
        </a>
        <a href="#" className="text-sky-700 font-medium hover:underline">
          Growth Pathways
        </a>
</nav>
        <button className="ml-6 bg-sky-700 text-white font-semibold px-10 py-3 rounded-full hover:bg-sky-600 transition">
          Apply
        </button>
      
    </header>
  );
}
