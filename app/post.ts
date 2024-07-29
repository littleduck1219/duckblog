import { PostMatter, PostType } from '@/model/type'
import dayjs from 'dayjs'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'

const BASE_PATH = '/posts'
const POSTS_PATH = path.join(process.cwd(), BASE_PATH)

// 카테고리 경로 가져오기
export const getPostPaths = (category?: string) => {
    const folder = category || '**'
    const postPath = sync(`${POSTS_PATH}/${folder}/**/*.mdx`)
    return postPath
}

// 포스트 가져오기
export const parsePost = async (postPath: string) => {
    const postAbstract = parsePostAbstract(postPath)
    const postDetail = await parsePostDetail(postPath)
    return {
        ...postAbstract,
        ...postDetail,
    }
}

// 포스트 정보 가져오기
export const parsePostAbstract = (postPath: string) => {
    const filePath = postPath
        .slice(postPath.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, '')
        .replace('.mdx', '')
    const [categoryPath, slug] = filePath.split('/')
    const url = `/blog/${categoryPath}/${slug}`
    const categoryPublicName = getCategoryPublicName(categoryPath)
    return { url, categoryPath, categoryPublicName, slug }
}

// MDX detail
const parsePostDetail = async (postPath: string) => {
    const file = fs.readFileSync(postPath, 'utf8')
    const { data, content } = matter(file)
    const grayMatter = data as PostMatter
    const readingMinutes = Math.ceil(readingTime(content).minutes)
    const dateString = dayjs(grayMatter.date)
        .locale('ko')
        .format('YYYY년 MM월 DD일')
    return { ...grayMatter, dateString, content, readingMinutes }
}

// category folder name을 public name으로 변경 : dir_name -> Dir Name
export const getCategoryPublicName = (dirPath: string) => {
    dirPath
        .split('_')
        .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
        .join(' ')
}

// 카테고리 리스트 가져오기
export const getPostList = async (category?: string) => {
    const postPaths = getPostPaths(category)
    const postList = await Promise.all(
        postPaths.map((postPath) => parsePost(postPath))
    )
    return postList
}

// 포스트 날짜 정렬
const sortPostList = (PostList: PostType[]) => {
    return PostList.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export const getSortedPostList = async (category?: string) => {
    const postList = await getPostList(category)
    return sortPostList(postList)
}

// 카테고리 경로 생성
export const getCategoryList = () => {
    const categoryPaths = sync(`${POSTS_PATH}/*`)
    const categoryList = categoryPaths.map(
        (path) => path.split('/').slice(-1)?.[0]
    )
    return categoryList
}
