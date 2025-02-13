"use client";
import { bebas } from "@/assets/fonts";
import { Button } from "@/components/button";
import { LinksNetwork } from "@/components/linksNetworking/linksNetworking";
import { URLS_ENUM } from "@/utils/urls";
import foto from "../assets/foto_profile.png";
import styled from "../styles/screens/home.module.css";
export function HomeScreens() {
  return (
    <main className={styled.container}>
      <div className={styled.containerSections}>
        <section>
          <div className={styled.titles}>
            <div className={styled.titlesDisplay}>
              <div className={bebas.className}>
                <h1 className={styled.titleBebas}>Ikaro Montanari</h1>
              </div>
            </div>
            <p className={styled.paragraph}>Desenvolvedor Fullstack</p>
          </div>

          <a
            target="_blank"
            href={URLS_ENUM.WHATSAPP}
            className={styled.linkButton}
          >
            <Button field title="Contate-me" width={313} />
          </a>
        </section>

        <section className={styled.containerProfile}>
          <div className={styled.elipse}></div>
          <img
            src={foto.src}
            className={styled.imageDev}
            alt="foto do desenvolvedor"
          />
        </section>

        <div className={styled.displayLinks}>
          <LinksNetwork />
        </div>
      </div>
      {/* <div className={styled.continuator}></div> */}
    </main>
  );
}
