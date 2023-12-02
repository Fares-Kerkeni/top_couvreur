"use client";
import styles from "./footer.module.scss";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <main className={styles.main}>
      <div className={styles.contact}>
        <div className={styles.Reseau}>
          <p>Réseau </p>
          <Image src={instagram} alt="service1" width={20} height={20} />
          <Image src={facebook} alt="service1" width={20} height={20} />
          <Image src={twitter} alt="service1" width={20} height={20} />
        </div>
        <div className={styles.number}>
          <p>Contact</p>
          <p>06 09 49 82 99</p>
        </div>
      </div>
      <div className={styles.container_links}>
        <div className={styles.links}>
          <p>Navigation</p>
          <Link href="/">Acceuil</Link>
          <Link href="/nos_service">Nos services</Link>
          <Link href="/a_propos">À Propos</Link>
          <Link href="/galerie">Galerie</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </main>
  );
}
