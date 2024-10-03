import React from 'react';

import PostCard from './PostCard';
import { getSortedPostList } from '@/app/post';

type PostListProps = {
    category?: string;
};

export default async function PostList({ category }: PostListProps) {
    const postList = await getSortedPostList(category);

    const paddingStyle = {
        paddingRight: `calc((100vw - var(--vp-layout-max-width)) / 2)`,
        paddingLeft: `calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width))`,
    };

    return (
        <section className='mt-12 h-full w-full px-4' style={paddingStyle}>
            <div className='flex flex-col gap-3'>
                {postList.map((post) => (
                    <PostCard key={post.url} post={post} />
                ))}
            </div>
        </section>
    );
}
