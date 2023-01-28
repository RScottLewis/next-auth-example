import Link from "next/link"
import styles from "./footer.module.css"
import packageJSON from "../package.json"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://wampum1st.com/faq">Documentation</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://wampum1st.com/category/news">News</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </li>
        <li className={styles.navItem}>
          <Link href="/policy">Policy</Link>
        </li>
        <li className={styles.navItem}>
          <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
        </li>
      </ul>
    </footer>
  )
}
