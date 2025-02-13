"use client";
import { bebas } from "@/assets/fonts";
import { Button } from "@/components/button";
import styled from "../styles/screens/home.module.css";
import Image from "next/image";
import foto from "../assets/foto_profile.png";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { IconComponent } from "@/components/icons/icon";
import { URLS_ENUM } from "@/utils/urls";
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
            style={{ textDecoration: "none" }}
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

        <section className={styled.sectionSocialNetwork}>
          <div className={styled.separator}></div>

          <div className={styled.networkDisplay}>
            <IconComponent
              icon={<InstagramLogo size={36} />}
              url={URLS_ENUM.INSTAGRAM}
            />
            <IconComponent
              icon={<LinkedinLogo size={36} weight="fill" />}
              url={URLS_ENUM.LINKEDIN}
            />
            <IconComponent
              icon={<WhatsappLogo size={36} weight="light" />}
              url={URLS_ENUM.WHATSAPP}
            />
            <IconComponent
              icon={<GithubLogo size={36} weight="light" />}
              url={URLS_ENUM.GITHUB}
            />
          </div>
        </section>
      </div>
      {/* <div className={styled.continuator}></div> */}
    </main>
  );
}
