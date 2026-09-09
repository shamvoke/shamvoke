"use client"

import { useState } from "react"
import {
FaXTwitter,
FaWhatsapp,
FaRedditAlien,
FaFacebookF,
} from "react-icons/fa6"
import { LuCopy, LuCheck } from "react-icons/lu"

type SocialShareProps = {
title: string
url: string
}

export default function SocialShare({ title, url }: SocialShareProps) {
const [copied, setCopied] = useState(false)
const [copyError, setCopyError] = useState(false)

const shareText = `${title} ${url}`

const shareLinks = {
x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
}

const copyLink = async () => {
try {
await navigator.clipboard.writeText(url)

  setCopied(true)
  setCopyError(false)

  setTimeout(() => {
    setCopied(false)
  }, 2000)
} catch {
  setCopyError(true)

  setTimeout(() => {
    setCopyError(false)
  }, 2000)
}

}

return ( <div className="my-8 flex flex-col items-center justify-center gap-4"> <span className="text-sm font-sham font-bold text-sham dark:text-voke text-center">
Spread the knowledge </span>

  <div className="flex items-center justify-center gap-2">
    <a
      href={shareLinks.x}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on X"
      title="Share on X"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-sham dark:text-voke hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors"
    >
      <FaXTwitter className="w-6 h-6" />
    </a>

    <a
      href={shareLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on WhatsApp"
      title="Share on WhatsApp"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-sham dark:text-voke hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>

    <a
      href={shareLinks.reddit}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on Reddit"
      title="Share on Reddit"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-sham dark:text-voke hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-colors"
    >
      <FaRedditAlien className="w-6 h-6" />
    </a>

    <a
      href={shareLinks.facebook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on Facebook"
      title="Share on Facebook"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-sham dark:text-voke hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors"
    >
      <FaFacebookF className="w-6 h-6" />
    </a>

    <button
      type="button"
      onClick={copyLink}
      aria-label={
        copied
          ? "Link copied"
          : copyError
            ? "Unable to copy link"
            : "Copy link"
      }
      title={
        copied
          ? "Link copied"
          : copyError
            ? "Unable to copy link"
            : "Copy link"
      }
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-sham dark:text-voke hover:bg-sham hover:text-white hover:border-sham dark:hover:bg-voke dark:hover:text-sham dark:hover:border-voke transition-colors"
    >
      {copied ? (
        <LuCheck className="w-6 h-6" />
      ) : (
        <LuCopy className="w-6 h-6" />
      )}
    </button>
  </div>

  {copyError && (
    <span className="text-xs text-sham/60 dark:text-voke/60 text-center">
      Unable to copy the link. Please copy it from your browser.
    </span>
  )}
</div>

)
}
