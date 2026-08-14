import Image from "next/image";
import { INGREDIENT_IMAGES, PRODUCT_IMAGES } from "@/lib/product-images";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StoreImage } from "@/components/ui/StoreImage";

export function IngredientsShowcase() {
  return (
    <section className="py-14 md:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Science · Ingredients"
          title="أربعة أعشاب — جرعات مدروسة"
          subtitle="كل مكوّن له دور واضح في دعم فروة الرأس ومظهر اللون الطبيعي للشعر"
        />
        <StoreImage
          src={PRODUCT_IMAGES.ingredientsFlatlay}
          alt="تركيبة نور الشيب — الزنجبيل والجينسنغ والريشي والهوشو و"
          aspect="wide"
          objectFit="cover"
          className="mb-7 md:mb-10"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INGREDIENT_IMAGES.map((ing) => (
            <div
              key={ing.nameAr}
              className="bg-white rounded-2xl border border-brand-cream-dark shadow-card overflow-hidden group hover:shadow-premium transition"
            >
              <div className="relative aspect-square bg-white p-4">
                <Image
                  src={ing.src}
                  alt={ing.nameAr}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 md:p-4 text-center border-t border-brand-cream-dark">
                <p className="font-extrabold text-brand-forest">{ing.nameAr}</p>
                <p className="text-[10px] font-english text-brand-gold-deep mt-0.5 tracking-wide">
                  {ing.nameEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
