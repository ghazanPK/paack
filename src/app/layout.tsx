import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PAACK | Pakistani Academic Community Korea",
  description: "The premier organization for the Pakistani academic and professional community in South Korea. Connecting minds, empowering futures.",
  keywords: "PAACK, Pakistani, Korea, academic, community, professionals, doctors, researchers",
  authors: [{ name: "PAACK Organization" }],
  openGraph: {
    title: "PAACK | Pakistani Academic Community Korea",
    description: "The premier organization for the Pakistani academic and professional community in South Korea.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
