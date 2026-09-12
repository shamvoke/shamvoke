"use client";

import React from "react";

export default function ScrollToGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#grid"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("grid")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className={className}
    >
      {children}
    </a>
  );
}