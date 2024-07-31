import { MdxComponents } from '@/app/mdx'
import { PostType } from '@/model/type'
// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

interface Props {
    post: PostType
}

export const PostBody = ({ post }: Props) => {
    return (
        <MDXRemote
            source={post.content}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
                    rehypePlugins: [
                        // pretty code block
                        [
                            // @ts-ignore
                            rehypePrettyCode,
                            {
                                theme: {
                                    dark: 'github-dark-dimmed',
                                    light: 'github-light',
                                },
                            },
                        ],

                        rehypeSlug,
                    ],
                },
            }}
            components={MdxComponents}
        />
    )
}
