'use client';

import Image from 'next/image';

export default function AuthorCard() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800">
      <div className="shrink-0">
        <Image
          src="/shamvoke.webp"
          alt="Sham Voke bio"
          width={96}
          height={96}
          className="rounded-full border-2 border-sham dark:border-voke"
        />
      </div>
      <div className="flex flex-col gap-1 text-center sm:text-left">
        <h3 className="text-xl font-bold text-shamvoke">Sham voke</h3>
        <p className="text-gray-600 dark:text-gray-400 italic">
          I&apos;m Sham, a creative developer based in Nairobi, building at the intersection of code, design, and creativity.
        </p>
        <p className="mt-2 text-lg text-sham dark:text-gray-100 font-voke">
          ✍️ I write to learn and publish to share ✨ <span className='hidden lg:inline'>Creativity fueled by curiosity 💡</span> <br /> <span className='lg:hidden'>🎨 Creativity fueled by curiosity 💡</span>
        </p>
      </div>
    </div>
  );
}