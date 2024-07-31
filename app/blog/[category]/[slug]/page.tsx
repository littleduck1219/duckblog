import React from 'react'

import { Metadata } from 'next'

import { PostBody } from './Components/PostBody'
import PostNav from './Components/PostNav'
import PostTitle from './Components/PostTitle'
import { getPostDetail, getPostPaths, parsePostAbstract, parseToc } from '@/app/post'
import { baseDomain } from '@/meta'

type Props = {
    params: { category: string; slug: string }
}

export const dynamicParams = false

export async function generateMetadata({ params: { category, slug } }: Props): Promise<Metadata> {
    const post = await getPostDetail(category, slug)

    const title = `${post.title} | Littleduck`
    const imageURL = `${baseDomain}${post.thumbnail}`

    return {
        title,
        description: post.desc,

        openGraph: {
            title,
            description: post.desc,
            type: 'article',
            publishedTime: post.date.toISOString(),
            url: `${baseDomain}${post.url}`,
            images: [imageURL],
        },
        twitter: {
            title,
            description: post.desc,
            images: [imageURL],
        },
    }
}

export function generateStaticParams() {
    const postPaths: string[] = getPostPaths()
    const paramList = postPaths
        .map((path) => parsePostAbstract(path))
        .map((item) => ({ category: item.categoryPath, slug: item.slug }))
    return paramList
}

export default async function PostDetail({ params: { category, slug } }: Props) {
    const post = await getPostDetail(category, slug)
    const toc = parseToc(post.content)

    return (
        <div>
            <PostNav />
            <div className='mx-auto w-full max-w-[1200px]'>
                <PostTitle post={post} />
                <PostBody post={post} />
            </div>
        </div>
    )
}
