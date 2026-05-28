"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const baseClass =
    direction === "up"
      ? "reveal"
      : direction === "left"
        ? "reveal-left"
        : direction === "right"
          ? "reveal-right"
          : "reveal-scale";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
