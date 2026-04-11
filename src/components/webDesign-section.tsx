import Link from "next/link";
import Image from "next/image";
import { PencilRuler, ArrowRight } from "lucide-react";
import ElectricBorder from "@/components/ui/shamCard";

export default function WebDesignSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-sham dark:bg-white/10 sm:w-32" />
          <p className="text-xs uppercase tracking-[0.25em] text-sham dark:text-white/45 text-center">
            Sometimes I write blogs, Most of the time, I write code.
          </p>
          <span className="h-px w-16 bg-sham dark:bg-white/10 sm:w-32" />
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold font-sham sm:font-sans tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            Want your own space on the internet?
          </h2>
          <p className="mt-5 text-sm font-bold leading-7 text-black dark:text-white/60 sm:text-base">
            From personal blogs to business websites, I help you bring your vision to life.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 24 }}
            className="transition-all duration-300 hover:-translate-y-1 group relative rounded-3xl bg-sham/80 dark:bg-white/4 p-6 backdrop-blur-xl"
          >

              <div className="relative z-10">
                {/* Badge */}
                <span className="inline-flex rounded-xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-white">
                  Blog Offer
                </span>

                {/* Icon */}
                <div className="mt-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <PencilRuler className="h-9 w-9 text-cyan-300" />
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-auto mt-6 h-px w-20 bg-white/10" />

                {/* Content */}
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Want your own blog?
                  </h3>

                  <p className="mt-5 text-base leading-8 text-white/70">
                    I will build you a custom blog setup for{" "} <span className="text-xs ">$250</span>{" "}
                    <span className="font-semibold text-cyan-300">$80</span>
                    <br />
                    <span className="text-sm text-voke">A gift to my readers! Offer limited to the first 3 clients.</span>
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4 text-sm text-white/72">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    Perfect for creators & writers
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    Fast, clean & responsive
                  </li>
                </ul>

                {/* CTA */}
                <div className="mt-10">
                  <Link
                    href="https://wa.me/254714597644?text=Hi%2C%20I%20want%20to%20claim%20the%20%2480%20blog%20offer.%20Is%20a%20slot%20still%20available%3F"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-linear-to-r from-sham to-voke px-5 py-4 text-base font-semibold text-white hover:scale-[1.01]"
                  >
                    Claim Your Spot
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
          </ElectricBorder>

          {/* Card 2 */}
          <ElectricBorder
            color="#0019ff"
            speed={1}
            chaos={0}
            style={{ borderRadius: 24 }}
            className="transition-all duration-300 hover:-translate-y-1 group relative rounded-3xl bg-sham/80 dark:bg-white/4 p-6 backdrop-blur-xl"
          >

              <div className="relative z-10">
                {/* Logo-ish Header */}
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

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-white/10" />

                {/* Content */}
                <div className="mt-10 text-left">
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Need a website for your business?
                  </h3>

                  <p className="mt-5 text-base leading-8 text-white/70">
                    Bespoke <span className="text-voke">Digital Solutions</span> for serious brands. From custom UI/UX to robust e-commerce and SEO strategy tailored for brand growth. <span className="text-voke">Team Webmeka</span> has you covered. 
                    <br />
                    Visit our website to see how we can help your business thrive online.
                  </p>
                </div>

                {/* Features */}
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

                {/* CTA */}
                <div className="mt-15">
                  <Link
                    href="https://webmeka.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-violet-300/20 bg-linear-to-r from-indigo-500/70 to-violet-500/80 px-5 py-4 text-base font-semibold text-white hover:scale-[1.01]"
                  >
                    Visit Webmeka
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
}