import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaCalculator, FaHeart, FaHome, FaList } from 'react-icons/fa'
import styles from './index.module.css'
const NavBottom = () => {
    const Router = useRouter()
    return <nav className={styles['nav-container']}>
        <Link href='/'>
            <a className="flex-1 flex justify-center">
                <FaHome size="1.25rem" className={Router.asPath === '/' && styles['link-active']} />
            </a>
        </Link>
        <Link href="/recepie">
            <a className="flex-1 flex justify-center">
                <FaList size="1.25rem" className={Router.asPath === '/recepie' && styles['link-active']} />
            </a>
        </Link>
        <Link href="/favorite">
            <a className="flex-1 flex justify-center">
                <FaHeart size="1.25rem" className={Router.asPath === '/fav' && styles['link-active']} />
            </a>
        </Link>
        <Link href="/cal">
            <a className="flex-1 flex justify-center">
                <FaCalculator size="1.25rem" className={Router.asPath === '/cal' && styles['link-active']} />
            </a>
        </Link>
    </nav>
}

export default NavBottom