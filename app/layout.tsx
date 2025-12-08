import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://capabilitybench.com'),
  title: {
    default: 'CapabilityBench',
    template: '%s | CapabilityBench',
  },
  description: 'A public registry that replaces opaque intelligence scores with traceable capability verdicts.',
  icons: {
    icon: [
      { url: '/Favicon2.png' },
      { url: '/Favicon2.png', type: 'image/png' },
    ],
    shortcut: '/Favicon2.png',
    apple: '/Favicon2.png',
  },
  openGraph: {
    title: 'CapabilityBench',
    description: 'A public registry that replaces opaque intelligence scores with traceable capability verdicts.',
    url: 'https://capabilitybench.com',
    siteName: 'CapabilityBench',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | undefined | false)[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        inter.className
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto text-black">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
