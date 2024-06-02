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
import NextTopLoader from 'nextjs-toploader';
import { NextUIProvider } from "@nextui-org/react";

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
              <NextUIProvider>
                <NextTopLoader
                  color="#F9CE00"
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  crawl={true}
                  showSpinner={true}
                  easing="ease"
                  speed={200}
                  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                />
                <Header />
                {children}
                <ScrollToTop />
              </NextUIProvider>

            </ThemeProvider>
          )}
        </NextAuthProvider>
      </body>
    </html>
  );
}
