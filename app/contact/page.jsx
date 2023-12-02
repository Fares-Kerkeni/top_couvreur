"use client";
import styles from "./contact.module.scss";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
export default function Page2() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.container_contact}>
        <div className={styles.container_title}>
          <p>Envoyez nous un message</p>
        </div>
        <div className={styles.container_form}></div>
      </div>
      <Footer />
    </main>
  );
}
