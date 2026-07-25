import {
  FiBell,
  FiBriefcase,
  FiChevronDown,
  FiHome,
  FiMessageCircle,
  FiUsers,
} from "react-icons/fi";

import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>

      {/* ================= LOGO ================= */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>H</div>

        <span className={styles.logoText}>
          HireFlow
        </span>
      </div>


      {/* ================= MAIN NAVIGATION ================= */}
      <div className={styles.navigation}>

        {/* Home */}
        <button className={`${styles.navItem} ${styles.active}`}>
          <FiHome />
          <span>Home</span>
        </button>


        {/* My Network */}
        <button className={styles.navItem}>
          <FiUsers />
          <span>My Network</span>
        </button>


        {/* Jobs */}
        <button className={styles.navItem}>
          <FiBriefcase />
          <span>Jobs</span>
        </button>


        {/* Notifications */}
        <button className={styles.navItem}>
          <div className={styles.iconWrapper}>
            <FiBell />

            <span className={styles.badge}>
              3
            </span>
          </div>

          <span>Notifications</span>
        </button>


        {/* Messages */}
        <button className={styles.navItem}>
          <div className={styles.iconWrapper}>
            <FiMessageCircle />

            <span className={styles.badge}>
              2
            </span>
          </div>

          <span>Messages</span>
        </button>

      </div>


      {/* ================= PROFILE ================= */}
      <div className={styles.rightSection}>

        <div className={styles.divider}></div>

        <button className={styles.profileButton}>

          <div className={styles.avatar}>
            A
          </div>

          <div className={styles.profileInfo}>
            <span className={styles.name}>
              Aslam Mujawar
            </span>

            <span className={styles.role}>
              View Profile
            </span>
          </div>

          <FiChevronDown className={styles.arrow} />

        </button>

      </div>

    </nav>
  );
}

export default Navbar;