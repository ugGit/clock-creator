import styles from "./Layout.module.css";
import Navigation from "./Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <div id={styles.appContainer}>
      <Navigation />
      {children}
    </div>
  );
}
