"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

export default function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  className = "",
}: AdBannerProps) {
  const pathname = usePathname();
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && adRef.current) {
        if (adRef.current.innerHTML.trim() === "") {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }
    } catch (err) {
      console.error("AdSense push error:", err);
    }
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={`ad-wrapper w-full flex justify-center overflow-hidden [&:has(ins[data-ad-status="unfilled"])]:hidden ${className}`}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9337281778223595"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      />
    </div>
  );
}
