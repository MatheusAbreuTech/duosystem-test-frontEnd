import { Inter } from 'next/font/google'
import GlobalStyles from '@/styles/global'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
      </body>
    </html>
  )
}
