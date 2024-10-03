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

    const paddingStyle = {
        paddingRight: `calc(100vw - var(--layout-max-width) / 2)`,
        paddingLeft: `calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width))`,
    };

    const onCategoryChange = (value: string) => {
        if (value === 'all') {
            router.push('/blog');
        } else {
            router.push(`/blog/${value}`);
        }
    };

    return (
        <aside
            className={cn('left-10 mt-6 flex w-full flex-col items-center justify-center ', {
                paddingStyle,
            })}
            style={paddingStyle}
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
