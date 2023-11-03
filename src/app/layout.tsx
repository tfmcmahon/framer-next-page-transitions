"use client";
import type { Metadata } from "next";
import { Lora as FontSans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import MountContext from "@/components/Context";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <Navigation>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </Navigation>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
