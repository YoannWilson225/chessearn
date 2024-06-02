'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import { NextAuthProvider } from "./components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <body>
        <NextAuthProvider>
          {loading ? (<PreLoader />) : (
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <ScrollToTop />
            </ThemeProvider>
          )}
        </NextAuthProvider>
      </body>
    </html>
  );
}
