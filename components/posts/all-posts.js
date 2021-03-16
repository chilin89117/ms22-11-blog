import PostGrid from './post-grid'
import styles from './all-posts.module.css'

const AllPosts = ({posts}) => (
  <section className={styles.posts}>
    <h1>All Posts</h1>
    <PostGrid posts={posts} />
  </section>
)

export default AllPosts
