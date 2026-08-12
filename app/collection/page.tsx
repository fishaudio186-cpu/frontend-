import { redirect } from "next/navigation";
import { HERO_SLUG } from "@/lib/products";

export default function CollectionPage() {
  redirect(`/products/${HERO_SLUG}`);
}
