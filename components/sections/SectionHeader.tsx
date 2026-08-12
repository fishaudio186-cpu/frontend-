export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto mb-10" : "mb-10"}>
      {eyebrow && (
        <p className="text-xs font-english tracking-[0.2em] text-brand-gold uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-plum">{title}</h2>
      {subtitle && <p className="mt-3 text-[#6B6B6B] leading-relaxed">{subtitle}</p>}
    </div>
  );
}
