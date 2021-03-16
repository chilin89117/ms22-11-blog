import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export const getPostsFiles = () => fs.readdirSync(postsDir)

export const getPostData = (postIdentifier) => {
  // postIdentifier can be either slug or filename
  const postSlug = postIdentifier.replace(/\.md$/, '')
  const filePath = path.join(postsDir, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const {data, content} = matter(fileContent)
  return {
    slug: postSlug,
    ...data,
    content
  }
}

export const getAllPosts = () => {
  const postsFiles = getPostsFiles()
  const allPosts = postsFiles.map(postFile => getPostData(postFile))
  return allPosts.sort((postA, postB) => postA.data > postB.data ? -1 : 1)
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.isFeatured)
}
