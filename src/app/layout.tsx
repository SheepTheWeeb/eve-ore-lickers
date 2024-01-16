import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Provider } from "@/utils/providers";

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
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
