"use client";
import { Lora as FontSans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/TailwindIndicator";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TailwindIndicator />
          <Navigation>{children}</Navigation>
        </ThemeProvider>
      </body>
    </html>
  );
}
