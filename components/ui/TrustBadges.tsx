import { cn } from "@/lib/utils";

export function TrustBadges({ className }: { className?: string }) {
  const badges = ["مسجّل", "حلال", "دفع عند الاستلام", "ضمان 30 يوم"];
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {badges.map((b) => (
        <span
          key={b}
          className="text-xs bg-brand-trust/10 text-brand-trust px-3 py-1 rounded-full font-medium"
        >
          ✓ {b}
        </span>
      ))}
    </div>
  );
}
