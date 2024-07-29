import PostList from '../components/postList'
import { getCategoryList, getCategoryPublicName } from '@/app/post'
import { baseDomain, blogName, blogThumbnailURL } from '@/meta'
import { Metadata } from 'next'
import React from 'react'

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

export default function CategoryPage({ params }: Props) {
    return <PostList category={params.category} />
}
