"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type HeroGradientHeadingProps = {
  className?: string;
} & Omit<HTMLMotionProps<"h1">, "children" | "className">;

export function HeroGradientHeading({ className, ...props }: HeroGradientHeadingProps) {
  const gradientX = useMotionValue(50);
  const smoothX = useSpring(gradientX, { stiffness: 100, damping: 26 });
  const backgroundPosition = useMotionTemplate`${smoothX}% 50%`;

  function onMouseMove(e: React.MouseEvent<HTMLHeadingElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    gradientX.set(((e.clientX - rect.left) / rect.width) * 100);
  }

  function onMouseLeave() {
    gradientX.set(50);
  }

  return (
    <motion.h1
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl",
        className
      )}
      {...props}
    >
      Grow Faster with SEO &{" "}
      <motion.span
        className="cursor-gradient-accent"
        style={{ backgroundPosition }}
      >
        High-Converting
      </motion.span>{" "}
      Websites
    </motion.h1>
  );
}
