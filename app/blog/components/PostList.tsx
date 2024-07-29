import PostCard from './PostCard'
import { getSortedPostList } from '@/app/post'
import React from 'react'

type PostListProps = {
    category?: string
}

export default async function PostList({ category }: PostListProps) {
    const postList = await getSortedPostList(category)

    return (
        <section className='mx-auto mt-12 h-full w-full max-w-[950px] px-4'>
            <div>
                {postList.map((post) => (
                    <PostCard key={post.url} post={post} />
                ))}
            </div>
        </section>
    )
}
