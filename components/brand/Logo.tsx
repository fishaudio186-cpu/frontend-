import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const onDark = tone === "dark";

  return (
    <Link
      href="/"
      aria-label="نورالداخل — الصفحة الرئيسية"
      className={cn("group flex items-center gap-2 md:gap-2.5 shrink-0", className)}
    >
      <Image
        src={onDark ? "/logo-mark-light.png" : "/logo-mark.png"}
        alt=""
        width={320}
        height={320}
        unoptimized
        priority
        className="h-8 w-8 md:h-11 md:w-11 object-contain transition-transform duration-500 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-extrabold text-[15px] md:text-lg",
            onDark ? "text-white" : "text-brand-forest"
          )}
        >
          نورالداخل
        </span>
        <span
          className={cn(
            "font-english text-[8px] md:text-[9px] tracking-[0.3em] uppercase mt-1.5",
            onDark ? "text-brand-gold" : "text-brand-gold-deep"
          )}
        >
          nurdakhil
        </span>
      </span>
    </Link>
  );
}
