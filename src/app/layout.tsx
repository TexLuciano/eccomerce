import { Header } from './components/header/header'
import './globals.scss'
import { Roboto } from '@next/font/google';
import { Newsletter } from './components/footer/newsletter/newsletter';
import { Footer } from './components/footer/footer';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={roboto.className}>

        <Header/>

        {children}
        <Newsletter/>
        <Footer/>
        </body>
    </html>
  )
}
