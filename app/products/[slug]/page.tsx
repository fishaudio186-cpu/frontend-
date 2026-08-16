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
import { CheckCircle2, ShieldCheck, Phone, Truck, RotateCcw } from "lucide-react";

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
        <div className="max-w-7xl mx-auto px-4 py-5 md:py-12">
          <nav className="hidden md:block text-sm text-brand-ink/60 mb-6">
            <Link href="/" className="hover:text-brand-forest">الرئيسية</Link>
            {" / "}
            <span className="text-brand-forest font-medium">{product.nameAr}</span>
          </nav>

          {/* Trust strip */}
          <div className="flex overflow-x-auto md:flex-wrap justify-start gap-2 md:gap-3 mb-3 md:mb-8 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { icon: ShieldCheck, t: "مسجّل SFDA" },
              { icon: Phone, t: "تأكيد بالجوال" },
              { icon: Truck, t: "توصيل 1–3 أيام" },
              { icon: RotateCcw, t: "ضمان 30 يوم" },
            ].map(({ icon: Icon, t }) => (
              <span
                key={t}
                className="inline-flex shrink-0 items-center gap-1.5 text-[11px] md:text-xs bg-white border border-brand-cream-dark px-2.5 md:px-3 py-1.5 rounded-full text-brand-forest font-medium shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-brand-gold" />
                {t}
              </span>
            ))}
          </div>

          <StatPills pills={content.statPills} className="hidden md:grid" />

          <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 mt-2 md:mt-10 items-start">
            {/* Product gallery */}
            <div className="space-y-3 md:sticky md:top-24">
              <div className="relative">
                <StoreImage
                  src={gallery[galleryIdx].src}
                  alt={gallery[galleryIdx].alt}
                  aspect="square"
                  objectFit={gallery[galleryIdx].fit ?? "cover"}
                  objectPosition={gallery[galleryIdx].objectPosition ?? "center"}
                  className="rounded-2xl md:rounded-3xl shadow-premium hero-plate border border-brand-forest/8"
                  priority
                />
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-white rounded-xl shadow-premium px-2.5 md:px-3 py-2 flex items-center gap-2 border">
                  <div className="w-8 h-8 rounded-full bg-brand-forest flex items-center justify-center text-brand-gold text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-[10px] font-english font-semibold text-brand-forest">SFDA Licensed</p>
                    <p className="text-[9px] text-brand-ink/60">مسجّل · معتمد</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 md:grid md:grid-cols-2">
                {gallery.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setGalleryIdx(i)}
                    aria-label={`عرض الصورة ${i + 1}`}
                    aria-pressed={galleryIdx === i}
                    className={`w-[68px] shrink-0 rounded-xl overflow-hidden border-2 bg-white p-0.5 transition md:w-auto ${
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
              <p className="text-[10px] md:text-xs text-brand-gold-deep font-semibold tracking-wide">{product.routineLabel}</p>
              <h1 className="text-[1.4rem] md:text-[2rem] font-extrabold leading-snug mt-1.5 md:mt-2 text-brand-forest">
                {product.cardTitleAr}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-2 md:mt-4 md:gap-3">
                <StarRating rating={product.rating} count={product.reviewCount} />
                <span className="text-[11px] text-brand-ink/60 md:text-xs">تقييمات عميلات من السعودية</span>
              </div>

              <p className="hidden mt-2 text-sm text-brand-forest/70 font-medium md:block">{product.problemLineAr}</p>
              <p className="hidden mt-4 text-brand-ink/65 leading-relaxed md:block">{content.heroSubhead}</p>

              <ul className="mt-4 grid gap-2 text-[13px] text-brand-ink/75 md:hidden">
                {["بخاخ عشبي 100 مل بدون صبغة قاسية", "مسجّل في هيئة الغذاء والدواء", "الدفع عند الاستلام وضمان 30 يوم"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-trust" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-2xl border border-brand-forest/10 bg-white p-4 shadow-card md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl font-extrabold text-brand-berry">{price} ر.س</span>
                  {savings > 0 && (
                    <span className="text-sm text-brand-trust font-bold bg-brand-trust/10 px-2 py-0.5 rounded-full">
                      وفّري {savings} ريال
                    </span>
                  )}
                </div>
                <p className="text-xs text-brand-ink/60 mt-1">
                  {bundleQty === 1 && "قطعة واحدة"}
                  {bundleQty === 2 && "عرض قطعتين — اختيار موفّر"}
                  {bundleQty === 3 && "عرض 3 قطع — أقصى توفير"}
                </p>
              </div>

              <p className="w-full text-xs text-brand-trust font-medium mt-3 bg-brand-trust/10 border border-brand-trust/20 px-3 py-2 rounded-xl inline-flex items-center justify-center gap-2 md:w-auto md:mt-4">
                <span>🚚</span>
                <span>شحن مجاني لجميع مناطق المملكة</span>
              </p>

              <div className="mt-5 md:mt-6">
                <BundleSelector
                  selected={bundleQty}
                  onChange={setBundleQty}
                  labels={content.bundleLabels}
                />
              </div>

              <Button fullWidth className="mt-4 text-lg py-4 md:mt-6 md:py-5 bg-brand-forest hover:bg-brand-forest-light" onClick={handleAdd}>
                اشتري الآن · {price} ريال
              </Button>
              <p className="text-center text-xs text-brand-ink/60 mt-2">
                الدفع عند الاستلام · نتواصل معك للتأكيد · بدون دفع أونلاين
              </p>

              <div className="hidden md:block">
                <CodTrustRow />
              </div>

              {/* Emotion micro-copy */}
              <div className="hidden mt-6 p-4 rounded-2xl bg-brand-cream border border-brand-cream-dark md:block">
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
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t border-brand-forest/10 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] md:hidden z-30 shadow-[0_-12px_35px_rgba(53,10,25,0.14)]">
        <div className="flex items-center gap-3">
          <div className="text-right flex-1 min-w-0">
            <p className="text-xs text-brand-ink/60 truncate">{product.nameAr} · {bundleQty}×</p>
            <p className="font-extrabold text-brand-berry">{price} ر.س</p>
          </div>
          <Button className="flex-1 bg-brand-forest py-3.5 px-3" onClick={handleAdd}>
            اشتري الآن · دفع عند الاستلام
          </Button>
        </div>
      </div>
    </div>
  );
}
