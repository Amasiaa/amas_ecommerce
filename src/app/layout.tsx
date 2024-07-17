import type { Metadata } from 'next'
import { Poppins } from "next/font/google"
import './globals.css'

export const metadata: Metadata = {
  title: 'Amas Ecommerce',
  description: 'Get any furniture items on the fly',
}

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className} >{children}</body>
    </html>
  )
}
