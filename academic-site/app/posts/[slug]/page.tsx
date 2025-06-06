import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import Link from 'next/link'
import { getPostBySlug } from '../../../lib/blog'
import { notFound } from 'next/navigation'

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-sm max-w-none">
      <h1 className="text-2xl mb-2 text-foreground">{post.title}</h1>
      <div className="post-date mb-8">Shankar Chawla - {post.date}</div>
      <div className="mt-8">
        <MDXRemote 
          source={post.content} 
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            }
          }}
        />
      </div>
      <div className="mt-12 pt-4 border-t">
        <Link href="/" className="hover:underline">← Back to articles</Link>
      </div>
    </article>
  )
}

