import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Tohid Shaikh — Backend & ML Engineer',
  description: 'Backend and ML Engineer building distributed systems, LLM-integrated pipelines, and data-intensive applications.',
  keywords: ['Tohid Shaikh', 'Backend Engineer', 'ML Engineer', 'Python', 'Portfolio'],
  authors: [{ name: 'Tohid Shaikh' }],
  openGraph: {
    title: 'Tohid Shaikh — Backend & ML Engineer',
    description: 'Building distributed systems, LLM pipelines, and data-intensive apps.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-[#0c0c0e] text-zinc-100 antialiased`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
