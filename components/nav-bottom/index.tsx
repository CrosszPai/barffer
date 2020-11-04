import { useRouter } from "next/router";
import Link from "next/link";
import { FaCalculator, FaHeart, FaHome, FaList } from "react-icons/fa";
import styles from "./index.module.css";
const NavBottom = () => {
  const Router = useRouter();
  return (
    <nav className={styles["nav-container"]}>
      <Link href="/">
        <a className="flex-1 flex justify-center">
          <FaHome
            size="1.25rem"
            className={
              Router.asPath === "/" ? styles["link-active"] : undefined
            }
          />
        </a>
      </Link>
      <Link href="/recepie">
        <a className="flex-1 flex justify-center">
          <FaList
            size="1.25rem"
            className={
              Router.asPath === "/recepie" ? styles["link-active"] : undefined
            }
          />
        </a>
      </Link>
      <Link href="/favorite">
        <a className="flex-1 flex justify-center">
          <FaHeart
            size="1.25rem"
            className={
              Router.asPath === "/favorite" ? styles["link-active"] : undefined
            }
          />
        </a>
      </Link>
      <Link href="/calculator">
        <a className="flex-1 flex justify-center">
          <FaCalculator
            size="1.25rem"
            className={
              Router.asPath === "/calculator" ? styles["link-active"] : undefined
            }
          />
        </a>
      </Link>
    </nav>
  );
};

export default NavBottom;
