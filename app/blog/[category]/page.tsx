import React from 'react'

import { Metadata } from 'next'

import Category from '../components/Category'
import PostList from '../components/PostList'
import {
    getCategoryDetailList,
    getCategoryList,
    getCategoryPublicName,
} from '@/app/post'
import { baseDomain, blogName, blogThumbnailURL } from '@/meta'

type Props = {
    params: { category: string }
}

export const dynamicParams = false

export function generateStaticParams() {
    const categoryList = getCategoryList()
    const paramList = categoryList.map((category) => ({ category }))
    return paramList
}

export async function generateMetadata({
    params: { category },
}: Props): Promise<Metadata> {
    const cg = getCategoryPublicName(category)
    const title = `${cg} | ${blogName}`
    const url = `${baseDomain}/${category}`

    return {
        title,
        openGraph: {
            title,
            url,
            images: [blogThumbnailURL],
        },
        twitter: {
            title,
            images: [blogThumbnailURL],
        },
    }
}

export default async function CategoryPage({ params }: Props) {
    const categoryList = await getCategoryDetailList()

    return (
        <>
            <Category categoryList={categoryList} />
            <PostList category={params.category} />
        </>
    )
}
