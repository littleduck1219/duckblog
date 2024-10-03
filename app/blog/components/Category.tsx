'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import CategoryButton from './CategoryButton';
import { getCategoryDetailList } from '@/app/post';
import { cn } from '@/lib/utils';
import { CategoryDetail } from '@/model/type';

type Props = {
    categoryList: CategoryDetail[];
};

export default function Category({ categoryList }: Props) {
    const router = useRouter();

    const onCategoryChange = (value: string) => {
        if (value === 'all') {
            router.push('/blog');
        } else {
            router.push(`/blog/${value}`);
        }
    };

    return (
        <aside
            className={
                'pl-[calc((100vw - var(layout-max-width)) / 2 + var(sidebar-width))] w-[calc((100% - (var(layout-max-width) - 64px)) / 2 + var(sidebar-width) - 32px)] sticky left-0 mt-6 flex flex-col items-center justify-center'
            }
        >
            <div className='flex flex-row gap-3 xl:flex-col'>
                <CategoryButton
                    key='all'
                    category='all'
                    onCategoryChange={() => onCategoryChange('all')}
                />
                {categoryList.map((category) => (
                    <CategoryButton
                        key={category.dirName}
                        category={category.publicName}
                        onCategoryChange={() => onCategoryChange(category.dirName)}
                    />
                ))}
            </div>
        </aside>
    );
}
