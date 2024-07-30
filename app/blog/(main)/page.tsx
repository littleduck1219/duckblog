import Category from '../components/Category'
import PostList from '../components/PostList'
import { getCategoryDetailList } from '@/app/post'

export default async function Home() {
    const categoryList = await getCategoryDetailList()

    return (
        <div>
            <Category categoryList={categoryList} />
            <PostList />
        </div>
    )
}
