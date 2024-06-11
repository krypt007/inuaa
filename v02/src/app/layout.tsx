"use client"
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/_components/ModeToggle";

import { ThirdwebProvider } from "thirdweb/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
          <ThirdwebProvider>
            <div className="flex w-full justify-end"><ModeToggle /></div>
            <div style={{minHeight: "100vh", display: "grid", placeContent: "center"}}>              
              {children}
            </div>
          </ThirdwebProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
