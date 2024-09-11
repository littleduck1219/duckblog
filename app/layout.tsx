import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Header from '@/app/_components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "littleduck's dev blog",
    description: 'littleduck의 개발 블로그입니다.',
    metadataBase: new URL('https://duckblog-d51wyx48f-littleduck1219s-projects.vercel.app/blog'),
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        // startUpImage: [],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <link rel='manifest' href='/manifest.webmanifest' />

                {/* iOS 스플래시 스크린 설정 */}
                <link rel='apple-touch-icon' href='/icons/logo512.png' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
                <meta name='mobile-web-app-capable' content='yes'></meta>

                {/* 애플 스플래시 스크린 */}
                <link
                    rel='apple-touch-startup-image'
                    href='/icons/logo512.png'
                    media='(device-width: 375px)'
                />
                <link
                    rel='apple-touch-startup-image'
                    href='/icons/logo512.png'
                    media='(device-width: 768px)'
                />
            </head>
            <body className={inter.className}>
                <Header />
                <main className=''>{children}</main>
            </body>
        </html>
    );
}
