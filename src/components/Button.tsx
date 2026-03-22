import type { ComponentProps } from "react";

import {
  buttonSizeClasses,
  buttonVariantClasses,
  type ButtonSize,
  type ButtonVariant,
} from "./buttonStyles";

export type ButtonProps = ComponentProps<"button"> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  error?: boolean;
};

export default function Button({
  size = "medium",
  variant = "contained",
  fullWidth = false,
  error = false,
  className,
  type,
  ...props
}: ButtonProps) {
  const tone = error ? "error" : "default";
  return (
    <button
      type={type ?? "button"}
      className={[
        "flex cursor-pointer items-center justify-center gap-2 rounded-full font-bold transition-colors disabled:cursor-not-allowed",
        fullWidth ? "w-full max-w-none" : "max-w-40",
        buttonVariantClasses[variant][tone],
        buttonSizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
