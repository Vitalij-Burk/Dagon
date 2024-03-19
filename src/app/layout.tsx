import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Bottombar from "./components/shared/Bottombar";
import BottomHappy from "./components/shared/BottomHappy";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: {
    absolute: "Дагон",
    default: "Дагон. Пиломатериалы, дрова, бани, беседки, качели в наличии и под заказ в Беларуси",
    template: "%s | Дагон",
  },
  description: "Фермерское хозяйство 'Дагон'",
  keywords: "Дагон, Беларусь, Пиломатериалы, Доставка, Дрова, Бани, Беседки, Качели"
};

export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        
        <Footer />
        <Bottombar />
      </body>
    </html>
  );
}
