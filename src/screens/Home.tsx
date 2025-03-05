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
import { Plus } from "@phosphor-icons/react";
import ImageProfile from "@/assets/imagens/profile_IM.png";

export function HomeScreens() {
  return (
    <main className={styled.container}>
      {/* <div className={styled.continuator}></div> */}
      <header className={styled.header}>
        <div className={styled.paragraphHeader}>
          <p>Montanari Soft</p>
          <strong className={styled.separatorHeader}></strong>
          <p>2025</p>
        </div>

        <button className={styled.buttonCall} type="button">
          <a
            className={styled.buttonHref}
            target="_blank"
            href={URLS_ENUM.WHATSAPP}
          >
            Agendar Call
          </a>
        </button>
      </header>

      <section className={styled.sectionText}>
        <div>
          <div className={styled.titleSection}>
            <h1>Olá, eu sou</h1>
            <h2>Ikaro Montanari</h2>
          </div>

          <div className={styled.paragraphSectionText}>
            <p>
              Sou um desenvolvedor Full Stack com mais de 7 anos de experiência,
              dedicado a transformar ideias em soluções digitais inovadoras. Já
              contribuí para mais de <strong>10 projetos</strong>, desenvolvendo
              sistemas e plataformas que tornam os{" "}
              <strong>negócios mais ágeis, escaláveis e eficientes.</strong>
            </p>
            <p>
              Acreditamos que não temos clientes, mas sim{" "}
              <strong>parceiros</strong>. Na Montanari Soft, nossas bases são
              construídas em parceria, honestidade, transparência,
              comprometimento e paixão pelo que fazemos.{" "}
              <strong>
                {" "}
                Valorizamos princípios sólidos e entragamos soluções que gerem
                impacto real e duradouro.
              </strong>
            </p>
          </div>

          <div className={styled.paragraphPlusItens}>
            <div className={styled.plusIten}>
              <div className={styled.plusItenParagraph}>
                <Plus weight="thin" size={60} />
                <p>10</p>
              </div>
              <p>Projetos Desenvolvidos</p>
            </div>

            <div className={styled.separator}></div>

            <div className={styled.plusIten}>
              <div className={styled.plusItenParagraph}>
                <Plus weight="thin" size={60} />
                <p>7</p>
              </div>
              <p>Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styled.sectionImage}>
        <Image
          className={styled.imagem}
          alt="ceo monanarisoft"
          src={ImageProfile}
        />
      </section>
    </main>
  );
}
