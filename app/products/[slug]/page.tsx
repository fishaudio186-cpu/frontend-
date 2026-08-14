"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BundleSelector, StatPills, CodTrustRow } from "@/components/product/BundleSelector";
import { ProductPageSections } from "@/components/product/ProductPageSections";
import { StoreImage } from "@/components/ui/StoreImage";
import { StarRating } from "@/components/ui/StarRating";
import { Button } from "@/components/ui/Button";
import { getProduct, resolveSlug } from "@/lib/products";
import { getProductContent } from "@/lib/product-content";
import { GALLERY_IMAGES } from "@/lib/product-images";
import { calculateLineTotal } from "@/lib/pricing";
import { useCartStore } from "@/lib/cart-store";
import { trackAddToCart, trackViewContent } from "@/lib/analytics/events";
import { ShieldCheck, Phone, Truck, RotateCcw } from "lucide-react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = use(params);
  const slug = resolveSlug(rawSlug);
  const product = getProduct(slug);
  const content = getProductContent(slug);
  const [bundleQty, setBundleQty] = useState(2);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const addItem = useCartStore((s) => s.addItem);

  useEffect(() => {
    if (product) trackViewContent(product.slug, 199);
  }, [product]);

  if (!product || !content) notFound();

  const price = calculateLineTotal(bundleQty);
  const savings = bundleQty === 2 ? 119 : bundleQty === 3 ? 248 : 0;

  const gallery = GALLERY_IMAGES;

  const handleAdd = () => {
    trackAddToCart(slug, price, bundleQty);
    addItem(slug, bundleQty);
  };

  return (
    <div className="pb-28">
      {/* Hero buy box */}
      <section className="atmosphere border-b border-brand-cream-dark">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <nav className="text-sm text-brand-ink/60 mb-6">
            <Link href="/" className="hover:text-brand-forest">الرئيسية</Link>
            {" / "}
            <span className="text-brand-forest font-medium">{product.nameAr}</span>
          </nav>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {[
              { icon: ShieldCheck, t: "مسجّل SFDA" },
              { icon: Phone, t: "تأكيد بالجوال" },
              { icon: Truck, t: "توصيل 1–3 أيام" },
              { icon: RotateCcw, t: "ضمان 30 يوم" },
            ].map(({ icon: Icon, t }) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 text-xs bg-white border border-brand-cream-dark px-3 py-1.5 rounded-full text-brand-forest font-medium shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-brand-gold" />
                {t}
              </span>
            ))}
          </div>

          <StatPills pills={content.statPills} />

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 mt-10 items-start">
            {/* Gallery — empty placeholders */}
            <div className="space-y-3 sticky top-24">
              <div className="relative">
                <StoreImage
                  src={gallery[galleryIdx].src}
                  alt={gallery[galleryIdx].alt}
                  aspect="square"
                  objectFit={gallery[galleryIdx].fit ?? "cover"}
                  objectPosition={gallery[galleryIdx].objectPosition ?? "center"}
                  className="rounded-3xl shadow-premium hero-plate border border-brand-forest/8"
                  priority
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    ⭐ {product.badge}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-premium px-3 py-2 flex items-center gap-2 border">
                  <div className="w-8 h-8 rounded-full bg-brand-forest flex items-center justify-center text-brand-gold text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-[10px] font-english font-semibold text-brand-forest">SFDA Licensed</p>
                    <p className="text-[9px] text-brand-ink/60">مسجّل · معتمد</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {gallery.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setGalleryIdx(i)}
                    className={`rounded-xl overflow-hidden border-2 transition ${
                      galleryIdx === i ? "border-brand-forest" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <StoreImage
                      src={item.src}
                      alt={item.alt}
                      aspect="square"
                      objectFit={item.fit ?? "cover"}
                      objectPosition={item.objectPosition ?? "center"}
                      className="!rounded-lg bg-white"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Buy box copy */}
            <div>
              <p className="text-xs text-brand-gold-deep font-semibold tracking-wide">{product.routineLabel}</p>
              <h1 className="text-2xl md:text-[2rem] font-extrabold leading-snug mt-2 text-brand-forest">
                {product.cardTitleAr}
              </h1>
              <p className="mt-2 text-sm text-brand-forest/70 font-medium">{product.problemLineAr}</p>
              <p className="mt-4 text-brand-ink/65 leading-relaxed">{content.heroSubhead}</p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <StarRating rating={product.rating} count={product.reviewCount} />
                <span className="text-xs text-brand-ink/60">· مشترية مؤكدة من السعودية</span>
              </div>

              <div className="mt-4 flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl font-extrabold text-brand-berry">{price} ر.س</span>
                {savings > 0 && (
                  <span className="text-sm text-brand-trust font-bold bg-brand-trust/10 px-2 py-0.5 rounded-full">
                    وفّري {savings} ريال
                  </span>
                )}
              </div>
              <p className="text-xs text-brand-ink/60 mt-1">
                {bundleQty === 1 && "سعر القطعة الواحدة"}
                {bundleQty === 2 && "عرض قطعتين — الأكثر اختياراً"}
                {bundleQty === 3 && "عرض 3 قطع — أقصى توفير"}
              </p>

              <p className="text-xs text-brand-trust font-medium mt-4 bg-brand-trust/10 border border-brand-trust/20 px-3 py-2 rounded-xl inline-flex items-center gap-2">
                <span>🚚</span>
                <span>{content.scarcityLine}</span>
              </p>

              <div className="mt-6">
                <BundleSelector
                  selected={bundleQty}
                  onChange={setBundleQty}
                  labels={content.bundleLabels}
                />
              </div>

              <Button fullWidth className="mt-6 text-lg py-5 bg-brand-forest hover:bg-brand-forest-light" onClick={handleAdd}>
                {content.ctaVerb} · {price} ريال
              </Button>
              <p className="text-center text-xs text-brand-ink/60 mt-2">
                الدفع عند الاستلام · نتواصل معك للتأكيد · بدون دفع أونلاين
              </p>

              <CodTrustRow />

              {/* Emotion micro-copy */}
              <div className="mt-6 p-4 rounded-2xl bg-brand-cream border border-brand-cream-dark">
                <p className="text-sm text-brand-ink/65 leading-relaxed">
                  <span className="font-bold text-brand-forest">لماذا تطلبين الآن؟ </span>
                  لأن كل يوم تأجيل يعني يوماً إضافياً من نفس القلق. الطلب آمن: تأكيد بالجوال،
                  توصيل لباب بيتك، ودفع عند الاستلام — مع ضمان 30 يوم كامل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductPageSections
        product={product}
        content={content}
        onAddToCart={handleAdd}
      />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t p-3 md:hidden z-30 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="text-right flex-1 min-w-0">
            <p className="text-xs text-brand-ink/60 truncate">{product.nameAr} · {bundleQty}×</p>
            <p className="font-extrabold text-brand-forest">{price} ر.س</p>
          </div>
          <Button className="flex-1 bg-brand-forest" onClick={handleAdd}>
            {content.ctaVerb}
          </Button>
        </div>
      </div>
    </div>
  );
}
