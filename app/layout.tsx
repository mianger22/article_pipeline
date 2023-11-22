import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from "react"
import Container from '@/pages/common/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' article pipeline - конвейер статей ',
  description: ' быстрая и лёгкая генерация статей ',
}

export default function RootLayout({children}: {children: ReactNode}) {  
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
