import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "h-11 w-full rounded-xl glass px-4 text-sm text-white placeholder:text-muted/70 outline-none transition-all focus:border-purple/50 focus:ring-2 focus:ring-purple/30",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
