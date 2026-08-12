import Image from "next/image";
import { PRODUCT_IMAGES } from "@/lib/product-images";

/** Wide cinematic hero — product left, cream space right for RTL copy */
export function HeroShowcase() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-brand-cream-dark shadow-premium aspect-[4/3] md:aspect-[16/10] max-h-[520px] bg-brand-cream">
      <Image
        src={PRODUCT_IMAGES.homeBanner}
        alt="نور الشيب — بخاخ عشبي ضد الرمادي"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-left"
      />
    </div>
  );
}
