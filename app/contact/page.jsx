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
          <form
            name="contact"
            method="POST"
            dada-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              className={styles.input}
              type="text"
              placeholder="Nom"
              name="name"
              for="name"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              name="email"
              for="email"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Téléphone"
              name="phone"
              for="phone"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Sujet"
              name="subject"
              for="subject"
            />

            <textarea
              className={styles.textarea}
              type="text"
              placeholder="Message"
              name="message"
              for="message"
            />
            <button type="submit" className={styles.button}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
