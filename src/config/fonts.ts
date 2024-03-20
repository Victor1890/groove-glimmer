import { Inter as FontSans } from "next/font/google"
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const tuskerGrotesk = localFont({
  src: [
    {
      path: '../assets/fonts/tusker-grotesk-2800-super.ttf',
      style: 'normal',
    }
  ]
})