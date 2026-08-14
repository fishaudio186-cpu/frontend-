import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { IngredientsShowcase } from "@/components/sections/IngredientsShowcase";
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
      {/* Full-bleed hero — brand first, one composition */}
      <section className="relative overflow-hidden atmosphere border-b border-brand-plum/5">
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-14 md:pt-10 md:pb-0">
          <div className="grid md:grid-cols-12 gap-8 md:gap-6 items-stretch min-h-[78vh] md:min-h-[86vh]">
            <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1 py-4 md:py-16 animate-fade-up">
              <p className="font-english text-[11px] md:text-xs tracking-[0.28em] uppercase text-brand-gold font-semibold mb-5">
                Saudi Hair Pharmacy · SFDA
              </p>
              <p className="text-4xl md:text-6xl font-extrabold text-brand-plum leading-none tracking-tight">
                نورالداخل
              </p>
              <p className="font-english text-brand-gold/90 text-sm md:text-base tracking-[0.35em] uppercase mt-2 mb-8">
                nurdakhil
              </p>
              <h1 className="text-xl md:text-3xl font-bold text-brand-ink leading-[1.35] max-w-md">
                {content.heroHeadline}
              </h1>
              <p className="mt-5 text-sm md:text-base text-brand-ink/60 leading-relaxed max-w-md">
                بخاخ عشبي سريري ضد الرمادي — حلال، مرخّص SFDA، وبدون صبغة كيماوية.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link href={`/products/${HERO_SLUG}`}>
                  <Button className="text-base px-9 py-4 bg-brand-plum hover:bg-brand-plum-light rounded-2xl shadow-premium">
                    ابدئي روتين نور الشيب
                  </Button>
                </Link>
                <Link
                  href={`/products/${HERO_SLUG}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-plum/80 hover:text-brand-plum transition-colors"
                >
                  تعرّفي على التركيبة
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-xs text-brand-ink/45 mt-6">
                ضمان 30 يوم · شحن مجاني · دفع عند الاستلام
              </p>
            </div>

            <div className="md:col-span-7 order-1 md:order-2 relative -mx-4 md:mx-0 min-h-[440px] md:min-h-[86vh]">
              <HeroShowcase />
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
              <div key={item.title} className="border-t border-brand-plum/15 pt-6">
                <p className="font-english text-xs tracking-[0.2em] text-brand-gold mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-extrabold text-lg text-brand-plum">{item.title}</h3>
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
                <span className="font-english text-brand-gold tracking-[0.2em] text-sm font-semibold">
                  {s.n}
                </span>
                <h3 className="font-extrabold text-lg mt-3 text-brand-plum">{s.t}</h3>
                <p className="text-sm text-brand-ink/60 mt-3 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-plum text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,#C9A56B,transparent_45%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_80%,#6B1F3A,transparent_40%)]" />
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
            <Button className="bg-brand-gold text-brand-plum hover:bg-brand-gold-dark text-lg px-12 py-4 font-extrabold rounded-2xl">
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

      <section className="py-14 bg-brand-cream border-t border-brand-plum/8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Truck, t: "شحن مجاني", d: "لجميع مناطق المملكة" },
            { icon: BadgeCheck, t: "دفع عند الاستلام", d: "ادفعي بعد الاستلام" },
            { icon: RotateCcw, t: "ضمان 30 يوم", d: "استرجاع كامل" },
            { icon: ShieldCheck, t: "مرخّص · حلال", d: "تركيبة عشبية معتمدة" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="text-center">
              <Icon className="w-7 h-7 text-brand-plum mx-auto mb-3" strokeWidth={1.5} />
              <p className="font-bold text-sm text-brand-plum">{t}</p>
              <p className="text-xs text-brand-ink/50 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
