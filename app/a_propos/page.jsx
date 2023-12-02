"use client";
import styles from "./a_propos.module.scss";
import Image from "next/image";
import premiere_image from "../assets/roofer-working-special-protective-work-600nw-1913665474.png";
import deuxieme_image from "../assets/2b90b2683bcb.png";
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
              TOP COUVREUR - Votre Artisan Couvreur de Confiance dans le Loiret
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
              <p> L’usure d’une toiture est inévitable</p>
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
              TOP COUVREUR, votre expert en couverture dans le Loiret, se
              consacre à vous offrir des services de qualité depuis 2013.
              Spécialisés dans le domaine de la couverture, nous proposons un
              large éventail de prestations, notamment le ravalement,
              l'isolation.
            </p>
          </div>
          <div className={styles.block_text}>
            <p>
              TOP COUVREUR - Votre Artisan Couvreur de Confiance dans le Loiret
            </p>
            <p>
              Rénovation partielle, Ce sont des travaux de remise en état d’une
              couverture ne nécessitant pas le changement complet par du neuf.
              Il s’agit donc de réparations ou de remplacements d’une partie de
              la toiture afin d’améliorer son étanchéité ou son aspect
              esthétique (un traitement hydrofuge des tuiles pouvant compléter
              cette rénovation). En matière de rénovation partielle, nous
              intervenons souvent sur les faîtages, arêtiers, tuiles de rives,
              zinguerie, gouttières, fenêtres de toit, souches de cheminées
              …etc.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
