export type PostMatter = {
    title: string
    date: Date
    dateString: string
    thumbnail: string
    desc: string
}

export type PostType = PostMatterType & {
    url: string
    slug: string
    categoryPath: string
    content: string
    readingMinutes: number
    categoryPublicName: string
}

export type CategoryDetail = {
    dirName: string
    publicName: string
    count: number
}
