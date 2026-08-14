export const metadata = {
  title: "تواصل | نورالداخل — صيدلية الشعر السعودية",
  description: "تواصلي مع فريق نورالداخل — دعم سعودي خلال 24 ساعة.",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-16 md:py-20">
      <p className="text-xs font-english tracking-widest text-brand-gold-deep uppercase mb-3">Contact Us</p>
      <h1 className="text-3xl font-extrabold text-brand-forest">تواصلي معنا</h1>
      <p className="mt-2 text-brand-ink/60 leading-relaxed">
        فريق نورالداخل يرد على استفساراتك خلال 24 ساعة — أيام العمل.
      </p>
      <div className="mt-8 space-y-5 bg-white p-8 rounded-2xl shadow-card border border-brand-cream-dark">
        <div>
          <p className="text-xs text-brand-gold-deep font-semibold mb-1">البريد الإلكتروني</p>
          <a href="mailto:hello@nurdakhil.com" className="font-bold text-brand-forest hover:underline">
            hello@nurdakhil.com
          </a>
        </div>
        <div>
          <p className="text-xs text-brand-gold-deep font-semibold mb-1">الموقع</p>
          <p className="text-brand-ink/60">الرياض · المملكة العربية السعودية</p>
        </div>
        <div>
          <p className="text-xs text-brand-gold-deep font-semibold mb-1">ساعات العمل</p>
          <p className="text-brand-ink/60">الأحد – الخميس · 9 ص – 6 م</p>
        </div>
        <div>
          <p className="text-xs text-brand-gold-deep font-semibold mb-1">الطلبات</p>
          <p className="text-brand-ink/60 text-sm leading-relaxed">
            للطلبات الجديدة استخدمي زر «إتمام الطلب» في السلة — الدفع عند الاستلام لجميع مناطق المملكة.
          </p>
        </div>
      </div>
    </div>
  );
}
