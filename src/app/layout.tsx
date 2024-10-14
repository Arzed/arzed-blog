import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'
import Image from 'next/image'

const meta = {
  title: 'Arzed Blog',
  description:
    'Student from Indonesia University. Frontend Developer. Cat Lover',
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Arzed Blog',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'id-ID',
    type: 'website',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="py-4">
            <div className="container flex items-center justify-between py-6">
              <div className="flex items-center justify-center">
                <Image
                  src={'/images/unnamed.webp'}
                  alt="logo"
                  width={50}
                  height={50}
                  className="mr-2 rounded-full"
                />
                <h4>Arzed</h4>
              </div>
              <Navigation />
              <ThemeSwitch />
            </div>
          </header>
          <main>
            <Container>{children}</Container>
          </main>
          <footer className="py-16">
            <Container>
              <p>&copy; Arzed Blog 2024</p>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
