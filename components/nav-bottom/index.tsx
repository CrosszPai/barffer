import { FaCalculator, FaHeart, FaHome, FaList } from 'react-icons/fa'
import styles from './index.module.css'
const NavBottom = () => {
    return <nav className={styles['nav-container']}>
        <FaHome/>
        <FaList/>
        <FaHeart/>
        <FaCalculator/>
    </nav>
}

export default NavBottom