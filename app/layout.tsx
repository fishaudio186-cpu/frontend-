import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CheckoutFlow } from "@/components/checkout/CheckoutFlow";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { Tajawal, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nurdakhil.com"),
  title: "نورالداخل | nurdakhil — صيدلية الشعر السعودية",
  description:
    "نور الشيب — بخاخ عشبي مرخّص SFDA ضد الرمادي. هوشو و، جينسنغ، زنجبيل، وريشي. حلال 100% · دفع عند الاستلام · شحن مجاني",
  openGraph: {
    title: "نورالداخل | nurdakhil",
    description: "نور الشيب — بخاخ عشبي مرخّص SFDA ضد الرمادي",
    images: [{ url: "/product/pack-shot.png", width: 1200, height: 630, alt: "نور الشيب — العلبة والبخاخ" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="font-arabic min-h-screen flex flex-col">
        <AnalyticsProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <CheckoutFlow />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
