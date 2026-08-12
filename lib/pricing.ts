const BUNDLE: Record<number, number> = { 1: 199, 2: 279, 3: 349 };

export function calculateLineTotal(qty: number): number {
  if (qty <= 0) return 0;
  if (qty <= 3) return BUNDLE[qty];
  const threes = Math.floor(qty / 3);
  const rem = qty % 3;
  return threes * BUNDLE[3] + (rem ? BUNDLE[rem] : 0);
}

export function calculateCartTotal(items: { qty: number }[]): number {
  return items.reduce((sum, item) => sum + calculateLineTotal(item.qty), 0);
}

export function bundleSavings(qty: number): number {
  return qty * 199 - calculateLineTotal(qty);
}

export const UNIT_PRICE = 199;
export const UPSELL_PRICE = 99;

export const BUNDLE_OPTIONS = [
  { qty: 1, price: 199, label: "قطعة واحدة", savings: 0 },
  { qty: 2, price: 279, label: "قطعتين", savings: 119, popular: true },
  { qty: 3, price: 349, label: "3 قطع", savings: 248 },
] as const;
