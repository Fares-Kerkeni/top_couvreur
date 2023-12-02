import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./nav.module.scss";
import Image from "next/image";
import menu from "../../assets/menu.png";
import logo from "../../assets/image_ac/Group.svg";
import { useDispatch, useSelector } from "react-redux";
import { chagevalue } from "../../store/slice/popupSlice";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Header() {
  const [state, setstate] = useState(false);

  useEffect(() => {
    // Initialise AOS uniquement côté client
    if (process.browser) {
      AOS.init();
    }
  }, []);

  const handlePopup = () => {
    setstate(!state);
  };

  return (
    <main className={state ? styles.z_index : styles.main}>
      <div className={styles.nav_desktop}>
        <div className={styles.container_logo}>
          <Image
            src={logo}
            alt="menu"
            width={40}
            height={40}
            onClick={handlePopup}
          />
        </div>
        <div className={styles.container_link}>
          <Link href="/">Acceuil</Link>
          <Link href="/nos_service">Nos services</Link>
          <Link href="/a_propos">À Propos</Link>
          <Link href="/galerie">Galerie</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div></div>
      </div>
      <div className={styles.nav_mobile}>
        <div className={styles.container_logo}>
          <Image
            src={menu}
            alt="menu"
            width={40}
            height={40}
            onClick={handlePopup}
          />
        </div>
        {state ? (
          <div className={styles.container}>
            <div className={styles.gray}></div>
            <div className={styles.content_nav} data-aos="fade-left">
              <div className={styles.container_logo}>
                <Image
                  src={menu}
                  alt="menu"
                  width={40}
                  height={40}
                  onClick={handlePopup}
                />
              </div>
              <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/nos_service">Nos services</Link>
                <Link href="/a_propos">À Propos</Link>
                <Link href="/galerie">Galerie</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
