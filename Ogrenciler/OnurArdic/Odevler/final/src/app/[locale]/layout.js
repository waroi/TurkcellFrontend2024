import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Header from '@/Components/Home/Navbar/Header'
import StoreProvider from '../storeprovider'
import ClientWrapper from './ClientWrapper'
import './globals.scss'
import Footer from '@/Components/Home/Footer/Footer'

export const metadata = {
  title: 'SHOP.CO',
  description: 'The best clothes',
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <ClientWrapper>
              <Header />
              {children}
              <Footer />
            </ClientWrapper>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
