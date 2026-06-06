"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import commentBox from "commentbox.io";

const PROJECT_ID = "5767412133658624-proj";

export default function CommentBox() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const isDark = resolvedTheme === "dark";

    const removeCommentBox = commentBox(PROJECT_ID, {
      backgroundColor: isDark ? "#000000" : "#ffffff",
      textColor: isDark ? "#ffffff" : "#000000",
      subtextColor: isDark ? "#a1a1aa" : "#6b7280",
      sortOrder: "best",
    });

    return () => {
      removeCommentBox();
    };
  }, [resolvedTheme]);

  return (
    <section className="mt-16 border-t border-black/10 pt-10 dark:border-white/10">
      <h2 className="mb-6 text-2xl font-bold text-sham dark:text-white">
        Join the conversation
      </h2>

      <div className="commentbox-container mt-8 overflow-hidden">
        <div key={resolvedTheme ?? "system"} className="commentbox -mb-10" />
      </div>
    </section>
  );
}