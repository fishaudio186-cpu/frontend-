import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { StoreImage } from "@/components/ui/StoreImage";

/**
 * Alternating content block.
 * imageSide="left"  → image on LEFT of screen, text on RIGHT  (SFDA / odd authority)
 * imageSide="right" → image on RIGHT of screen, text on LEFT  (even sections)
 *
 * In RTL flex-row: first child = right side. So imageLeft → [text, image].
 */
export function AlternatingSection({
  eyebrow,
  title,
  subtitle,
  children,
  imageLabel,
  imageSrc,
  imageAlt,
  imageSide = "left",
  imageAspect = "video",
  imageObjectFit = "cover",
  bg = "white",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  imageLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  imageAspect?: "square" | "video" | "portrait" | "wide";
  imageObjectFit?: "cover" | "contain";
  bg?: "white" | "cream" | "forest";
  className?: string;
}) {
  const onForest = bg === "forest";
  const bgClass =
    bg === "cream" ? "bg-brand-cream" : onForest ? "bg-brand-forest text-white" : "bg-white";

  // RTL: first child lands on the RIGHT. For image on LEFT → text first, image second.
  const imageOnLeft = imageSide === "left";

  const textBlock = (
    <div className="flex-1 space-y-4">
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-english tracking-[0.2em] uppercase",
            onForest ? "text-brand-gold" : "text-brand-gold-deep"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl md:text-3xl font-extrabold leading-snug",
          onForest ? "text-white" : "text-brand-forest"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "leading-relaxed text-base",
            onForest ? "text-white/85" : "text-brand-ink/65"
          )}
        >
          {subtitle}
        </p>
      )}
      <div className={cn(onForest ? "text-white/90" : "text-brand-ink/65")}>{children}</div>
    </div>
  );

  const imageBlock = (
    <div className="flex-1 w-full">
      {imageSrc ? (
        <StoreImage
          src={imageSrc}
          alt={imageAlt ?? imageLabel ?? ""}
          aspect={imageAspect}
          objectFit={imageObjectFit}
        />
      ) : (
        <ImagePlaceholder label={imageLabel} aspect={imageAspect} />
      )}
    </div>
  );

  return (
    <section className={cn("py-16 md:py-24", bgClass, className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={cn(
            "flex flex-col gap-10 md:gap-14 items-center",
            // image on left of screen → text first (RTL right), image second (RTL left)
            imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
          )}
        >
          {textBlock}
          {imageBlock}
        </div>
      </div>
    </section>
  );
}
