import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/base/Header'
import Footer from '@/components/base/Footer'
import Container from '@/components/base/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen`}
      >
        <Header></Header>

        <Container>
          {children}
        </Container>

        <Footer />
      </body>
    </html>
  )
}
