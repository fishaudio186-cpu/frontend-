import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { HERO_SLUG, getHeroProduct } from "@/lib/products";
import { getProductContent } from "@/lib/product-content";
import { PRODUCT_IMAGES } from "@/lib/product-images";
import { SectionHeader } from "@/components/sections/SectionHeader";

/** nama-style "Our Formulations" — single hero product card */
export function FeaturedProduct() {
  const product = getHeroProduct();
  const content = getProductContent(HERO_SLUG)!;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Our Formulation"
          title="منتج واحد. مشكلة واحدة. حلّ سريري."
          subtitle="بخاخ نور الشيب — تركيبة عشبية مركّزة 100 مل ضد الشيب والرمادي. مسجّل SFDA، حلال 100%، دفع عند الاستلام."
        />
        <article className="max-w-4xl mx-auto bg-white rounded-3xl border border-brand-cream-dark shadow-premium overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative bg-white aspect-square md:aspect-auto md:min-h-[420px]">
              <Image
                src={PRODUCT_IMAGES.packaging}
                alt={product.nameAr}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-6"
              />
              {product.badge && (
                <span className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  ⭐ {product.badge}
                </span>
              )}
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-xs text-brand-gold font-semibold tracking-wide">{product.routineLabel}</p>
              <h3 className="text-xl md:text-2xl font-extrabold text-brand-plum leading-snug mt-2">
                {product.cardTitleAr}
              </h3>
              <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed line-clamp-3">
                {content.heroSubhead}
              </p>
              <StarRating rating={product.rating} count={product.reviewCount} className="mt-5" />
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-xs text-[#6B6B6B]">يبدأ من</span>
                <span className="font-extrabold text-3xl text-brand-plum">199 ر.س</span>
              </div>
              <p className="text-xs text-brand-trust mt-1">2 بـ 279 · 3 بـ 349 · شحن مجاني</p>
              <Link href={`/products/${HERO_SLUG}`} className="mt-6">
                <Button fullWidth className="bg-brand-plum hover:bg-brand-plum-light text-base py-4">
                  ابدئي روتين نور الشيب
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
