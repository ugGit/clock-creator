import styles from "./layout.module.css";
import Navigation from "./navigation/navigation";

export default function Layout({ children }) {
  return (
    <div id={styles.appContainer}>
      <Navigation />
      {children}
    </div>
  );
}
