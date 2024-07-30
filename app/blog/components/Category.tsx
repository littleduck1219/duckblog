'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import CategoryButton from './CategoryButton'
import { getCategoryDetailList } from '@/app/post'
import { CategoryDetail } from '@/model/type'

type Props = {
    categoryList: CategoryDetail[]
}

export default function Category({ categoryList }: Props) {
    const router = useRouter()

    const onCategoryChange = (value: string) => {
        if (value === 'all') {
            router.push('/blog')
        } else {
            router.push(`/blog/${value}`)
        }
    }

    return (
        <section className='absolute left-10 flex w-32 flex-col items-center justify-center p-2'>
            <div className='flex flex-col gap-3'>
                <CategoryButton
                    key='all'
                    category='all'
                    onCategoryChange={() => onCategoryChange('all')}
                />
                {categoryList.map((category) => (
                    <CategoryButton
                        key={category.dirName}
                        category={category.publicName}
                        onCategoryChange={() =>
                            onCategoryChange(category.dirName)
                        }
                    />
                ))}
            </div>
        </section>
    )
}
