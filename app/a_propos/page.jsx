"use client";
import styles from "./a_propos.module.scss";
import Image from "next/image";
import premiere_image from "../assets/construction.png";
import deuxieme_image from "../assets/image.png";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
export default function Page2() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.section}>
        <div className={styles.container_image}>
          <Image src={premiere_image} alt="service1" width={77} height={77} />
        </div>
        <div className={styles.container_texte}>
          <div className={styles.block_text}>
            <p>
              Top Toitures - Votre Artisan Couvreur de Confiance dans le Loiret
            </p>
            <p>
              Spécialistes de la Couverture, nous vous offrons des services de
              haute qualité depuis 2013. Ravalement, Isolation : notre expertise
              répond à vos besoins. Des interventions rapides et urgentes
              garanties. Opérant dans le Loiret et ses environs, confiez-nous
              vos travaux de Couverture."
            </p>
          </div>
          <div>
            <div className={styles.block_text}>
              <p>Jean Paul ROBERT - Engagé pour Votre Satisfaction</p>
              <p>
                Depuis 2013, Jean Paul ROBERT place la satisfaction client au
                cœur de notre engagement. Votre confiance est notre priorité
                absolue. Faites-nous confiance pour des travaux de couverture
                exemplaires et un service dédié à votre bien-être.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.container_image}>
          <Image src={deuxieme_image} alt="service1" width={77} height={77} />
        </div>
        <div className={styles.container_texte}>
          <div className={styles.block_text}>
            <p>SERVICE DE QUALITÈ </p>
            <p>
              Top Toitures, votre expert en couverture dans le Loiret, se
              consacre à vous offrir des services de qualité depuis 2013.
              Spécialisés dans le domaine de la couverture, nous proposons un
              large éventail de prestations, notamment le ravalement,
              l'isolation.
            </p>
          </div>
          <div className={styles.block_text}>
            <p>
              Top Toitures - Votre Artisan Couvreur de Confiance dans le Loiret
            </p>
            <p>
              Chez Top Toitures, nous adhérons à trois valeurs clés :
              l'intégrité, la rigueur et la transparence. Votre satisfaction est
              notre objectif premier, dépassant toute autre considération.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
