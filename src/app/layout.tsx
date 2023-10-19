import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Leftsidebar, Rightsidebar} from "~/components";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`bg-black w-full h-full flex justify-center items-center ${inter.className}`} suppressHydrationWarning>
            <div className='max-w-screen-xl w-full h-full flex md:grid grid-cols-12 relative'>
                {/*Left side bar*/}
                <section className='hidden md:block md:col-span-4 lg:col-span-3'>
                    <Leftsidebar/>
                </section>
                {/*New feed*/}
                <section className="flex-1 md:col-span-8 lg:col-span-6">
                    {children}
                </section>
                {/*Right side bar*/}
                <section className='col-span-3 hidden lg:block'>
                    <Rightsidebar/>
                </section>
            </div>
        </body>
        </html>
    )
}