import { getMDXContent } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PostData {
  title: string
  date: string
  content: string
}

async function getPost(slug: string): Promise<PostData | null> {
  // In a real app, you'd fetch this from your markdown files or CMS
  const posts: Record<string, PostData> = {
    'normal-forms': {
      title: 'Normal Forms',
      date: 'October 11, 2020',
      content: `
# Normal Forms

Here's an example of a mathematical equation:

$$
\\frac{d}{dx}\\left(\\int_{a}^{x} f(t) dt\\right) = f(x)
$$

Your content here...
      `
    }
  }

  const post = posts[slug]
  if (!post) return null

  const content = await getMDXContent(post.content)
  return { ...post, content }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-sm max-w-none">
      <h1 className="text-2xl mb-2">{post.title}</h1>
      <div className="post-date mb-8">Posted {post.date}</div>
      <div className="mt-8">{post.content}</div>
      <div className="mt-12 pt-4 border-t">
        <Link href="/" className="text-blue-600 hover:underline">← Back to articles</Link>
      </div>
    </article>
  )
}

