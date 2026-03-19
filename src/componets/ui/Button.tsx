import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "solid" | "outline";
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "solid",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base = "rounded-full px-6 py-3 text-sm font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-[#334d2f] text-[#334d2f] hover:bg-[#334d2f] hover:text-white"
      : "bg-[#334d2f] text-white hover:opacity-90";

  return (
    <button
      className={`${base} ${styles} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}