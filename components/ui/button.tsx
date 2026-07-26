"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden rounded-full text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-background hover:bg-gold-soft",
        outline:
          "border border-edge text-foreground hover:border-gold/60 hover:text-gold",
        ghost: "text-muted hover:text-gold",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-xs",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export { buttonVariants };

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, onClick, children, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<
      { x: number; y: number; id: number }[]
    >([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        onClick={handleClick}
        {...props}
      >
        {children}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-white/30 animate-[ripple_600ms_ease-out]"
            style={{
              left: r.x,
              top: r.y,
              width: 10,
              height: 10,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        <style jsx>{`
          @keyframes ripple {
            to {
              width: 260px;
              height: 260px;
              opacity: 0;
            }
          }
        `}</style>
      </button>
    );
  }
);
Button.displayName = "Button";
