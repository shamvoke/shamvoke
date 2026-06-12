import Image from "next/image";
import BackButton from "@/components/ui/backButton"; // Adjust path if your file is named differently

export default function NotFound() {
  return (
    <section className="flex flex-col min-h-[80svh] items-center justify-center text-center px-6 py-16 max-w-2xl mx-auto">
      
      {/* Top Label */}
      <p className="text-sham dark:text-voke font-bold tracking-[0.3em] uppercase text-lg md:text-base">
        Error
      </p>

      {/* The 404 Display */}
      <div className="flex items-center justify-center mb-6 select-none">
        {/* First 4 */}
        <span className="text-[12rem] md:text-[16rem] font-black text-sham leading-none">
          4
        </span>
        
        {/* The Bree "0" */}
        <div className="relative size-36 md:size-46 transition-transform hover:scale-110 duration-300">
          <Image
            src="/bree/bree10.webp"
            alt="Bree Logo acting as the number zero"
            width={512}
            height={512}
            priority // Prioritizes loading this image since it is above the fold
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* Second 4 */}
        <span className="text-[12rem] md:text-[16rem] font-black text-sham leading-none">
          4
        </span>
      </div>

      {/* Bottom Label */}
      <h1 className="font-bold text-2xl md:text-4xl mb-4 uppercase tracking-widest text-foreground">
        Page Not Found
      </h1>

      <p className="text-muted-foreground mb-10 max-w-md">
         The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
      </p>

      <BackButton />

    </section>
  )
}