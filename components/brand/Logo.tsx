import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const onDark = tone === "dark";

  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      {/* The mark is plum on transparent, so dark chrome needs a light seal behind it */}
      <span
        className={cn(
          "flex items-center justify-center shrink-0",
          onDark && "rounded-2xl bg-brand-cream h-12 w-12 md:h-14 md:w-14 p-1.5 shadow-[0_6px_18px_rgba(8,33,22,0.35)]"
        )}
      >
        <Image
          src="/logo-primary.png"
          alt="نورالداخل — nurdakhil"
          width={160}
          height={160}
          className={cn("object-contain", onDark ? "h-full w-full" : "h-14 w-auto md:h-16")}
          priority
        />
      </span>
      <div className="hidden sm:flex flex-col leading-tight">
        <span
          className={cn(
            "font-extrabold text-base md:text-lg",
            onDark ? "text-white" : "text-brand-forest"
          )}
        >
          نورالداخل
        </span>
        <span className="font-english text-brand-gold text-[10px] md:text-xs tracking-[0.22em] uppercase">
          nurdakhil
        </span>
      </div>
    </Link>
  );
}
