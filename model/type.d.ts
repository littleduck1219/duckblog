export type PostMatter = {
    title: string
    date: Date
    dateString: string
    thumbnail: string
    desc: string
}

type PostType = PostMatterType & {
    url: string
    slug: string
    categoryPath: string
    content: string
    readingMinutes: number
    categoryPublicName: string
}
