import Image from "next/image";
import { PRODUCT_IMAGES } from "@/lib/product-images";

/** Full-bleed product plane — edge-to-edge, no inset card */
export function HeroShowcase() {
  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-full hero-plane animate-soft-rise overflow-hidden">
      <Image
        src={PRODUCT_IMAGES.packShot}
        alt="نور الشيب — العلبة والبخاخ الأصلية 100مل"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 55vw"
        className="object-contain object-center p-6 md:p-12 drop-shadow-[0_30px_60px_rgba(74,20,40,0.18)]"
      />
    </div>
  );
}
