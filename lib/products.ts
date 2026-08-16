export interface Product {
  slug: string;
  nameAr: string;
  nameEn: string;
  cardTitleAr: string;
  routineLabel: string;
  taglineAr: string;
  problemLineAr: string;
  cardDescriptionAr: string;
  ingredients: string[];
  tagline: string;
  sku: string;
  isHero: boolean;
  rating: number;
  reviewCount: number;
  stockCount: number;
  badge?: string;
  color: string;
  productType: "mist" | "serum" | "spray";
}

/** Single-product store — نور الشيب herbal gray hair spray */
export const HERO_SLUG = "nur-alshayb";

const HERO_PRODUCT: Product = {
  slug: HERO_SLUG,
  nameAr: "نور الشيب",
  nameEn: "Herbal Gray Hair Essence Spray",
  cardTitleAr: "بخاخ نور الشيب العشبي — هوشو وجينسنغ وزنجبيل ضد الرمادي",
  routineLabel: "روتين نور الشيب · العناية بالرمادي",
  taglineAr: "لون طبيعي لشعرك — من المنزل في دقائق",
  problemLineAr: "تركيبة عشبية سريرية ضد الشيب والرمادي — بدون صبغة تضرّ الشعر",
  cardDescriptionAr:
    "هوشو و، جينسنغ، زنجبيل، وريشي في بخاخ 100 مل — عناية يومية لفروة الرأس ومظهر لون طبيعي. مصمّم لشعر المرأة السعودية، حلال 100%، مرخّص SFDA، دفع عند الاستلام.",
  ingredients: ["الهوشو و", "الجينسنغ", "الزنجبيل", "الريشي"],
  tagline: "لون طبيعي لشعرك — من المنزل في دقائق",
  sku: "NAMA-GRY-001",
  isHero: true,
  rating: 4.9,
  reviewCount: 487,
  stockCount: 19,
  color: "#5C2033",
  productType: "spray",
};

export const PRODUCTS: Product[] = [HERO_PRODUCT];

const SLUG_ALIASES: Record<string, string> = {
  "al-ramadi": HERO_SLUG,
  "ushabi-lilshar": HERO_SLUG,
  albakhakh: HERO_SLUG,
};

export function resolveSlug(slug: string): string {
  return SLUG_ALIASES[slug] ?? slug;
}

export function getProduct(slug: string): Product | undefined {
  const resolved = resolveSlug(slug);
  return PRODUCTS.find((p) => p.slug === resolved);
}

export function getHeroProduct(): Product {
  return HERO_PRODUCT;
}
