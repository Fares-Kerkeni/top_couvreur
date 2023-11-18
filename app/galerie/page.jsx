"use client";
import styles from "./galerie.module.scss";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Slider from "../components/slider/slider";
import Image from "next/image";
export default function Page1() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.container_slider}>
        <p>Galeries</p>

        <p>
          Témoignage de notre expertise en rénovation et réparation de toitures
        </p>
        <Slider />
      </div>
      <Footer />
    </main>
  );
}
