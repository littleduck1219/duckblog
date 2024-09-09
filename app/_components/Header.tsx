'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Github, Linkedin } from 'lucide-react';

export default function Header() {
    return (
        <nav className='sticky flex h-16 w-full items-center justify-center border-b border-black text-center'>
            <div className='flex w-full max-w-[1200px] justify-between px-4'>
                <Link href='/' className='flex cursor-pointer flex-row items-center gap-4'>
                    <Image src='/icons/duck-black.png' alt='icon' width={32} height={32} />
                    <h1 className='text-2xl font-bold text-gray-800'>{"Littleduck's Blog"}</h1>
                </Link>
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
    );
}
