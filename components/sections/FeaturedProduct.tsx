import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { HERO_SLUG, getHeroProduct } from "@/lib/products";
import { getProductContent } from "@/lib/product-content";
import { PRODUCT_IMAGES } from "@/lib/product-images";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TrustBadgeRow } from "@/components/ui/TrustBadgeRow";

export function FeaturedProduct() {
  const product = getHeroProduct();
  const content = getProductContent(HERO_SLUG)!;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Our Formulation"
          title="منتج واحد. مشكلة واحدة. حلّ سريري."
          subtitle="بخاخ نور الشيب — تركيبة عشبية مركّزة 100 مل ضد الشيب والرمادي."
        />
        <article className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-square hero-plate rounded-[2rem] border border-brand-plum/8 shadow-card overflow-hidden">
            <Image
              src={PRODUCT_IMAGES.packShot}
              alt={product.nameAr}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-8"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-english tracking-[0.22em] uppercase text-brand-gold font-semibold">
              {product.routineLabel}
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-plum leading-snug mt-3">
              {product.cardTitleAr}
            </h3>
            <p className="mt-4 text-brand-ink/65 leading-relaxed">
              {content.heroSubhead}
            </p>
            <StarRating rating={product.rating} count={product.reviewCount} className="mt-6" />
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-xs text-brand-ink/50">يبدأ من</span>
              <span className="font-extrabold text-4xl text-brand-plum">199</span>
              <span className="text-brand-ink/60 font-medium">ر.س</span>
            </div>
            <p className="text-xs text-brand-trust mt-2">2 بـ 279 · 3 بـ 349 · شحن مجاني</p>
            <TrustBadgeRow tone="light" className="mt-7" />
            <Link href={`/products/${HERO_SLUG}`} className="mt-8">
              <Button className="bg-brand-plum hover:bg-brand-plum-light text-base py-4 px-10 rounded-2xl">
                ابدئي روتين نور الشيب
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
