import React from 'react';

import PostCard from './PostCard';
import { getSortedPostList } from '@/app/post';

type PostListProps = {
    category?: string;
};

export default async function PostList({ category }: PostListProps) {
    const postList = await getSortedPostList(category);

    return (
        <section className='pr-[calc((100vw - var(layout-max-width)) / 2)] pl-[calc((100vw - var(layout-max-width)) / 2 + var(sidebar-width))] mt-12 h-full w-full grow px-4'>
            <div className='flex flex-col gap-3'>
                {postList.map((post) => (
                    <PostCard key={post.url} post={post} />
                ))}
            </div>
        </section>
    );
}
