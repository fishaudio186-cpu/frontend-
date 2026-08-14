import Image from "next/image";
import { cn } from "@/lib/utils";
import { PRODUCT_IMAGES } from "@/lib/product-images";

export function ProductImage({
  className,
  label,
  showBadge,
  variant = "hero",
}: {
  className?: string;
  label?: string;
  showBadge?: boolean;
  variant?: "hero" | "packaging" | "lifestyle" | "ingredients";
}) {
  const src =
    variant === "ingredients"
      ? PRODUCT_IMAGES.ingredientsFlatlay
      : PRODUCT_IMAGES.packShot;

  const isPackshot = variant !== "ingredients";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isPackshot ? "bg-white" : "bg-brand-cream",
        className
      )}
    >
      <Image
        src={src}
        alt="نور الشيب — بخاخ عشبي ضد الرمادي 100مل"
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, 33vw"
        className={isPackshot ? "object-contain p-4" : "object-cover"}
      />
      {showBadge && (
        <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-premium px-3 py-2 flex items-center gap-2 border border-brand-cream-dark">
          <div className="w-8 h-8 rounded-full bg-brand-forest flex items-center justify-center text-brand-gold text-xs font-bold">
            ✓
          </div>
          <div className="text-right">
            <p className="text-[10px] font-english font-semibold text-brand-forest">SFDA Licensed</p>
            <p className="text-[9px] text-brand-ink/60">مسجّل · معتمد</p>
          </div>
        </div>
      )}
      {label && (
        <span className="absolute top-3 right-3 text-[10px] bg-brand-forest text-white px-2 py-1 rounded-full font-bold">
          {label}
        </span>
      )}
    </div>
  );
}
