"use client";
import styles from "./page.module.scss";
import imaga_header from "./assets/header_home.png";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Slider from "./components/slider/slider";
import service1 from "../app/assets/eau.png";
import service2 from "../app/assets/feuille.png";
import service3 from "../app/assets/toiture.png";
import service4 from "../app/assets/protection.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// Import Swiper styles

// Import Swiper React components

// Import Swiper styles

// import required modules

// import required modules
// import required modules

export default function Home() {
  const popup = useSelector((state) => state.popup.value);

  const dispatch = useDispatch();
  return (
    <div
      className={styles.container_home}
      style={{
        overflow: popup ? "hidden" : "none",
      }}
    >
      <div className={styles.header}>
        <Nav />
        <div className={styles.container_header}>
          <div className={styles.title_heure}>
            <p>COUVREUR 45 Artisan Couvreur</p>

            <p>du Lundi au Samedi de 08h00 à 20h00 </p>
            <button>06 09 49 82 99</button>
          </div>
        </div>
      </div>
      <div className={styles.container_service}>
        <div className={styles.title_service}>
          <p>NOS SERVICES</p>

          <p>Explorez l'Excellence : Vos Besoins, Notre Priorité</p>
        </div>
        <div className={`${styles.container2_service} ${styles.rowContainer}`}>
          <div className={styles.services}>
            <Image src={service1} alt="service1" width={77} height={77} />
            <p className={styles.title_service}>Rénovation de Toiture</p>
            <p className={styles.description}>
              Revitalisez votre maison avec notre expertise en rénovation de
              toiture, pour une allure neuve et une protection durable.
            </p>
          </div>
          <div className={styles.services}>
            <Image src={service2} alt="service1" width={77} height={77} />
            <p className={styles.title_service}>Réparation de Toiture</p>
            <p className={styles.description}>
              Redonnez vie à votre toit : Notre expertise en réparation pour une
              protection durable.
            </p>
          </div>
        </div>
        <Link href="/nos_service">Découvrir Nos Services</Link>
      </div>
      <div className={styles.container_ville}>
        <p className={styles.title}>Notre Intervention dans Votre Ville</p>
        <p className={styles.description}>
          Nous intervenons dans toutes les communes du Loiret et des
          départements limitrophes tels que l'Essonne, et La Seine et Marne.
        </p>
      </div>
      <div className={styles.container_galerie}>
        <div className={styles.container_slider}>
          <p>Galeries</p>

          <p>
            Témoignage de notre expertise en rénovation et réparation de
            toitures
          </p>
          <Slider />
          <Link href="/galerie">Explorer Nos Réalisations</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
