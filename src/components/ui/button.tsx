import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        audit:
          "bg-gradient-purple text-white glow-shadow hover:shadow-[0_22px_70px_-18px_rgba(139,92,246,0.8)] hover:-translate-y-0.5",
        primary:
          "bg-gradient-purple text-white glow-shadow hover:shadow-[0_22px_70px_-18px_rgba(139,92,246,0.8)] hover:-translate-y-0.5",
        gradientBlue:
          "bg-gradient-blue text-white glow-shadow-blue hover:-translate-y-0.5",
        glass:
          "glass-strong text-white hover:bg-white/10 hover:-translate-y-0.5",
        outline:
          "border border-white/15 text-white hover:border-purple/60 hover:bg-white/5",
        ghost: "text-muted hover:text-white hover:bg-white/5",
        link: "text-purple-2 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
