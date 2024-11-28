import styles from "./styles/aboutus.module.css"
const AboutUs = () => {
    return (
        <div className={styles.aboutUsContainer}>
          <h1 className={styles.aboutUsDescription}>
            Phase 1 project - 4th year 2024-25 / Sem 7
          </h1>
          <h2 className={styles.aboutUsTitle}>Guide: Prof. (Dr.) A. W. Kiwelekar</h2>
          <h2 className={styles.aboutUsTitle}>Contributors:</h2>
          <ul className={styles.teamList}>
            <li>Swanand Shekhar Bhuskute - 2130331245033</li>
            <li>Ashish Subhash Magar - 2130331245040</li>
            <li>Jeet Yash Jawale - 2130331245046</li>
          </ul>
      </div>
    );
  };
  
  export default AboutUs;
  