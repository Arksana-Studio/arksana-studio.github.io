import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Button as BaseButton } from "../ui/button";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/80",
        outline:
          "border border-white/20 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Button({ className, variant, size, ...props }) {
  return (
    <BaseButton className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
