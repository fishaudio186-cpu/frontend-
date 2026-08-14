import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

/** Empty image slot — replace later with real assets */
export function ImagePlaceholder({
  label,
  aspect = "video",
  className,
}: {
  label?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
}) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
  }[aspect];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-dashed border-brand-forest/20",
        "bg-gradient-to-br from-brand-cream via-white to-brand-cream-dark",
        "flex flex-col items-center justify-center gap-3 text-center p-6",
        aspectClass,
        className
      )}
    >
      <div className="w-14 h-14 rounded-full bg-brand-forest/10 flex items-center justify-center">
        <ImageIcon className="w-7 h-7 text-brand-forest/40" />
      </div>
      <p className="text-sm font-bold text-brand-forest/50">{label || "صورة المنتج"}</p>
      <p className="text-[11px] text-brand-ink/45 max-w-[200px]">مساحة للصورة — تُستبدل لاحقاً</p>
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #1B4332 1px, transparent 1px), radial-gradient(circle at 80% 70%, #B89C6A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
