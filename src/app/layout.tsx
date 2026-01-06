import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import usePreferencesState from "@/state/preferences";

export const metadata: Metadata = {
  title: "دليل المساجد",
  description: "دليل مساجد الجمعية الشرعية - فرع مسطرد",
  icons: "/imgs/logo.png",
};

const cairo = Cairo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo-play",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  if (typeof window === "undefined") {
    usePreferencesState.persist?.rehydrate();
  };

  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>
        <main className="flex flex-col min-h-screen w-full">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};
