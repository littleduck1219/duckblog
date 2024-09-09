import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { PostType } from '@/model/type';

type PostCardProps = { post: PostType };

export default function PostCard({ post }: PostCardProps) {
    return (
        <Link href={post.url}>
            <div className='flex w-full items-center gap-4 rounded-md border p-4'>
                <div className='relative h-32 w-1/4'>
                    <Image src={post.thumbnail} alt={post.title} fill objectFit='cover' priority />
                </div>
                <div className='flex w-3/4 flex-col justify-between'>
                    <h2 className='text-xl font-bold'>{post.title}</h2>
                    <p className='text-sm text-gray-600'>{post.dateString}</p>
                    <p>{post.desc}</p>
                </div>
            </div>
        </Link>
    );
}
