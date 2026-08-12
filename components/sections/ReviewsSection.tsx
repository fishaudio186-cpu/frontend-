import type { Review } from "@/lib/product-content";
import { Star } from "lucide-react";

export function ReviewsSection({
  eyebrow,
  title,
  subtitle,
  reviews,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  reviews: Review[];
}) {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        {eyebrow && (
          <p className="text-xs font-english tracking-widest text-brand-gold uppercase text-center mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-brand-plum mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-center text-[#6B6B6B] mb-12 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="bg-white rounded-2xl p-6 border border-brand-cream-dark shadow-card flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-[#5A5A5A] leading-relaxed flex-1 text-sm">&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3 pt-4 border-t border-brand-cream">
                <div className="w-11 h-11 rounded-full bg-brand-plum text-brand-gold flex items-center justify-center font-extrabold text-lg shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm text-brand-plum">{r.name}</p>
                  <p className="text-xs text-[#6B6B6B]">
                    {r.age} سنة · {r.city} · مشترية مؤكدة
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
