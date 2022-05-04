import Link from 'next/link';
import styles from './index.module.css'

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.logo}>WeCode</a>
      </Link>
      <div className={styles.menu_container}>
       <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  )
}
