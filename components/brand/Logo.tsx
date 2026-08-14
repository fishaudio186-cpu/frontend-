import Link from "next/link";
import Image from "next/image";

export function Logo() {
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
        <span className="font-extrabold text-brand-plum text-base md:text-lg">نورالداخل</span>
        <span className="font-english text-brand-gold text-[10px] md:text-xs tracking-[0.22em] uppercase">
          nurdakhil
        </span>
      </div>
    </Link>
  );
}
