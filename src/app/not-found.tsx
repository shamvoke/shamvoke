import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex flex-col min-h-[80svh] items-center justify-center text-center px-6 pt-16 max-w-xl mx-auto">
      
      <div className="relative w-full h-[300px] mb-6">
        <Image
          src="/404.gif"
          alt="404 - Page not found"
          fill
          className="object-contain"
        />
      </div>

      <p className="font-bold text-lg mb-2">
        Shamthing went wrong!
      </p>

      <p className="text-gray-400 mb-6">
         The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-2 rounded-md text-white font-bold hover:bg-voke transition bg-gradient-to-r from-sham to-voke"
      >
        Back to Home
      </Link>

    </section>
  )
}