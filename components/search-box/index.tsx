import styles from './index.module.css'
import { FaAngleDown, FaSearch } from 'react-icons/fa'
const SearchBox = () => {
    return <div className={styles['search-container']}>
        <label>
            <input placeholder="Search food" />
        </label>
        <button className="p-2 bg-blue-800 ml-4 h-full">
            <FaSearch color="white" size="1rem" />
        </button>
    </div>
}
export default SearchBox