"use client";

import { useEffect, useState } from "react";

export function TypingText({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = sub === current;
    const empty = sub === "";

    let delay = deleting ? 45 : 90;
    if (done && !deleting) delay = 1600;
    if (empty && deleting) delay = 350;

    const timeout = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && empty) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setSub((s) =>
          deleting ? current.slice(0, s.length - 1) : current.slice(0, s.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words]);

  return (
    <span className={className}>
      {sub}
      <span className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-purple-2 align-middle" />
    </span>
  );
}
