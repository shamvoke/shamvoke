import Link from "next/link";
import Image from "next/image";
import { LuPencilRuler, LuArrowRight } from "react-icons/lu";
import ElectricBorder from "@/components/ui/shamCard";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.956 14.05 .93 11.433.93c-5.436 0-9.863 4.37-9.867 9.8a9.74 9.74 0 0 0 1.492 5.108l-.101.549-.955 3.486 3.572-.937.545.324zm12.173-7.425c-.359-.18-2.126-1.048-2.455-1.167-.33-.119-.57-.18-.81.18-.24.359-.928 1.167-1.137 1.407-.21.24-.419.27-.778.09-.36-.18-1.517-.559-2.89-1.786-1.067-.952-1.788-2.128-1.998-2.487-.21-.358-.022-.553.158-.732.162-.161.359-.419.54-.629.18-.21.24-.359.36-.598.12-.24.06-.449-.03-.629-.09-.18-.81-1.946-1.11-2.664-.291-.7-.587-.607-.81-.617l-.69-.01c-.24 0-.629.09-.958.449-.33.359-1.258 1.228-1.258 2.996 0 1.767 1.288 3.473 1.468 3.712.18.24 2.535 3.871 6.141 5.428.857.371 1.527.593 2.05.759.86.273 1.643.234 2.261.142.689-.102 2.126-.869 2.426-1.708.3-.839.3-1.558.21-1.708-.09-.15-.33-.24-.69-.42z"/>
  </svg>
);

export default function WebDesignSection() {
  return (
    <section className="relative overflow-hidden py-15 px-4 sm:px-6 lg:px-8">
      
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-sham dark:bg-white/10 sm:w-32" />
          <p className="text-xs uppercase tracking-[0.25em] text-sham dark:text-white/45 text-center">
            Building at the intersection of code, design, and creativity.
          </p>
          <span className="h-px w-16 bg-sham dark:bg-white/10 sm:w-32" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold font-sham sm:font-sans tracking-tight text-black dark:text-white sm:text-4xl md:text-4xl">
            Like this site? I build personal spaces like this.
          </h2>
          <p className="mt-5 text-sm font-bold leading-7 text-black dark:text-white/60 sm:text-base">
            From personal blogs to business websites, I help you bring your vision to life.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 24 }}
            className="group relative rounded-3xl bg-black/80 dark:bg-white/4 p-6 backdrop-blur-xl"
          >

              <div className="relative z-10">
                <span className="inline-flex rounded-xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-bold text-voke">
                  Blog Setup: $120
                </span>

                <div className="mt-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <LuPencilRuler className="h-9 w-9 text-cyan-300" />
                  </div>
                </div>

                <div className="mx-auto mt-6 h-px w-20 bg-white/10" />

                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Launch a Personal Blog
                  </h3>

                  <p className="mt-5 text-base leading-8 text-white/70">
                    Includes a custom-designed blog website with up to 5 pages, plus 1-year domain and hosting.
                  </p>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-white/72">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    Tailored to your voice, content, and vision
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    Fast, clean, modern & responsive
                  </li>
                </ul>

                <div className="mt-10">
                  <Link
                    href="https://wa.me/254727756658?text=Hi%2C%20I%27d%20like%20to%20start%20a%20blog%20website.%20Can%20we%20talk%20about%20the%20details%3F"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-sham px-5 py-4 text-base font-semibold text-white hover:scale-[1.01]"
                  >
                    <WhatsAppIcon className="h-6 w-6 text-green-500" />
                    Talk to Sham
                  </Link>
                </div>
              </div>
          </ElectricBorder>

          <ElectricBorder
            color="#0019ff"
            speed={1}
            chaos={0}
            style={{ borderRadius: 24 }}
            className="group relative rounded-3xl bg-black/80 dark:bg-white/4 p-6 backdrop-blur-xl"
          >

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Image 
                  src="/Logo.svg" 
                  alt="Webmeka creative design agency logo" 
                  className="h-12 w-12"
                  width={48} 
                  height={48}
                  />
                  <span className="text-2xl font-semibold tracking-tight">
                    WEBMEKA
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-white/10" />

                <div className="mt-10 text-left">
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Need a website for your business?
                  </h3>

                  <p className="mt-5 text-base leading-8 text-white/70">
                    Bespoke <span className="text-voke">Digital Solutions</span> for serious<span className="font-bold"> brands.</span> From custom UI/UX to robust e-commerce and SEO strategy. <span className="text-voke">Team WebMeka</span> has you covered. <span className="font-bold">Tailored for brand growth.</span>
                    <br />
                    Visit our website to see how we can help your business thrive online.
                  </p>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-white/72">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Tailored for businesses & startups
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Strategy, design & digital expertise
                  </li>
                </ul>

                <div className="mt-15">
                  <Link
                    href="https://webmeka.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-violet-300/20 bg-voke px-5 py-4 text-base font-semibold text-black hover:scale-[1.01]"
                  >
                    Visit WebMeka website
                    <LuArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
}