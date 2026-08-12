"use client";

import type { ProductContent } from "@/lib/product-content";
import type { Product } from "@/lib/products";
import { AlternatingSection } from "@/components/sections/AlternatingSection";
import { StoreImage } from "@/components/ui/StoreImage";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/Button";
import { PRODUCT_IMAGES, SECTION_IMAGES } from "@/lib/product-images";
import {
  ShieldCheck,
  Leaf,
  FlaskConical,
  BadgeCheck,
  Phone,
  Truck,
  RotateCcw,
  Heart,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

export function ProductPageSections({
  product,
  content,
  onAddToCart,
}: {
  product: Product;
  content: ProductContent;
  onAddToCart?: () => void;
}) {
  return (
    <>
      <section className="bg-brand-plum text-white py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-english tracking-widest text-brand-gold uppercase mb-2">
            Clinical Insight
          </p>
          <p className="text-2xl md:text-3xl font-extrabold leading-snug">
            {content.researchBanner.stat}
          </p>
          <p className="text-sm md:text-base opacity-90 mt-3 leading-relaxed max-w-2xl mx-auto">
            {content.researchBanner.source}
          </p>
        </div>
      </section>

      <AlternatingSection
        eyebrow="The Real Problem"
        title="هل تعرفين هذا الشعور؟"
        subtitle={content.painPoints[0]?.quote}
        imageSrc={SECTION_IMAGES.pain}
        imageAlt="المشكلة والحل — نور الشيب"
        imageSide="left"
        imageAspect="wide"
        imageObjectFit="contain"
        bg="white"
      >
        <p className="leading-relaxed text-base mb-4">{content.painPoints[0]?.solution}</p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2 items-start">
            <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
            <span>ليست مشكلة «شكل» فقط — بل ثقة في كل صورة ومناسبة</span>
          </li>
          <li className="flex gap-2 items-start">
            <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
            <span>الصالون مكلف وموعده يتأخر — وأنتِ تريدين فرقاً الآن</span>
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="w-4 h-4 text-brand-trust mt-0.5 shrink-0" />
            <span className="font-bold text-brand-plum">الحل يبدأ من تركيبة صحيحة — لا من وعود فارغة</span>
          </li>
        </ul>
      </AlternatingSection>

      {content.painPoints[1] && (
        <AlternatingSection
          eyebrow="Why Others Fail"
          title="الصالون مكلف — والمنتجات الرخيصة تخيب الأمل"
          subtitle={content.painPoints[1].solution}
          imageSrc={SECTION_IMAGES.painAlt}
          imageAlt="مقارنة المنتجات"
          imageSide="right"
          imageAspect="wide"
          imageObjectFit="contain"
          bg="cream"
        >
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            <div className="rounded-xl bg-white border p-4">
              <p className="text-xs font-bold text-red-500 mb-2">ما لا تريدينه</p>
              <ul className="text-sm space-y-1.5 text-[#6B6B6B]">
                <li>✗ رائحة كيماوية</li>
                <li>✗ نتيجة مصطنعة</li>
                <li>✗ لا يناسب مناخ الخليج</li>
              </ul>
            </div>
            <div className="rounded-xl bg-brand-plum/5 border border-brand-plum/20 p-4">
              <p className="text-xs font-bold text-brand-trust mb-2">نورالداخل</p>
              <ul className="text-sm space-y-1.5 text-brand-plum">
                <li>✓ تركيبة مدروسة</li>
                <li>✓ مظهر طبيعي</li>
                <li>✓ مصمّم للحر والرطوبة</li>
              </ul>
            </div>
          </div>
        </AlternatingSection>
      )}

      <AlternatingSection
        eyebrow="Authority · SFDA"
        title="منتج مرخّص — لا إعلان إنستغرام"
        subtitle="نورالداخل مبنية على الثقة قبل البيع. المنتج مسجّل ومعتمد للتوزيع في المملكة — لأن المرأة السعودية لا تشتري على أمل."
        imageSrc={SECTION_IMAGES.authority}
        imageAlt="منتج مرخّص من هيئة الغذاء والدواء"
        imageSide="left"
        imageAspect="square"
        bg="white"
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { icon: ShieldCheck, t: "مرخّص SFDA", d: "معتمد للتوزيع الرسمي" },
            { icon: Leaf, t: "حلال 100%", d: "بدون مكونات محرمة" },
            { icon: FlaskConical, t: "GMP", d: "تصنيع بمعايير معتمدة" },
            { icon: BadgeCheck, t: "مختبر", d: "تركيبة مفحوصة" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-3 p-3 rounded-xl bg-brand-cream border border-brand-cream-dark">
              <Icon className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-brand-plum text-sm">{t}</p>
                <p className="text-xs text-[#6B6B6B]">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm mt-4 leading-relaxed border-r-4 border-brand-gold pr-4 text-[#5A5A5A]">
          «لا أضع على شعري شيئاً لا أعرف مصدره. أول ما رأيت التسجيل والوضوح — طلبت.»
          <span className="block text-xs text-brand-plum font-bold mt-1">— مشترية مؤكدة · الرياض</span>
        </p>
      </AlternatingSection>

      <AlternatingSection
        eyebrow="Science · Ingredients"
        title="السرّ في التركيز — لا في قائمة طويلة"
        subtitle="كل مكوّن له دور واضح. نشرح الجرعة والفائدة — بدون أسرار."
        imageSrc={SECTION_IMAGES.ingredients}
        imageAlt="مكوّنات عشبية — جينسنغ وزنجبيل وريشي"
        imageSide="right"
        imageAspect="wide"
        imageObjectFit="contain"
        bg="cream"
      >
        <div className="space-y-3">
          {content.ingredients.map((ing) => (
            <div key={ing.name} className="bg-white rounded-xl p-4 border shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-extrabold text-brand-plum">{ing.name}</h3>
                {ing.dose && (
                  <span className="text-xs bg-brand-plum/10 text-brand-plum px-2 py-0.5 rounded-full font-bold">
                    {ing.dose}
                  </span>
                )}
              </div>
              <p className="font-bold text-sm mt-2 text-brand-trust">{ing.benefit}</p>
              <p className="text-sm text-[#6B6B6B] mt-1 leading-relaxed">{ing.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {content.freeFrom.map((f) => (
            <span key={f} className="text-xs bg-white border px-3 py-1.5 rounded-full text-brand-plum font-medium">
              ✓ {f}
            </span>
          ))}
        </div>
        <p className="text-[11px] text-[#9A9A9A] mt-3">
          *النتائج تختلف حسب نوع الشعر والاستخدام المنتظم. منتج تجميلي — لا يغني عن استشارة مختص.
        </p>
      </AlternatingSection>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader
            eyebrow="Real Results"
            title="تركيبة تدعم مظهر اللون الطبيعي"
            subtitle="مكوّنات عشبية مركّزة — نتائج واقعية مع الاستخدام المنتظم"
            center
          />
          <StoreImage
            src={SECTION_IMAGES.beforeAfter}
            alt="تركيبة نور الشيب — مكوّنات عشبية طبيعية"
            aspect="wide"
            objectFit="cover"
            className="mt-8"
          />
        </div>
      </section>

      <AlternatingSection
        eyebrow="Expert Proof"
        title="تركيبة موثوقة — لا وعود تسويقية"
        subtitle="خبرة + أرقام + شفافية. هذا ما يفرّق علامة عن متجر عشوائي."
        imageSrc={SECTION_IMAGES.expert}
        imageAlt="العلبة والبخاخ — نور الشيب"
        imageSide="left"
        imageAspect="square"
        bg="white"
      >
        <blockquote className="bg-brand-plum/5 border-r-4 border-brand-plum p-5 rounded-xl mb-6">
          <p className="leading-relaxed text-[#5A5A5A]">&ldquo;{content.expertQuote.text}&rdquo;</p>
          <footer className="mt-3 font-bold text-sm text-brand-plum">— {content.expertQuote.title}</footer>
        </blockquote>
        <div className="grid grid-cols-2 gap-3">
          {content.stats.map((s) => (
            <div key={s.label} className="text-center p-4 bg-brand-cream rounded-xl border border-brand-cream-dark">
              <p className="text-2xl font-extrabold text-brand-plum">{s.value}</p>
              <p className="text-xs text-[#6B6B6B] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </AlternatingSection>

      <AlternatingSection
        eyebrow="Results Timeline"
        title="ماذا ستلين خلال أول 30 يوماً؟"
        subtitle="توقعات واقعية — لا معجزات بين ليلة وضحاها. المرآة تقولها قبل أن تقوليها."
        imageSrc={SECTION_IMAGES.science}
        imageAlt="علم التركيبة العشبية"
        imageSide="right"
        imageAspect="wide"
        imageObjectFit="contain"
        bg="cream"
      >
        <div className="space-y-4">
          {content.timeline.map((t, i) => (
            <div key={t.period} className="flex gap-4 bg-white rounded-xl p-4 border">
              <span className="w-10 h-10 rounded-full bg-brand-gold text-white flex items-center justify-center font-extrabold shrink-0">
                {i + 1}
              </span>
              <div>
                <p className="text-xs text-brand-trust font-bold">{t.period}</p>
                <h3 className="font-extrabold text-brand-plum mt-0.5">{t.title}</h3>
                <p className="text-sm text-[#6B6B6B] mt-1 leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </AlternatingSection>

      <ReviewsSection
        eyebrow="Verified Reviews"
        title={`ما تقوله ${product.reviewCount}+ سعودية جربن ${product.nameAr}`}
        subtitle="مشتريات مؤكدة من الرياض وجدة والدمام — لا تعليقات مفبركة."
        reviews={content.reviews}
      />

      <AlternatingSection
        eyebrow="Compare & Decide"
        title="قارني — وقرّري بنفسك"
        subtitle="كل بديل جربتِه… ولماذا لم يحلّ المشكلة من جذورها."
        imageSrc={SECTION_IMAGES.comparison}
        imageAlt="مقارنة البدائل"
        imageSide="left"
        imageAspect="wide"
        imageObjectFit="contain"
        bg="white"
      >
        <div className="space-y-3">
          {content.comparisons.map((c) => (
            <div
              key={c.name}
              className={`rounded-xl p-4 border-2 ${
                c.highlight
                  ? "border-brand-plum bg-brand-plum/5 shadow-card"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex flex-wrap justify-between gap-2 mb-2">
                <h3 className="font-extrabold text-sm md:text-base">{c.name}</h3>
                <span className="text-brand-plum font-bold text-sm">{c.price}</span>
              </div>
              {c.cons.length > 0 && (
                <ul className="text-sm text-red-700/80 space-y-1">
                  {c.cons.map((x) => (
                    <li key={x}>✗ {x}</li>
                  ))}
                </ul>
              )}
              {c.pros && (
                <ul className="text-sm text-brand-trust space-y-1 mt-1">
                  {c.pros.map((x) => (
                    <li key={x}>✓ {x}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </AlternatingSection>

      <AlternatingSection
        eyebrow="How to Use"
        title="أبسط روتين ستجربينه"
        subtitle="دقائق قليلة — بدون تعقيد ولا صالون. السهولة = الالتزام = النتيجة."
        imageSrc={SECTION_IMAGES.howToUse}
        imageAlt="طريقة الاستخدام"
        imageSide="right"
        imageAspect="wide"
        imageObjectFit="contain"
        bg="cream"
      >
        <div className="grid grid-cols-2 gap-3 mb-6">
          {content.usageStats.map((s) => (
            <div key={s.label} className="text-center p-3 bg-white rounded-xl border">
              <p className="text-xl font-extrabold text-brand-plum">{s.value}</p>
              <p className="text-[11px] text-[#6B6B6B]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {content.howToUse.map((h, i) => (
            <div key={h.title} className="flex gap-3 items-start">
              <span className="w-8 h-8 rounded-full bg-brand-plum text-brand-gold flex items-center justify-center font-bold shrink-0 text-sm">
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-brand-plum">{h.title}</p>
                <p className="text-sm text-[#6B6B6B]">{h.body}</p>
              </div>
            </div>
          ))}
        </div>
      </AlternatingSection>

      <AlternatingSection
        eyebrow="30-Day Guarantee"
        title="30 يوماً — أو أموالك ترجع. بدون أسئلة."
        subtitle="جرّبي المنتج كاملاً. إذا لم تحسي بفرق يستحق، تواصلي معنا وسنسترد المبلغ — بدون إجراءات معقدة."
        imageSrc={SECTION_IMAGES.guarantee}
        imageAlt="ضمان الرضا وتوصيل مجاني"
        imageSide="left"
        imageAspect="wide"
        imageObjectFit="contain"
        bg="white"
      >
        <div className="space-y-3">
          {[
            "جرّبي لمدة كاملة — لا يومين ثم قرار",
            "لم يناسبك؟ تواصلي معنا ونسترد المبلغ",
            "بدون أسئلة مزعجة — رضاك أولويتنا",
            "هذا الضمان موجود لأننا واثقون من التركيبة",
          ].map((line) => (
            <div key={line} className="flex gap-3 items-start">
              <RotateCcw className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">{line}</p>
            </div>
          ))}
        </div>
        {onAddToCart && (
          <Button className="mt-6 bg-brand-plum hover:bg-brand-plum-light" onClick={onAddToCart}>
            ابدئي الروتين بضمان 30 يوم
          </Button>
        )}
      </AlternatingSection>

      <section className="py-16 md:py-20 bg-brand-plum text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <StoreImage
              src={SECTION_IMAGES.cod}
              alt="طلب آمن — دفع عند الاستلام"
              aspect="wide"
              objectFit="contain"
              className="hidden md:block"
            />
            <div className="text-center md:text-right">
              <p className="text-xs font-english tracking-widest text-brand-gold uppercase mb-2">
                COD · Confirmation · Delivery
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold">
                طلب آمن — تأكيد بالجوال — توصيل لباب بيتك
              </h2>
              <p className="mt-3 text-white/85 max-w-2xl leading-relaxed">
                نعرف أن الطلب أونلاين يثير القلق. لذلك: لا تدفعين إلا عند الاستلام،
                ونتواصل معك قبل الشحن لتأكيد الطلب.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                t: "① تأكيد بالجوال",
                d: "نتواصل معك خلال 24 ساعة على رقمك. لا نشحن إلا بعد تأكيد الطلب والعنوان.",
              },
              {
                icon: Truck,
                t: "② توصيل سريع",
                d: "1–3 أيام للمدن الرئيسية. المندوب يتواصل قبل الوصول — توصيل لباب البيت.",
              },
              {
                icon: Heart,
                t: "③ ادفعي عند الاستلام",
                d: "كاش أو مدى عند الباب. راجعي الطلب أولاً — ثم ادفعي. بدون مخاطرة.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15">
                <Icon className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="font-extrabold text-lg mb-2">{t}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            {[
              { t: "بدون دفع أونلاين", d: "دفع عند الاستلام" },
              { t: "تأكيد قبل الشحن", d: "اتصال شخصي" },
              { t: "ضمان 30 يوم", d: "استرجاع كامل" },
              { t: "دعم سعودي", d: "نرد خلال 24 ساعة" },
            ].map((x) => (
              <div key={x.t} className="p-3">
                <p className="font-bold text-brand-gold">{x.t}</p>
                <p className="text-white/70 text-xs mt-1">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-extrabold text-xl text-brand-plum mb-2">نوصّل لكل مدن المملكة</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">من الرياض إلى جدة والدمام — وجميع المناطق</p>
          <div className="flex flex-wrap justify-center gap-2">
            {content.cities.map((c) => (
              <span key={c} className="text-sm bg-white border border-brand-cream-dark px-3 py-1.5 rounded-full shadow-sm">
                {c}
              </span>
            ))}
            <span className="text-sm text-brand-plum font-bold px-3 py-1.5">+ جميع المناطق</span>
          </div>
          <p className="text-xs text-[#9A9A9A] mt-4">شركاء التوصيل: أرامكس · سمسا · ناقل</p>
        </div>
      </section>

      <FAQSection
        title="قبل أن تطلبي — كل ما تحتاجين معرفته"
        subtitle="أسئلة عن التسجيل، الدفع عند الاستلام، التوصيل، والضمان."
        items={content.faqs}
      />

      <section className="py-14 bg-white border-y border-brand-cream-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Sparkles className="w-8 h-8 text-brand-gold mx-auto mb-3" />
          <h2 className="text-2xl font-extrabold text-brand-plum">
            جاهزة لبدء روتين {product.nameAr}؟
          </h2>
          <p className="mt-3 text-[#6B6B6B] leading-relaxed">
            قطعة 199 · قطعتان 279 (وفّري 119) · 3 قطع 349 (وفّري 248)
            <br />
            دفع عند الاستلام · ضمان 30 يوم · تأكيد بالجوال
          </p>
          {onAddToCart && (
            <Button className="mt-6 text-lg px-12 bg-brand-plum hover:bg-brand-plum-light" onClick={onAddToCart}>
              {content.ctaVerb}
            </Button>
          )}
        </div>
      </section>
    </>
  );
}
