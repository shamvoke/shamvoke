"use client";

import { useEffect, useRef } from "react";

export default function Shamaze3DFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    iframeRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <iframe
        ref={iframeRef}
        src="/shamaze3d/index.html"
        className="h-full w-full"
        allowFullScreen
        tabIndex={0}
        onLoad={() => iframeRef.current?.focus()}
        onClick={() => iframeRef.current?.focus()}
      />
    </div>
  );
}