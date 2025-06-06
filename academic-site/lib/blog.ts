import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  date: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.content,
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): Post | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
  }
}

