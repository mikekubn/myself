import clsx from "clsx";

import "./globals.css";

import { Breadcrumbs } from "../components/breadcrumbs";
import { Footer } from "../components/footer";
import { BASE_METADATA } from "../utils/metadata";

import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"]
});

export const metadata = BASE_METADATA;

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={clsx(inter.variable, jetbrainsMono.variable, "bg-secondary")}>
    <body className="size-full">
      <Breadcrumbs />
      <main className="min-h-screen flex flex-col overflow-x-hidden bg-secondary">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
