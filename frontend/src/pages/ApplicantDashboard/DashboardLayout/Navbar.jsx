import styles from "./navbar.module.css";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

function Navbar() {
  return (
    <header className={styles.navbar}>

      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} />

        <input
          type="text"
          placeholder="Search jobs..."
          className={styles.searchInput}
        />
      </div>

      <div className={styles.rightSection}>

        <button className={styles.notificationButton}>
          <FiBell />
          <span className={styles.notificationDot}></span>
        </button>

        <button className={styles.profileButton}>

          <div className={styles.avatar}>
            A
          </div>

          <span className={styles.username}>
            Aslam
          </span>

          <FiChevronDown />

        </button>

      </div>

    </header>
  );
}

export default Navbar;