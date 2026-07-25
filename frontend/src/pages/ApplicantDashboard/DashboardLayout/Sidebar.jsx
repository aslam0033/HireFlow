import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      {/* Logo */}
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>HireFlow</h2>
      </div>

      {/* Navigation */}
      <nav className={styles.navigation}>

        <NavLink
          to="/applicant/dashboard"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <span className={styles.icon}>▦</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/applicant/profile"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <span className={styles.icon}>👤</span>
          <span>My Profile</span>
        </NavLink>

        <NavLink
          to="/applicant/jobs"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <span className={styles.icon}>⌕</span>
          <span>Find Jobs</span>
        </NavLink>

        <NavLink
          to="/applicant/applications"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <span className={styles.icon}>▤</span>
          <span>My Applications</span>
        </NavLink>

        <NavLink
          to="/applicant/saved-jobs"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <span className={styles.icon}>♡</span>
          <span>Saved Jobs</span>
        </NavLink>

      </nav>

      {/* Bottom Navigation */}
      <div className={styles.bottomNavigation}>

        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <span className={styles.icon}>🏠</span>
          <span>Home</span>
        </NavLink>

        <button className={styles.logoutButton}>
          <span className={styles.icon}>↪</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;