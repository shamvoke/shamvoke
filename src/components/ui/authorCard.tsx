import Image from 'next/image';

export default function AuthorCard() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800">
      <div className="shrink-0">
        <Image
          src="/BigVokeLogo.svg"
          alt="Sham Voke bio picture."
          width={128}
          height={128}
          className="rounded-full size-32"
        />
      </div>
      <div className="flex flex-col gap-1 text-center sm:text-left">
        <h3 className="text-xl font-bold text-shamvoke">Sham Voke</h3>
        <p className="text-gray-600 dark:text-gray-400 italic">
          A Creative Designer And Web Developer. Building at the intersection of code, design, and creativity.
        </p>
        <p className="mt-2 text-lg text-sham dark:text-gray-100 font-voke">
          🎨 Creativity fueled by curiosity 💡
        </p>
      </div>
    </div>
  );
}