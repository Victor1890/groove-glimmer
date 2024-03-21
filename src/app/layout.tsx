import { fontSans } from '@/config/fonts';
import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Groove Glimmer"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "font-sans antialiased overflow-auto lg:overflow-hidden",
          fontSans.className
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
