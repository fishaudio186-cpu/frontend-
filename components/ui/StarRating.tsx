import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  count,
  className,
}: {
  rating: number;
  count?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1 text-sm", className)}>
      <div className="flex text-brand-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn("w-4 h-4", i < Math.floor(rating) ? "fill-current" : "opacity-30")}
          />
        ))}
      </div>
      <span className="font-bold">{rating}</span>
      {count !== undefined && (
        <span className="text-brand-ink/60">({count})</span>
      )}
    </div>
  );
}
