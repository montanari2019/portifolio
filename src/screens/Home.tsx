"use client";
import { bebas } from "@/assets/fonts";
import { Button } from "@/components/button";
import { LinksNetwork } from "@/components/linksNetworking/linksNetworking";
import { URLS_ENUM } from "@/utils/urls";
import foto from "../assets/foto_profile.png";
import imageQuadHd from "@/assets/initialSection/DesktopWIDE.svg";
import imageFullHd from "@/assets/initialSection/DesktopFULLHD.svg";
import imageMobile from "@/assets/initialSection/iPhone_MOBILE.svg";
import styled from "../styles/pages/home/screens/home.module.css";
import Image from "next/image";

export function HomeScreens() {
  return (
    <main className={styled.container}>
      <section className={styled.imageSection}>
        {/* <Image fill src={imageQuadHd} alt="Ikaro Montanari" className={styled.fotoQuadHd} /> */}
        <Image
          fill
          src={imageFullHd}
          alt="Ikaro Montanari"
          className={styled.fotoFullHd}
        />
        <Image
          fill
          src={imageMobile}
          alt="Ikaro Montanari"
          className={styled.fotoMobile}
        />
      </section>
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

        <div className={styled.displayLinks}>
          <LinksNetwork />
        </div>
      </div>
      {/* <div className={styled.continuator}></div> */}
    </main>
  );
}
