import Head from 'next/head'
import AllPosts from '../../components/posts/all-posts'
import {getAllPosts} from '../../helpers/posts-utils'

const AllPostsPage = ({posts}) => (
  <>
    <Head>
      <meta name='description' content='All my posts' />
      <title>Chi's Blog - All Posts</title>
    </Head>
    <AllPosts posts={posts} />
  </>
)

export const getStaticProps = async () => ({
  props: {
    posts: getAllPosts()
  },
  revalidate: 21600
})

export default AllPostsPage
