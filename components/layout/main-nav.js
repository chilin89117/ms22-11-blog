import Link from 'next/link'
import Logo from '../layout/logo'
import styles from './main-nav.module.css'

const MainNav = () => (
  <header className={styles.header}>
    <Link href='/'>
      <a><Logo /></a>
    </Link>
    <nav>
      <ul>
        <li><Link href='/posts'>Posts</Link></li>
        <li><Link href='/contact'>Contact Me</Link></li>
      </ul>
    </nav>
  </header>
)

export default MainNav
