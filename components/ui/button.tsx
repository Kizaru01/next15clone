import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border text-sm font-medium whitespace-nowrap transition duration-200 ease-out outline-none select-none focus-visible:ring-4 focus-visible:ring-ring/20 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-xl",
        outline:
          "border-border bg-white/80 text-foreground shadow-sm hover:-translate-y-0.5 hover:bg-accent hover:shadow-md",
        secondary:
          "border-black/5 bg-secondary text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-white hover:shadow-md",
        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground",
        destructive:
          "border-destructive/10 bg-destructive text-white shadow-lg hover:-translate-y-0.5 hover:bg-destructive/90 hover:shadow-xl",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 px-4 py-2 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-8 rounded-xl px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 rounded-xl px-3.5 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 rounded-2xl px-5 text-sm",
        icon: "size-10",
        "icon-xs": "size-8 rounded-xl [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 rounded-xl",
        "icon-lg": "size-11 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

function ButtonSkeleton({
  className,
  size = "default",
}: {
  className?: string;
  size?: VariantProps<typeof buttonVariants>["size"];
}) {
  return (
    <Skeleton
      className={cn(buttonVariants({ variant: "secondary", size }), className)}
    />
  );
}

export { Button, ButtonSkeleton, buttonVariants };
