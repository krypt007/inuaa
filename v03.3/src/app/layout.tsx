import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import './globals.css'

import { ThirdwebProvider } from "thirdweb/react";

export const metadata: Metadata = {
  title: 'Fractional Investment Marketplace',
  description: 'Enjoy swaps, conversion etc on a cheaper rate',
}

const inter = Inter({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"]})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={inter.className} ><ThirdwebProvider>{children}</ThirdwebProvider></body>
    </html>
  )
}
