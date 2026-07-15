import styles from  "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.homeContainer}>

      <header className={styles.navbar}>

        <h2 className={styles.logo}>
          HireFlow
        </h2>

        <nav className={styles.navLinks}>
            <Link className={styles.navItem} to='/'>Home</Link>
            <Link className={styles.navItem} to='/jobs'>Jobs</Link>
            <Link className={styles.navItem} to='/companies'>Companies</Link>
            <Link className={styles.navItem} to='/about'>About</Link>
        </nav>
      </header>

      <main className={styles.heroSection}>

        <h1 className={styles.heroTitle}>
          Find Your Dream Job
        </h1>

        <p className={styles.heroDescription}>
          Connect with top companies, explore exciting opportunities,
          and build your career with HireFlow.
        </p>

        <div className={styles.buttonContainer}>

          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>

          <Link to="/register" className={styles.registerButton}>
            Register
          </Link>

        </div>

      </main>
      <footer className={styles.footer}>
        Trusted by Developers • Recruiters • Companies
      </footer>

    </div>
  );
}

export default Home;