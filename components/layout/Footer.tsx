import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-[#6B6B6B] leading-relaxed">
              صيدلية الشعر السعودية. تركيبات حلال مرخّصة من SFDA، بأبحاث منشورة، وراحة العميلة السعودية.
            </p>
          </div>

          <div>
            <h3 className="font-extrabold text-brand-plum mb-4 text-sm">المنتجات</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/nur-alshayb" className="text-[#6B6B6B] hover:text-brand-plum transition">
                  نور الشيب — بخاخ عشبي ضد الرمادي
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-brand-plum mb-4 text-sm">قانوني</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/policies/privacy" className="text-[#6B6B6B] hover:text-brand-plum">سياسة الخصوصية</Link></li>
              <li><Link href="/policies/terms" className="text-[#6B6B6B] hover:text-brand-plum">الشروط والأحكام</Link></li>
              <li><Link href="/policies/shipping" className="text-[#6B6B6B] hover:text-brand-plum">الشحن والتوصيل</Link></li>
              <li><Link href="/policies/returns" className="text-[#6B6B6B] hover:text-brand-plum">الاسترجاع والضمان</Link></li>
              <li><Link href="/policies/cod" className="text-[#6B6B6B] hover:text-brand-plum">الدفع عند الاستلام</Link></li>
              <li><Link href="/about" className="text-[#6B6B6B] hover:text-brand-plum">عن نورالداخل</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-brand-plum mb-4 text-sm">الدعم</h3>
            <ul className="space-y-2.5 text-sm text-[#6B6B6B]">
              <li><Link href="/contact" className="hover:text-brand-plum">تواصل معنا</Link></li>
              <li><a href="mailto:hello@nurdakhil.com" className="hover:text-brand-plum">hello@nurdakhil.com</a></li>
              <li>الشحن داخل السعودية فقط</li>
              <li>الدفع عند الاستلام</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-brand-cream-dark flex flex-wrap justify-center gap-6 text-xs text-brand-trust font-medium">
          <span>✓ مسجّل SFDA</span>
          <span>✓ حلال 100%</span>
          <span>✓ دفع عند الاستلام</span>
          <span>✓ ضمان 30 يوم</span>
        </div>

        <p className="mt-6 text-xs text-[#9A9A9A] text-center">
          © 2026 نورالداخل · nurdakhil.com — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
