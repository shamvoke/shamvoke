'use client';

import Script from 'next/script'

export default function LikeButton() {
  return (
     <div className="flex flex-col items-center pt-10 gap-4">
        <p className="text-sham dark:text-gray-500 font-post text-center text-xl italic">Enjoyed this post? <br /> Give it a like!</p>
            <button 
      className="
        iine-button 
        inline-flex items-center gap-2 text-sham dark:text-gray-500
        text-3xl font-bold no-underline
        transition-all duration-300 ease-in-out hover:scale-105
        [&.clicked]:text-voke
        cursor-pointer
      " 
      data-icon="heart"
      aria-hidden="true"
    >
    </button>
    <Script src="/js/iine.js" strategy="afterInteractive" />
      </div>
  );
}
