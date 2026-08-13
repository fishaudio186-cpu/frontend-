import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TrustIconGrid } from "@/components/sections/TrustIconGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { IngredientsShowcase } from "@/components/sections/IngredientsShowcase";
import { StoreImage } from "@/components/ui/StoreImage";
import { HERO_SLUG } from "@/lib/products";
import { getProductContent } from "@/lib/product-content";
import { PRODUCT_IMAGES } from "@/lib/product-images";
import { ShieldCheck, Truck, RotateCcw, BadgeCheck } from "lucide-react";

const content = getProductContent(HERO_SLUG)!;

const WHY_ITEMS = [
  {
    title: "مرخّص من هيئة الغذاء والدواء (SFDA)",
    body: "منتج مسجّل رسمياً في الهيئة العامة للغذاء والدواء السعودية — ليس مجرد إعلان على إنستغرام.",
  },
  {
    title: "حلال 100% · تركيبة عشبية نباتية",
    body: "هوشو و، جينسنغ، زنجبيل، وريشي — خالية من المواد المحرمة والكيماويات القاسية.",
  },
  {
    title: "تركيبة سريرية، لا خلطات عشوائية",
    body: "كل مكوّن بجرعة مدروسة. نشرح المصدر والنسبة — بدون مكونات سرية.",
  },
  {
    title: "ضمان 30 يوم · الدفع عند الاستلام",
    body: "جرّبي المنتج كاملاً، وإذا لم تلاحظي فرقاً نرجّع لك المبلغ. تدفعين لما يوصلك الطلب فقط.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-brand-cream py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm text-brand-trust font-semibold mb-3">
                صيدلية الشعر السعودية · مرخّصة SFDA · حلال
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-brand-plum leading-[1.2]">
                {content.heroHeadline}
              </h1>
              <p className="mt-6 text-base md:text-lg text-[#5A5A5A] leading-relaxed">
                {content.heroSubhead}
              </p>
              <div className="mt-8">
                <TrustIconGrid />
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href={`/products/${HERO_SLUG}`}>
                  <Button className="text-base px-10 bg-brand-plum hover:bg-brand-plum-light">
                    ابدئي روتين نور الشيب
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-[#6B6B6B] mt-4">
                ضمان استرجاع 30 يوم · شحن مجاني · دفع عند الاستلام
              </p>
            </div>
            <div className="order-1 md:order-2">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      <FeaturedProduct />

      <IngredientsShowcase />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Why Nurdakhil"
            title="صيدلية شعر، لا متجر تجميل عشوائي"
            subtitle="نورالداخل مبنية على أربعة أركان: الترخيص، الحلال، التركيبة السريرية، وراحة العميلة السعودية."
          />
          <div className="relative mb-10 max-w-md mx-auto">
            <StoreImage
              src={PRODUCT_IMAGES.packShot}
              alt="نور الشيب — العلبة والبخاخ الأصلية"
              aspect="square"
              objectFit="contain"
              className="bg-white"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {WHY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-brand-cream border border-brand-cream-dark shadow-card hover:shadow-premium transition"
              >
                <h3 className="font-extrabold text-lg text-brand-plum">{item.title}</h3>
                <p className="mt-3 text-[#6B6B6B] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        eyebrow="Verified Reviews"
        title="عميلات قرأن المكوّنات قبل أن يطلبن"
        subtitle="نورالداخل اختيار من تبحث عن ثقة قبل السعر — قرأن، تحقّقن، ثم اشترين."
        reviews={content.reviews}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="How It Works"
            title="من الطلب إلى باب بيتك في 3 خطوات"
            subtitle="بدون دفع أونلاين. بدون التزام. بدون مخاطرة."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "١",
                t: "اختاري باقتك",
                d: "قطعة واحدة 199 · قطعتان 279 · 3 قطع 349. كلها نفس التركيبة — وفّري أكثر مع الباقات.",
              },
              {
                n: "٢",
                t: "أكّدي طلبك (بدون دفع)",
                d: "اسمك ورقم جوالك فقط. فريقنا يتواصل معك خلال ساعات لتأكيد العنوان.",
              },
              {
                n: "٣",
                t: "استلمي وادفعي",
                d: "نوصل الطلب لباب بيتك خلال 1–3 أيام. الدفع كاش أو مدى عند الاستلام.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="bg-brand-cream rounded-2xl p-8 text-center border border-brand-cream-dark relative"
              >
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-brand-plum text-brand-gold font-extrabold text-xl">
                  {s.n}
                </span>
                <h3 className="font-extrabold text-lg mt-5 text-brand-plum">{s.t}</h3>
                <p className="text-sm text-[#6B6B6B] mt-3 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-plum text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#B89C6A,transparent_50%)]" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <p className="text-xs font-english tracking-widest text-brand-gold uppercase mb-3">
            Begin Your Ritual
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold">
            شعرك يستحق علماً، لا وعوداً فارغة
          </h2>
          <p className="mt-4 opacity-90 text-base leading-relaxed">
            ابدئي روتين نور الشيب اليوم — دفع عند الاستلام، شحن مجاني داخل المملكة، وضمان استرجاع 30 يوم.
          </p>
          <Link href={`/products/${HERO_SLUG}`} className="inline-block mt-8">
            <Button className="bg-brand-gold text-brand-plum hover:bg-brand-gold-dark text-lg px-12 font-extrabold">
              ابدئي روتين نور الشيب
            </Button>
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs opacity-80">
            <span>مرخّص SFDA</span>
            <span>·</span>
            <span>حلال 100%</span>
            <span>·</span>
            <span>شحن مجاني</span>
            <span>·</span>
            <span>ضمان 30 يوم</span>
          </div>
        </div>
      </section>

      <FAQSection
        title="أسئلة قبل الطلب"
        subtitle="كل ما تحتاجين معرفته قبل الدفع عند الاستلام."
        items={content.faqs.slice(0, 6)}
      />

      <section className="py-12 bg-brand-cream border-t">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, t: "شحن مجاني", d: "لجميع مناطق المملكة" },
            { icon: BadgeCheck, t: "دفع عند الاستلام", d: "ادفعي بعد الاستلام" },
            { icon: RotateCcw, t: "ضمان 30 يوم", d: "استرجاع كامل بدون أسئلة" },
            { icon: ShieldCheck, t: "مرخّص · حلال", d: "تركيبة عشبية معتمدة" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="text-center">
              <Icon className="w-8 h-8 text-brand-plum mx-auto mb-2" />
              <p className="font-bold text-sm text-brand-plum">{t}</p>
              <p className="text-xs text-[#6B6B6B] mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
