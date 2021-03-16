import Head from 'next/head'
import Hero from '../components/homepage/hero'
import Featured from '../components/homepage/featured'
import {getFeaturedPosts} from '../helpers/posts-utils'

const HomePage = ({posts}) => {
  return (
    <>
      <Head>
        <meta name='description' content='I post Udemy courses' />
        <title>Chi's Blog</title>
      </Head>
      <Hero />
      <Featured posts={posts} />
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: getFeaturedPosts()
  },
  revalidate: 86400
})

export default HomePage
