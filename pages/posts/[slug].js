import Head from 'next/head'
import PostContent from '../../components/posts/post-detail/post-content'
import {getPostsFiles, getPostData} from '../../helpers/posts-utils'

const PostDetailPage = ({postData}) => {
  return (
    <>
      <Head>
        <meta name='description' content={postData.excerpt} />
        <title>{postData.title}</title>
      </Head>
      <PostContent postData={postData} />
    </>
  )
}

export const getStaticProps = async ({params}) => ({
  props: {
    postData: getPostData(params.slug)
  },
  revalidate: 600
})

export const getStaticPaths = async () => {
  const postsFilenames = getPostsFiles()
  const slugs = postsFilenames.map(fn => fn.replace(/\.md$/, ''))
  // pre-render all posts
  return {
    paths: slugs.map(slug => ({params: {slug}})),
    fallback: false
  }
}

export default PostDetailPage
