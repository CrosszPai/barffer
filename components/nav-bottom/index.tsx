import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaCalculator, FaHeart, FaHome, FaList } from 'react-icons/fa'
import styles from './index.module.css'
const NavBottom = () => {
    const Router = useRouter()
    return <nav className={styles['nav-container']}>
        <Link href='/'>
            <FaHome size="1.25rem" className={Router.asPath === '/' && styles['link-active']} />
        </Link>
        <Link href="/recepie">
            <FaList size="1.25rem" className={Router.asPath === '/recepie' && styles['link-active']} />
        </Link>
        <Link href="/fav">
            <FaHeart size="1.25rem" className={Router.asPath === '/fav' && styles['link-active']} />
        </Link>
        <Link href="/cal">
            <FaCalculator size="1.25rem" className={Router.asPath === '/cal' && styles['link-active']} />
        </Link>
    </nav>
}

export default NavBottom