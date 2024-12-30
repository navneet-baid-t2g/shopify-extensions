import { Nunito_Sans } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"]
});

export const metadata = {
  title: "Shopify Extensions - Enhance Your Store",
  description: "Discover Shopify Extensions to boost your store's performance, streamline operations, and improve customer experience.",
  keywords: "Shopify Extensions, Shopify Apps, eCommerce tools, Shopify store optimization, Shopify plugins",
  robots: "index, follow",
  openGraph: {
    title: "Shopify Extensions - Enhance Your Store",
    description: "Boost your Shopify store with our top-notch extensions and plugins. Unlock new possibilities for growth.",
    url: "/",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Extensions - Enhance Your Store",
    description: "Discover Shopify Extensions to boost your store's performance and customer experience.",
    site: "@ShopifyExtensions",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
