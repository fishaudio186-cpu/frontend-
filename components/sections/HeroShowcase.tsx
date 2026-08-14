import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { PRODUCT_IMAGES } from "@/lib/product-images";

/** Studio pack shot presented as a bright brand plate against the dark hero. */
export function HeroShowcase() {
  return (
    <div className="relative animate-soft-rise mx-auto w-full max-w-[420px] md:max-w-none">
      <div className="relative rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-[0_32px_80px_rgba(8,33,22,0.4)] ring-1 ring-brand-gold/25 overflow-hidden">
        <div className="pt-4 md:pt-7 pb-1 md:pb-2 text-center">
          <p className="font-extrabold text-brand-forest text-base md:text-xl">نورالداخل</p>
          <p className="font-english text-brand-gold-deep text-[9px] md:text-[11px] tracking-[0.32em] uppercase mt-0.5 md:mt-1">
            nurdakhil
          </p>
        </div>

        <div className="relative aspect-[4/2.8] md:aspect-[4/3.2] hero-plate">
          <Image
            src={PRODUCT_IMAGES.packShot}
            alt="نور الشيب — العلبة والبخاخ الأصلية 100 مل"
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 88vw, 46vw"
            className="object-contain p-3 md:p-8 drop-shadow-[0_28px_45px_rgba(21,33,27,0.18)]"
          />
        </div>
      </div>

      <div className="absolute -bottom-4 right-3 md:-bottom-5 md:right-6 flex items-center gap-2 rounded-xl md:rounded-2xl bg-brand-forest-dark/95 backdrop-blur px-3 md:px-4 py-2.5 md:py-3 shadow-[0_18px_40px_rgba(8,33,22,0.45)] border border-brand-gold/25">
        <ShieldCheck className="w-4 md:w-5 h-4 md:h-5 text-brand-gold shrink-0" strokeWidth={1.8} />
        <div className="leading-tight">
          <p className="font-english text-[9px] md:text-[10px] tracking-[0.16em] text-brand-gold font-semibold">
            SFDA LICENSED
          </p>
          <p className="text-[10px] md:text-[11px] text-white/70">مرخّص من الغذاء والدواء</p>
        </div>
      </div>
    </div>
  );
}
