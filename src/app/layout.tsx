import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CharList } from "@/app/ui/CharList"
import { chars } from "../app/utils/chars"
import { Header } from './ui/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Site De Animes',
    template: '%s | Site de Animes'
  },
  description: 'site de animes',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Header />
      <CharList chars={chars}/>
        {children}
        <footer>
        Animes Online. A melhor maneira de assistir animes online grátis, basta dar play e ver seus animes favoritos em hd, atualizados diariamente.
        </footer>
      </body>
    </html>
  )
}
