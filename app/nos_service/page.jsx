"use client";
import styles from "./nos_service.module.scss";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import service1 from "../assets/eau.png";
import service2 from "../assets/feuille.png";
import service3 from "../assets/toiture.png";
import service4 from "../assets/protection.png";
import Image from "next/image";
export default function Page1() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.container_service}>
        <div className={styles.title_service}>
          <p>NOS SERVICES</p>

          <p>Explorez l'Excellence : Vos Besoins, Notre Priorité</p>
        </div>
        <div className={styles.container_duo1}>
          <div className={styles.services}>
            <Image src={service1} alt="service3" width={77} height={77} />
            <p className={styles.title_service}>Recherche de Fuites </p>
            <p className={styles.description}>
              Localisation experte de fuites : Protégez vos ressources,
              préservez votre tranquillité d'esprit.
            </p>
          </div>
          <div className={styles.services}>
            <Image src={service2} alt="service4" width={77} height={77} />
            <p className={styles.title_service}>Nettoyage de Toiture</p>
            <p className={styles.description}>
              Redonnez éclat et longévité à votre toit avec notre expertise en
              nettoyage professionnel.
            </p>
          </div>
        </div>
        <div className={styles.container_duo2}>
          <div className={styles.services}>
            <Image src={service3} alt="service1" width={77} height={77} />
            <p className={styles.title_service}>Rénovation de Toiture</p>
            <p className={styles.description}>
              Revitalisez votre maison avec notre expertise en rénovation de
              toiture, pour une allure neuve et une protection durable.
            </p>
          </div>
          <div className={styles.services}>
            <Image src={service4} alt="service1" width={77} height={77} />
            <p className={styles.title_service}>Réparation de Toiture</p>
            <p className={styles.description}>
              Redonnez vie à votre toit : Notre expertise en réparation pour une
              protection durable.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
