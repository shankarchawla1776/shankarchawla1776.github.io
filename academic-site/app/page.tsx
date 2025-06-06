import Link from 'next/link'
import { getAllPosts } from '../lib/blog'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <h2 className="text-2xl mb-8">Articles</h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="block">
                <div className="text-blue-600 hover:underline">{post.title}</div>
                <div className="post-date">Indefeasible - {post.date}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
