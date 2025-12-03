import "../styles/globals.css";
import Navbar from "../components/Navbar.jsx";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { StateContext } from "../context/StateContext.js";
import Footer from "@/components/Footer";

const poppins_font = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Distinct Patterns PWA",
  description: "E-commerce Progressive Web App",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Distinct Patterns PWA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Distinct Patterns PWA" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <StateContext>
        <body className={poppins_font.className}>
          <Navbar />
          <NuqsAdapter>
            <div className="mt-[2rem]">{children}</div>
          </NuqsAdapter>
          <Toaster />
          <Footer />
        </body>
      </StateContext>
    </html>
  );
}