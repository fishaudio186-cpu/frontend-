/** نور الشيب — premium image assets (nurdakhil branded) */

export const PRODUCT_IMAGES = {
  /** Wide hero — bottle + box on marble, cream space for copy */
  heroMain: "/product/hero-main.png",
  homeBanner: "/product/home-banner.png",
  /** Branded pack shot (same hero crop for gallery) */
  packaging: "/product/packaging.png",
  /** Top-down 4 herbs + bottle flat lay */
  ingredientsFlatlay: "/product/ingredients-flatlay.png",
  /** Legacy assets — keep paths but prefer new branded shots in UI */
  lifestyle: "/product/gallery-lifestyle.png",
  beforeAfterSplit: "/product/before-after-split.png",
  beforeAfterMacro: "/product/before-after-macro.png",
  beforeAfterGrid: "/product/before-after-grid.png",
  painSolution: "/product/pain-solution.png",
  ingredientsScience: "/product/ingredients-science.png",
  featuresVertical: "/product/features-vertical.png",
  homeBannerLegacy: "/product/home-banner.png",
  productBox: "/product/product-box.png",
  ingGinger: "/product/ing-ginger.png",
  ingGinseng: "/product/ing-ginseng.png",
  ingGanoderma: "/product/ing-ganoderma.png",
} as const;

export type ProductImageKey = keyof typeof PRODUCT_IMAGES;

/** PDP gallery — real packshot first (what the customer receives) */
export const GALLERY_IMAGES = [
  { src: PRODUCT_IMAGES.packaging, alt: "نور الشيب — العلبة والبخاخ الأصلية 100مل", objectPosition: "center" as const, fit: "contain" as const },
  { src: PRODUCT_IMAGES.heroMain, alt: "بخاخ نور الشيب العشبي", objectPosition: "left center" as const, fit: "cover" as const },
  { src: PRODUCT_IMAGES.ingredientsFlatlay, alt: "المكوّنات العشبية الأربعة", objectPosition: "center" as const, fit: "cover" as const },
] as const;

/** Section → image mapping (branded assets first) */
export const SECTION_IMAGES = {
  pain: PRODUCT_IMAGES.ingredientsFlatlay,
  painAlt: PRODUCT_IMAGES.heroMain,
  beforeAfter: PRODUCT_IMAGES.ingredientsFlatlay,
  beforeAfterAlt: PRODUCT_IMAGES.heroMain,
  ingredients: PRODUCT_IMAGES.ingredientsFlatlay,
  science: PRODUCT_IMAGES.ingredientsFlatlay,
  authority: PRODUCT_IMAGES.heroMain,
  expert: PRODUCT_IMAGES.ingredientsFlatlay,
  howToUse: PRODUCT_IMAGES.heroMain,
  comparison: PRODUCT_IMAGES.heroMain,
  guarantee: PRODUCT_IMAGES.heroMain,
  cod: PRODUCT_IMAGES.heroMain,
} as const;

export const INGREDIENT_IMAGES = [
  { src: PRODUCT_IMAGES.ingGinger, nameAr: "الزنجبيل", nameEn: "Ginger" },
  { src: PRODUCT_IMAGES.ingGanoderma, nameAr: "الريشي", nameEn: "Ganoderma" },
  { src: PRODUCT_IMAGES.ingGinseng, nameAr: "الجينسنغ", nameEn: "Ginseng" },
  { src: PRODUCT_IMAGES.ingredientsFlatlay, nameAr: "الهوشو و", nameEn: "He Shou Wu" },
] as const;
