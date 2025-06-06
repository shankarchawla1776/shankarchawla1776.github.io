import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeKatex from 'rehype-katex'
import rehypePrism from 'rehype-prism'
import remarkMath from 'remark-math'

export async function getMDXContent(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex, rehypePrism],
      },
    },
  })

  return content
}

