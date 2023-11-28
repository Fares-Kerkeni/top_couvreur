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
          <form name="contact" action="/" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <input type="text" name="firstname" id="firstname" />
              <label htmlFor="yourname">Your Name:</label> <br />
              <input type="text" name="name" id="yourname" />
            </p>
            <p>
              <label htmlFor="youremail">Your Email:</label> <br />
              <input type="email" name="email" id="youremail" />
            </p>
            <p>
              <label htmlFor="yourmessage">Message:</label> <br />
              <textarea name="message" id="yourmessage"></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
