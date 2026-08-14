import { cn } from "@/lib/utils";

const BADGES = [
  { top: "SFDA", bottom: "مرخّص رسمياً" },
  { top: "حلال", bottom: "عشبي 100%" },
  { top: "GMP", bottom: "تصنيع معتمد" },
  { top: "30 يوم", bottom: "ضمان استرجاع" },
];

/** Four certification tiles — readable on both the dark hero and light sections. */
export function TrustBadgeRow({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div className={cn("grid grid-cols-4 gap-1.5 sm:gap-2.5", className)}>
      {BADGES.map((badge) => (
        <div
          key={badge.top}
          className={cn(
            "rounded-lg sm:rounded-xl border px-1.5 sm:px-3 py-2 sm:py-3 text-center transition-colors",
            isDark
              ? "border-white/15 bg-white/[0.04] hover:border-brand-gold/50"
              : "border-brand-forest/12 bg-white hover:border-brand-gold/60"
          )}
        >
          <p
            className={cn(
              "font-english text-[10px] sm:text-[13px] font-semibold tracking-[0.08em] sm:tracking-[0.12em]",
              isDark ? "text-brand-gold" : "text-brand-forest"
            )}
          >
            {badge.top}
          </p>
          <p
            className={cn(
              "hidden sm:block mt-1 text-[10px] leading-tight",
              isDark ? "text-white/55" : "text-brand-ink/55"
            )}
          >
            {badge.bottom}
          </p>
        </div>
      ))}
    </div>
  );
}
