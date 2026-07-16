"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { LuPencilRuler, LuArrowRight } from "react-icons/lu";
import ElectricBorder from "@/components/ui/shamCard";

export default function WebDesignSection() {
  return (
    <section className="relative overflow-hidden py-15 px-4 sm:px-6 lg:px-8">
       <Script
        src="https://www.paypal.com/sdk/js?client-id=BAAHgovGdT1eUnCOWewBHGivlBTuOWMRZdoxKpOBgSF4lr7MkUrLQE412TKGHm4p0ypcDW9rJ2HtEBSG5c&components=hosted-buttons&disable-funding=venmo&currency=USD"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onLoad={() => {
          if (window.paypal) {
            window.paypal.HostedButtons({
              hostedButtonId: "5EFTMLN5LRNGA"
            }).render("#paypal-container-5EFTMLN5LRNGA");
          }
        }}
      />
      
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
                  Blog By Sham
                </span>

                <div className="mx-auto mt-6 h-px w-20 bg-white/10" />

                <div className="mt-10 flex justify-center">
                <div
                  id="paypal-container-5EFTMLN5LRNGA"
                  className="w-full max-w-sm"
                />
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