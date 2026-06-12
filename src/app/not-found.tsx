import Image from "next/image"
import BackButton from "@/components/ui/backButton";

export default function NotFound() {
  return (
    <section className="flex flex-col min-h-[80svh] items-center justify-center text-center px-6 pt-16 max-w-xl mx-auto">
      
      <div className="relative w-full h-[300px] mb-6">
        <Image
          src="/sham404.gif"
          alt="404 - Page not found"
          fill
          unoptimized = {true}
          className="object-contain"
        />
      </div>

      <p className="font-bold text-lg mb-2">
        Shamthing went wrong!
      </p>

      <p className="text-gray-400 mb-6">
         The page you are looking for does not exist or has been moved.
      </p>

      <BackButton />

    </section>
  )
}