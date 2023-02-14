import { Karla, Inconsolata } from '@next/font/google'

import './globals.css'

const karla = Karla({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-karla',
})

const inconsolata = Inconsolata({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inconsolata',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${karla.variable} ${inconsolata.variable}`}>
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>{children}</body>
        </html>
    )
}
