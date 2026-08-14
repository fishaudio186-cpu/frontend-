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
    <div className={center ? "text-center max-w-2xl mx-auto mb-8 md:mb-14" : "mb-8 md:mb-14"}>
      {eyebrow && (
        <p className="text-[10px] md:text-xs font-english tracking-[0.24em] md:tracking-[0.28em] text-brand-gold-deep uppercase mb-2 md:mb-3 font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-4xl font-extrabold text-brand-forest leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 md:mt-4 text-brand-ink/60 leading-relaxed text-sm md:text-base">{subtitle}</p>}
    </div>
  );
}
