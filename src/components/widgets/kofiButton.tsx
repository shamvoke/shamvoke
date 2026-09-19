export default function KofiButton() {
  return (
    <>
      <a
        href="https://ko-fi.com/P5P11VGNYT"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-[#72a4f2] text-white px-4 py-2 rounded-lg font-bold text-base shadow-sm transition-opacity duration-200 hover:opacity-90 no-underline"
      >
        <img
          src="https://storage.ko-fi.com/cdn/cup-border.png"
          alt="Ko-fi icon"
          className="w-6 mr-2 kofi-icon-animate"
        />
        Support me on Ko-fi
      </a>
      <style>{`
        .kofi-icon-animate { animation: kofi-wobble 3s infinite; }
        @keyframes kofi-wobble {
          0%, 100% { transform: rotate(0deg); }
          25%, 75% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </>
  );
}