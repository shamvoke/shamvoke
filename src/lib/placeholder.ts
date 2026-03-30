export function shimmer(w: number, h: number) {
  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#2a2a2a" offset="20%" />
          <stop stop-color="#3a3a3a" offset="50%" />
          <stop stop-color="#2a2a2a" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#1f1f1f" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
    </svg>
  `
}

export function toBase64(str: string) {
  if (typeof window === "undefined") {
    return Buffer.from(str).toString("base64")
  }
  return window.btoa(str)
}