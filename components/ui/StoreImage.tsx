import Image from "next/image";
import { cn } from "@/lib/utils";

const aspectClass = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
} as const;

export function StoreImage({
  src,
  alt,
  aspect = "video",
  className,
  priority,
  objectFit = "cover",
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  aspect?: keyof typeof aspectClass;
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-brand-cream shadow-card",
        aspectClass[aspect],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        sizes="(max-width: 768px) 100vw, 50vw"
        className={objectFit === "contain" ? "object-contain" : "object-cover"}
        style={{ objectPosition }}
      />
    </div>
  );
}
