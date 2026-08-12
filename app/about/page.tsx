export const metadata = {
  title: "عنّا | نورالداخل — صيدلية الشعر السعودية",
  description: "قصة نورالداخل — علامة شعر سعودية مرخّصة، مبنية على الثقة والشفافية.",
};

const PILLARS = [
  {
    title: "مرخّص من هيئة الغذاء والدواء",
    body: "كل منتج مسجّل رسمياً في الهيئة العامة للغذاء والدواء السعودية — ليس مجرد منتج تجميل من إنستغرام.",
  },
  {
    title: "حلال 100% · تركيبة نباتية",
    body: "مكوّنات عشبية مدروسة، خالية من المواد المحرمة والكيماويات القاسية.",
  },
  {
    title: "شفافية كاملة",
    body: "نشرح المصدر، الجرعة، والفائدة — بدون مكونات سرية. لأنك تستحقين أن تعرفي ما تضعينه على شعرك.",
  },
  {
    title: "صنع للمرأة السعودية",
    body: "تركيبات مصمّمة لمناخ الخليج — الحر، الرطوبة، ونمط الحياة السعودي.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-20">
      <p className="text-xs font-english tracking-widest text-brand-gold uppercase mb-3">About Nurdakhil</p>
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-plum">قصة نورالداخل</h1>
      <p className="mt-6 text-lg leading-relaxed text-[#5A5A5A]">
        بدأت نورالداخل لأن أغلب منتجات الشعر أونلاين إما رخيصة ومشبوهة — أو مستوردة بلا ترخيص ولا شفافية.
        بنينا <strong className="text-brand-plum">صيدلية شعر سعودية</strong> تثق فيها المرأة قبل أن تدفع.
      </p>
      <p className="mt-4 leading-relaxed text-[#6B6B6B]">
        منتجنا الأول <strong>نور الشيب</strong> — بخاخ عشبي 100 مل ضد الرمادي. تركيبة مركّزة من هوشو و،
        جينسنغ، زنجبيل، وريشي. مسجّل، حلال، ومتاح بالدفع عند الاستلام في جميع مناطق المملكة.
      </p>
      <p className="mt-4 leading-relaxed text-[#6B6B6B]">
        نؤمن أن العناية بالشعر تبدأ من الداخل — من فروة الرأس الصحية وتركيبة موثوقة. لا وعود فارغة،
        لا إعلانات مبالغ فيها. فقط علم، ترخيص، وضمان 30 يوم.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {PILLARS.map((p) => (
          <div key={p.title} className="p-6 bg-brand-cream rounded-2xl border border-brand-cream-dark">
            <h3 className="font-extrabold text-brand-plum">{p.title}</h3>
            <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
