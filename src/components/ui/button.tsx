import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 font-mono font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground font-mono",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-mono",
        ghost: "hover:bg-accent hover:text-accent-foreground font-mono",
        link: "text-primary underline-offset-4 hover:underline font-mono",
        hero: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_20px_hsl(25_95%_53%/0.4)] transform hover:scale-105 transition-all duration-300 font-mono font-bold tracking-wide",
        discord: "bg-[#5865F2] text-white hover:bg-[#4752C4] font-mono font-semibold hover:shadow-[0_0_20px_#5865F2/0.4] transition-all duration-300",
        reddit: "bg-[#FF4500] text-white hover:bg-[#E03D00] font-mono font-semibold hover:shadow-[0_0_20px_#FF4500/0.4] transition-all duration-300",
        youtube: "bg-[#FF0000] text-white hover:bg-[#CC0000] font-mono font-semibold hover:shadow-[0_0_20px_#FF0000/0.4] transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
