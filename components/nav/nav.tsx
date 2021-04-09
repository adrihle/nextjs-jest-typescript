import styles from './nav.module.sass'
// Este es el componente para navegar por las distintas urls (como un a)
import Link from 'next/link'

export const Nav: React.FC<any> = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Link href="/">Home</Link>
        <Link href="/page2">Page 2</Link>
        <Link href="/page3">Page 3</Link>
      </div>
    </div>
  )
}
