import PostGrid from '../posts/post-grid'
import styles from './featured.module.css'

const Featured = ({posts}) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={posts} />
    </section>
  )
}

export default Featured
