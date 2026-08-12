import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "font-bold py-4 px-8 rounded-xl transition-all disabled:opacity-50",
        variant === "primary" && "bg-brand-gold text-white hover:bg-brand-gold-dark shadow-md",
        variant === "secondary" && "border-2 border-brand-plum text-brand-plum hover:bg-brand-plum hover:text-white",
        variant === "ghost" && "text-[#6B6B6B] hover:text-brand-plum py-2",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
