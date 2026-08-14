import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="bg-brand-forest-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo tone="dark" />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              صيدلية الشعر السعودية. تركيبات حلال مرخّصة من SFDA، بأبحاث منشورة، وراحة العميلة السعودية.
            </p>
          </div>

          <div>
            <h3 className="font-extrabold text-white mb-4 text-sm">المنتجات</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/nur-alshayb" className="hover:text-brand-gold transition">
                  نور الشيب — بخاخ عشبي ضد الرمادي
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-white mb-4 text-sm">قانوني</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/policies/privacy" className="hover:text-brand-gold transition">سياسة الخصوصية</Link></li>
              <li><Link href="/policies/terms" className="hover:text-brand-gold transition">الشروط والأحكام</Link></li>
              <li><Link href="/policies/shipping" className="hover:text-brand-gold transition">الشحن والتوصيل</Link></li>
              <li><Link href="/policies/returns" className="hover:text-brand-gold transition">الاسترجاع والضمان</Link></li>
              <li><Link href="/policies/cod" className="hover:text-brand-gold transition">الدفع عند الاستلام</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition">عن نورالداخل</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-white mb-4 text-sm">الدعم</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="hover:text-brand-gold transition">تواصل معنا</Link></li>
              <li><a href="mailto:hello@nurdakhil.com" className="hover:text-brand-gold transition">hello@nurdakhil.com</a></li>
              <li className="text-white/45">الشحن داخل السعودية فقط</li>
              <li className="text-white/45">الدفع عند الاستلام</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-brand-gold font-medium">
          <span>✓ مسجّل SFDA</span>
          <span>✓ حلال 100%</span>
          <span>✓ دفع عند الاستلام</span>
          <span>✓ ضمان 30 يوم</span>
        </div>

        <p className="mt-6 text-xs text-white/35 text-center">
          © 2026 نورالداخل · nurdakhil.com — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
