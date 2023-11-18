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
        <div className={styles.container_form}>
          <div className={styles.container_input}>
            <input
              className={styles.input}
              type="text"
              placeholder="Nom"
              name="name"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Téléphone"
              name="phone"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Sujet"
              name="subject"
            />
          </div>
          <div className={styles.container_textarea}>
            <textarea
              className={styles.textarea}
              type="text"
              placeholder="Message"
              name="message"
            />
          </div>
          <div className={styles.container_button}>
            <button className={styles.button}>Envoyer</button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
