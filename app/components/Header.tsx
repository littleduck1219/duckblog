'use client'

import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <nav className='fixed flex h-16 w-full items-center justify-center border-b border-black text-center'>
            <div className='flex w-full max-w-[1600px] justify-between px-4'>
                <h1 className='text-2xl font-bold text-gray-800'>
                    <Link href='/'>{"Littleduck's Blog"}</Link>
                </h1>
                <div className='flex gap-3'>
                    <Link href='https://github.com/littleduck1219'>
                        <Github />
                    </Link>
                    <Link href='https://www.linkedin.com/in/dev-duck'>
                        <Linkedin />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
