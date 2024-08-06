import React from 'react'

import Link from 'next/link'

import { PostType } from '@/model/type'
import { CalendarDays, Clock3 } from 'lucide-react'

type Props = {
    post: PostType
}

export default function PostTitle({ post }: Props) {
    return (
        <header className='mt-14 text-center'>
            <h1 className='mb-5 text-3xl'>{post.title}</h1>
            <div className='mb-3 text-base'>
                <Link
                    href={`/blog/${post.categoryPath}`}
                    className='font-semibold text-pink-600 no-underline underline-offset-4 hover:underline'
                >
                    {post.categoryPublicName}
                </Link>
            </div>
            <div className='flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
                <div className='flex items-center gap-1'>
                    <CalendarDays className='w-3.5' />
                    <span>{post.dateString}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <Clock3 className='w-3.5' />
                    <span>{post.readingMinutes}분</span>
                </div>
            </div>
            <hr className='mt-5' />
        </header>
    )
}
