import React from 'react'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { HeadingItem } from '@/model/type'

type Props = {
    toc: HeadingItem[]
}

export default function PostTable({ toc }: Props) {
    if (toc.length === 0) return null

    return (
        <nav className='xl:hidden'>
            {toc.map((item) => (
                <li key={item.link} className={cn(item.indent === 1 && 'ml-4', 'my-0 py-1')}>
                    <Link href={item.link} className='underline-offset-4 hover:text-pink-600'>
                        {item.text}
                    </Link>
                </li>
            ))}
        </nav>
    )
}
