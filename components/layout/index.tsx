import styles from "./index.module.css";

export default function Layout({ children } : any) {
  return <div className={styles.container}>{children}</div>
}
