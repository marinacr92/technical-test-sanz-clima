import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '¿Sumamos?',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={inter.className}
        id={'root'}
        suppressHydrationWarning={true} >
        {children}
      </body>
    </html>
  )
}
