"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { useCartStore } from "@/lib/cart-store";
import { HERO_SLUG } from "@/lib/products";
import { cn } from "@/lib/utils";

const PRODUCT_HREF = `/products/${HERO_SLUG}`;

const NAV = [
  { href: "/", label: "الرئيسية" },
  { href: PRODUCT_HREF, label: "نور الشيب" },
  { href: "/about", label: "عنّا" },
  { href: "/contact", label: "تواصل" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const pathname = usePathname();
  const itemCount = useCartStore((s) => s.getItemCount());
  const openDrawer = useCartStore((s) => s.openDrawer);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-brand-forest-dark/95 backdrop-blur-xl transition-shadow duration-300",
        elevated && "shadow-[0_14px_34px_-18px_rgba(0,0,0,0.75)]"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="h-14 md:h-20 flex items-center">
          <button
            className="md:hidden w-10 h-10 -ms-1 flex items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold transition"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "إغلاق القائمة" : "القائمة"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo centres itself on mobile between two equal 40px icon zones */}
          <div className="flex-1 flex justify-center md:flex-none md:justify-start">
            <Logo tone="dark" />
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            {NAV.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-1.5 text-[13px] font-medium tracking-wide transition-colors",
                    "after:content-[''] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[1.5px] after:rounded-full after:bg-brand-gold after:transition-transform after:duration-300 hover:after:scale-x-100",
                    active
                      ? "text-white after:scale-x-100"
                      : "text-white/65 hover:text-white after:scale-x-0"
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 md:gap-3">
            <button
              onClick={openDrawer}
              className="relative w-10 h-10 -me-1 md:me-0 flex items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold transition"
              aria-label={`السلة — ${itemCount} منتج`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute top-0 left-0 bg-brand-gold text-brand-forest-dark text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <Link
              href={PRODUCT_HREF}
              className="hidden md:inline-flex items-center gap-2 bg-brand-gold text-brand-forest-dark text-[13px] font-bold px-5 py-2.5 rounded-full hover:bg-brand-gold-soft transition-colors shadow-[0_10px_24px_-12px_rgba(201,165,107,0.9)]"
            >
              اطلبي الآن
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="h-px bg-gradient-to-l from-transparent via-brand-gold/45 to-transparent"
      />

      {mobileOpen && (
        <>
          <nav
            id="mobile-nav"
            className="md:hidden bg-brand-forest-dark border-b border-brand-gold/20 px-4 pt-2 pb-5 animate-fade-in"
          >
            {NAV.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3.5 border-b border-white/10 last:border-0 text-[15px]",
                    active ? "text-brand-gold font-bold" : "text-white/85 font-medium"
                  )}
                >
                  {n.label}
                  <ChevronLeft className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}
            <Link
              href={PRODUCT_HREF}
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center bg-brand-gold text-brand-forest-dark font-bold text-[15px] py-3.5 rounded-2xl"
            >
              اطلبي الآن · دفع عند الاستلام
            </Link>
          </nav>
          {/* Sits below the whole header, so the panel and bar stay fully interactive */}
          <button
            aria-hidden
            tabIndex={-1}
            onClick={() => setMobileOpen(false)}
            className="md:hidden absolute inset-x-0 top-full h-screen bg-brand-forest-dark/55 backdrop-blur-sm cursor-default"
          />
        </>
      )}
    </header>
  );
}
