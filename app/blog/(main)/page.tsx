import React from 'react';

import Header from '../../components/Header';
import Category from '../components/Category';
import PostList from '../components/PostList';
import { getCategoryDetailList } from '@/app/post';

export default async function Home() {
    const categoryList = await getCategoryDetailList();

    return (
        <>
            <Header />
            <div className='flex w-full flex-row'>
                <Category categoryList={categoryList} />
                <PostList />
            </div>
        </>
    );
}
