import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' article pipeline - конвейер статей ',
  description: ' быстрая и лёгкая генерация статей ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <header>
          <nav className="flex justify-between items-center px-5 h-[70px] shadow-md bg-gray-50">
            <div>Только свежие новости!</div>
            <div>Войти</div>
          </nav>
        </header>
        <main className='px-5 my-5'>
          {children}
        </main>
        {/* <footer className="pt-5 my-5 text-body-secondary border-top">
          Created by the Ustinnov Corporation · © 2023
        </footer> */}
      </body>
    </html>
  )
}
