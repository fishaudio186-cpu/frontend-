export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl mx-auto px-4 py-16 prose prose-sm">{children}</div>;
}

function Policy({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-4 text-brand-ink/60 leading-relaxed">{children}</div>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <Policy title="سياسة الخصوصية">
      <p>نورالداخل تحترم خصوصيتك وفق أنظمة حماية البيانات في المملكة العربية السعودية.</p>
      <p>
        نجمع الاسم ورقم الجوال لمعالجة طلبك (الدفع عند الاستلام) فقط. لا نشارك بياناتك مع أطراف
        ثالثة إلا لشركاء التوصيل المعتمدين.
      </p>
    </Policy>
  );
}

export function TermsPolicy() {
  return (
    <Policy title="الشروط والأحكام">
      <p>باستخدامك لموقع nurdakhil.com فإنكِ توافقين على شروطنا.</p>
      <p>
        المنتجات تجميلية للعناية بالشعر. النتائج تختلف حسب نوع الشعر ودرجة الاستخدام. لا تُعد
        بديلاً عن استشارة طبية.
      </p>
    </Policy>
  );
}

export function ShippingPolicy() {
  return (
    <Policy title="الشحن والتوصيل">
      <p>التوصيل خلال 24–48 ساعة للمدن الرئيسية بعد تأكيد الطلب بالجوال.</p>
      <p>1–3 أيام عمل داخل المدن الرئيسية، و3–5 أيام لبقية المناطق.</p>
      <p>الشحن مجاني على جميع الطلبات داخل المملكة حالياً.</p>
      <p>شركاء التوصيل: أرامكس · سمسا · ناقل</p>
    </Policy>
  );
}

export function ReturnsPolicy() {
  return (
    <Policy title="الإرجاع والاستبدال">
      <p>
        ضمان رضا 30 يوم — تواصلي معنا على hello@nurdakhil.com إذا لم يناسبك المنتج، وسنسترد
        المبلغ بدون أسئلة.
      </p>
    </Policy>
  );
}

export function CodPolicy() {
  return (
    <Policy title="الدفع عند الاستلام">
      <p>
        الدفع عند الاستلام متاح في جميع مناطق المملكة. نتواصل معك خلال 24 ساعة لتأكيد الطلب
        والعنوان قبل الشحن.
      </p>
      <p>تدفعين المبلغ للمندوب عند استلام الطلب — كاش أو مدى.</p>
    </Policy>
  );
}
