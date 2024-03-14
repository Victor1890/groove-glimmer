import { fontSans } from '@/config/fonts';
import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={clsx("font-sans antialiased", fontSans.className)}>
        <main className="flex">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
