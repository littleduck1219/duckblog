
import React from 'react'

import PostCard from './PostCard'
import { getSortedPostList } from '@/app/post'

type PostListProps = {
    category?: string
}

export default async function PostList({ category }: PostListProps) {
    const postList = await getSortedPostList(category)

    return (
        <section className='mx-auto mt-12 h-full w-full max-w-[950px] px-4'>
            <div className='flex flex-col gap-3'>
                {postList.map((post) => (
                    <PostCard key={post.url} post={post} />
                ))}
            </div>
        </section>
    )
}
