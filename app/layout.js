import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmsans =  DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Donation',
  description: 'Donation Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!bg-[#EFF2F2]'>
      <body className={dmsans.className}>{children}</body>
    </html>
  )
}
