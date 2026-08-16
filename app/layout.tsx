import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CheckoutFlow } from "@/components/checkout/CheckoutFlow";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { Cairo, Outfit } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nurdakhil.com"),
  title: "نورالداخل | nurdakhil — صيدلية الشعر السعودية",
  description:
    "نور الشيب — بخاخ عشبي مرخّص SFDA ضد الرمادي. هوشو و، جينسنغ، زنجبيل، وريشي. حلال 100% · دفع عند الاستلام · شحن مجاني",
  openGraph: {
    title: "نورالداخل | nurdakhil",
    description: "نور الشيب — بخاخ عشبي مرخّص SFDA ضد الرمادي",
    images: [{ url: "/product/pack-shot.jpg", width: 1200, height: 630, alt: "نور الشيب — العلبة والبخاخ" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#350A19",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${outfit.variable}`} style={{ colorScheme: "only light" }}>
      <head>
        <meta name="color-scheme" content="only light" />
      </head>
      <body className="font-arabic min-h-screen flex flex-col bg-brand-cream text-brand-ink">
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
