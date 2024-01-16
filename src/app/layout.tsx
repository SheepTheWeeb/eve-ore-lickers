import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Provider } from "@/utils/providers";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ore Lickers",
  description: "EvE Online - Ore Lickers Corporation",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Provider>
        <body className={inter.className}>
          <Header />
          <div className="p-16 sm:ml-64">{children}</div>
        </body>
      </Provider>
    </html>
  );
}
