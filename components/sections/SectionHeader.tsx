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
    <div className={center ? "text-center max-w-2xl mx-auto mb-14" : "mb-14"}>
      {eyebrow && (
        <p className="text-xs font-english tracking-[0.28em] text-brand-gold uppercase mb-3 font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-4xl font-extrabold text-brand-plum leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-brand-ink/60 leading-relaxed text-base">{subtitle}</p>}
    </div>
  );
}
