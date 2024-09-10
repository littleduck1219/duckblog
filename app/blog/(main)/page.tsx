import Category from '../components/Category';
import Push from '../components/Push';
import PostList from '../components/PostList';
import { getCategoryDetailList } from '@/app/post';
import { app } from '@/firebaseAp';

export default async function Home() {
    const categoryList = await getCategoryDetailList();



    return (
        <div className='mx-auto w-full max-w-[1200px]'>
            <Category categoryList={categoryList} />
            <PostList />
            <Push />
        </div>
    );
}
