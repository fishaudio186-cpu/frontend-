import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const onDark = tone === "dark";

  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <Image
        src="/logo-primary.png"
        alt="نورالداخل — nurdakhil"
        width={160}
        height={160}
        className="h-14 w-auto md:h-16 object-contain"
        priority
      />
      <div className="hidden sm:flex flex-col leading-tight">
        <span
          className={cn(
            "font-extrabold text-base md:text-lg",
            onDark ? "text-white" : "text-brand-plum"
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
