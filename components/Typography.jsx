import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const typographyVariants = cva("leading-[24px]", {
  variants: {
    variant: {
      h1: "leading-[44px] text-[35px]",
      h2: "leading-[44px] text-[30px]",
      h3: "leading-[38px] text-[26px]",
      h4: "leading-[35px] text-[22px]",
      h5: "leading-[32px] text-[20px]",
      text: "leading-[28px] text-[18px]",
      caption: "text-[12px]",
      normal: "",
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

const Typography = React.forwardRef(
  ({ variant = "", as: Component = "p", className = "", ...props }, ref) => {
    return (
      <Component
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
