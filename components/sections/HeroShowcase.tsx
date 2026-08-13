import Image from "next/image";
import { PRODUCT_IMAGES } from "@/lib/product-images";

/** Branded pack shot — box + bottle, full product visible */
export function HeroShowcase() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-brand-cream-dark shadow-premium aspect-square max-h-[520px] bg-white">
      <Image
        src={PRODUCT_IMAGES.packShot}
        alt="نور الشيب — العلبة والبخاخ الأصلية 100مل"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain p-6 md:p-10"
      />
    </div>
  );
}
