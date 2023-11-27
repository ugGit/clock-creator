import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div id={styles.appContainer}>{children}</div>;
}
