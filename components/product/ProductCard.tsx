import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import type { Product } from "@/lib/products";
import { ProductImage } from "@/components/product/ProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-white rounded-2xl shadow-card overflow-hidden flex flex-col border border-brand-cream-dark hover:shadow-premium hover:border-brand-gold/30 transition-all duration-300">
      <Link href={`/products/${product.slug}`} className="block">
        <ProductImage className="aspect-[4/3]" label={product.badge} showBadge />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-brand-gold-deep font-semibold mb-2">{product.routineLabel}</p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-extrabold text-lg leading-snug text-brand-forest group-hover:text-brand-forest-light transition">
            {product.cardTitleAr}
          </h3>
          <p className="text-sm text-brand-ink/60 mt-3 leading-relaxed line-clamp-4">
            {product.cardDescriptionAr}
          </p>
        </Link>
        <StarRating rating={product.rating} count={product.reviewCount} className="mt-4" />
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-xs text-brand-ink/60">يبدأ من</span>
          <span className="font-extrabold text-xl text-brand-berry">199 ر.س</span>
        </div>
        <p className="text-xs text-brand-trust mt-1">2 بـ 279 · 3 بـ 349 · COD</p>
        <Link href={`/products/${product.slug}`} className="mt-5">
          <Button fullWidth className="bg-brand-forest hover:bg-brand-forest-light">
            اطلبي الآن
          </Button>
        </Link>
      </div>
    </article>
  );
}

export function ProductCardCompact({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: () => void;
}) {
  return (
    <div className="flex gap-3 p-4 bg-white rounded-xl border border-brand-cream-dark shadow-sm">
      <ProductImage className="w-16 h-16 rounded-lg shrink-0" variant="packaging" />
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm truncate">{product.nameAr}</p>
        <p className="text-xs text-brand-ink/60 truncate">{product.problemLineAr}</p>
        <p className="text-sm text-brand-berry font-bold mt-1">199 ريال</p>
      </div>
      <Button variant="secondary" className="py-2 px-3 text-sm shrink-0 self-center" onClick={onAdd}>
        + أضيفي
      </Button>
    </div>
  );
}
