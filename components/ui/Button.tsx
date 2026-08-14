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
        "font-bold py-4 px-8 rounded-2xl transition-all duration-300 disabled:opacity-50",
        variant === "primary" && "bg-brand-plum text-white hover:bg-brand-plum-light shadow-premium",
        variant === "secondary" && "border border-brand-plum/25 text-brand-plum hover:bg-brand-plum hover:text-white",
        variant === "ghost" && "text-brand-ink/55 hover:text-brand-plum py-2",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
