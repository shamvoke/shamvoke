'use client';

import Script from 'next/script'

export default function LikeButton() {
  return (
    <>
    <button 
      className="
        iine-button 
        inline-flex items-center gap-2
        text-3xl font-bold no-underline
        transition-all duration-300 ease-in-out hover:scale-105
        [&.clicked]:text-voke
        cursor-pointer
      " 
      data-icon="💙"
      aria-hidden="true"
    >
    </button>
    <Script src="/js/iine.js" strategy="afterInteractive" />
    </>
  );
}
