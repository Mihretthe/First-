import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mihret Tekalgn | Software Engineer",
  description:
    "Full-stack software engineer focused on building real-world, scalable products with strong foundations in data structures, clean architecture, and system design.",

  icons: {
    icon: [
      {
        url: "/image_1.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/image_1.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/image_1.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/image_1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || 
                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
