"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { useCartStore } from "@/lib/cart-store";

const NAV = [
  { href: "/", label: "الرئيسية" },
  { href: "/products/nur-alshayb", label: "نور الشيب" },
  { href: "/about", label: "عنّا" },
  { href: "/contact", label: "تواصل" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());
  const openDrawer = useCartStore((s) => s.openDrawer);

  return (
    <header className="sticky top-0 z-40 bg-brand-forest-dark/95 backdrop-blur-xl border-b border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-[76px] flex items-center justify-between gap-4">
        <Logo tone="dark" />

        <nav className="hidden md:flex items-center gap-9 flex-1 justify-center">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/70 hover:text-brand-gold transition-colors tracking-wide"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openDrawer}
            className="relative p-2.5 hover:bg-white/10 rounded-full transition"
            aria-label={`السلة ${itemCount}`}
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -left-0.5 bg-brand-gold text-brand-forest text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2.5 hover:bg-white/10 rounded-full text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 bg-brand-forest-dark px-4 py-4 flex flex-col gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-medium py-3 border-b border-white/8 last:border-0 text-white/85"
              onClick={() => setMobileOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
