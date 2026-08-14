import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { IngredientsShowcase } from "@/components/sections/IngredientsShowcase";
import { TrustBadgeRow } from "@/components/ui/TrustBadgeRow";
import { HERO_SLUG } from "@/lib/products";
import { getProductContent } from "@/lib/product-content";
import { ShieldCheck, Truck, RotateCcw, BadgeCheck, ArrowLeft } from "lucide-react";

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
      {/* Signature hero — dark pharmacy stage, product plate first */}
      <section className="relative overflow-hidden hero-stage text-white">
        <div className="hero-rings" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-12 md:gap-14 items-center">
            <div className="md:col-span-6 lg:col-span-5 order-1 md:order-2">
              <HeroShowcase />
            </div>

            <div className="md:col-span-6 lg:col-span-7 order-2 md:order-1 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/35 px-4 py-1.5 text-[11px] md:text-xs text-brand-gold tracking-wide">
                صيدلية الشعر السعودية · مرخّص SFDA
              </span>

              <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-[1.25] tracking-tight">
                {content.heroHeadline}
              </h1>

              <p className="mt-5 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                بخاخ عشبي سريري بتركيبة الهوشو و، الجينسنغ، الزنجبيل، والريشي — يستهدف الرمادي من
                جذوره. حلال 100%، مرخّص من هيئة الغذاء والدواء، وبدون صبغة كيماوية.
              </p>

              <TrustBadgeRow className="mt-8 max-w-xl" />

              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link href={`/products/${HERO_SLUG}`}>
                  <Button className="text-base px-9 py-4 bg-brand-gold text-brand-forest hover:bg-brand-gold-dark rounded-2xl font-extrabold shadow-[0_18px_45px_rgba(201,165,107,0.28)]">
                    ابدئي روتين نور الشيب
                  </Button>
                </Link>
                <Link
                  href={`/products/${HERO_SLUG}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-brand-gold transition-colors"
                >
                  تعرّفي على التركيبة
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-xs text-white/45 mt-7">
                ضمان 30 يوم · شحن مجاني · دفع عند الاستلام
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProduct />

      <IngredientsShowcase />

      <section className="py-20 md:py-28 atmosphere">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Why Nurdakhil"
            title="صيدلية شعر، لا متجر تجميل عشوائي"
            subtitle="نورالداخل مبنية على أربعة أركان: الترخيص، الحلال، التركيبة السريرية، وراحة العميلة السعودية."
          />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
            {WHY_ITEMS.map((item, i) => (
              <div key={item.title} className="border-t border-brand-forest/15 pt-6">
                <p className="font-english text-xs tracking-[0.2em] text-brand-gold-deep mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-extrabold text-lg text-brand-forest">{item.title}</h3>
                <p className="mt-3 text-brand-ink/60 leading-relaxed">{item.body}</p>
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

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="How It Works"
            title="من الطلب إلى باب بيتك في 3 خطوات"
            subtitle="بدون دفع أونلاين. بدون التزام. بدون مخاطرة."
          />
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                n: "01",
                t: "اختاري باقتك",
                d: "قطعة واحدة 199 · قطعتان 279 · 3 قطع 349. وفّري أكثر مع الباقات.",
              },
              {
                n: "02",
                t: "أكّدي طلبك (بدون دفع)",
                d: "اسمك ورقم جوالك فقط. فريقنا يتواصل لتأكيد العنوان.",
              },
              {
                n: "03",
                t: "استلمي وادفعي",
                d: "نوصل خلال 1–3 أيام. الدفع كاش أو مدى عند الاستلام.",
              },
            ].map((s) => (
              <div key={s.n} className="text-center md:text-right">
                <span className="font-english text-brand-gold-deep tracking-[0.2em] text-sm font-semibold">
                  {s.n}
                </span>
                <h3 className="font-extrabold text-lg mt-3 text-brand-forest">{s.t}</h3>
                <p className="text-sm text-brand-ink/60 mt-3 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,#C9A56B,transparent_45%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_80%,#1E6145,transparent_40%)]" />
        <div className="max-w-3xl mx-auto px-4 text-center relative animate-fade-in">
          <p className="font-english text-xs tracking-[0.3em] text-brand-gold uppercase mb-4">
            Begin Your Ritual
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            شعرك يستحق علماً، لا وعوداً فارغة
          </h2>
          <p className="mt-5 opacity-85 text-base leading-relaxed max-w-xl mx-auto">
            ابدئي روتين نور الشيب اليوم — دفع عند الاستلام، شحن مجاني، وضمان استرجاع 30 يوم.
          </p>
          <Link href={`/products/${HERO_SLUG}`} className="inline-block mt-10">
            <Button className="bg-brand-gold text-brand-forest hover:bg-brand-gold-dark text-lg px-12 py-4 font-extrabold rounded-2xl">
              ابدئي روتين نور الشيب
            </Button>
          </Link>
        </div>
      </section>

      <FAQSection
        title="أسئلة قبل الطلب"
        subtitle="كل ما تحتاجين معرفته قبل الدفع عند الاستلام."
        items={content.faqs.slice(0, 6)}
      />

      <section className="py-14 bg-brand-cream border-t border-brand-forest/8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Truck, t: "شحن مجاني", d: "لجميع مناطق المملكة" },
            { icon: BadgeCheck, t: "دفع عند الاستلام", d: "ادفعي بعد الاستلام" },
            { icon: RotateCcw, t: "ضمان 30 يوم", d: "استرجاع كامل" },
            { icon: ShieldCheck, t: "مرخّص · حلال", d: "تركيبة عشبية معتمدة" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="text-center">
              <Icon className="w-7 h-7 text-brand-forest mx-auto mb-3" strokeWidth={1.5} />
              <p className="font-bold text-sm text-brand-forest">{t}</p>
              <p className="text-xs text-brand-ink/50 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
