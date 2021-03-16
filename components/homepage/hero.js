import Image from 'next/image'
import styles from './hero.module.css'

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.image}>
      <Image src='/images/site/chi.jpg' alt='Image of Chi' width={400} height={400} /> 
    </div>
    <h1>Hi, I am Chi</h1>
    <p>I blog about nothing</p>
  </section>
)

export default Hero
