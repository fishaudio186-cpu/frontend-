import { getProduct, HERO_SLUG, type Product } from "./products";

export function getCrossSells(_cartSlugs: string[], _limit = 2): Product[] {
  return [];
}

/** Post-checkout upsell: same spray @ 99 SAR */
export function pickUpsellProduct(cartSlugs: string[]): Product | null {
  const hero = getProduct(HERO_SLUG);
  if (!hero) return null;
  if (cartSlugs.length >= 4) return null;
  return hero;
}
