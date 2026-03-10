import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'A Flâneur , Qi HENG',
  description: '個人作品集網站',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
