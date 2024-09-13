"use client";
import { bebas } from "@/assets/fonts";
import { Button } from "@/components/button";
import styled from "../styles/screens/home.module.css";
import Image from "next/image";
import foto from "../assets/foto_profile.png";
import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { IconComponent } from "@/components/icons/icon";
export function HomeScreens() {
  return (
    <main className={styled.container}>
      <div className={styled.containerSections}>
        <section>
          <div className={styled.titles}>
            <div className={styled.titlesDisplay}>
              <h1 className={styled.titleAsap}>I’m</h1> 
              <div className={bebas.className}>
                <h1 className={styled.titleBebas}>Ikaro Montanari</h1>
              </div>
            </div>
            <p className={styled.paragraph}>Fullstack javascritp developer</p>
          </div>

          <Button field title="Contact me" width={313} />
        </section>

        <section className={styled.containerProfile}>
          <div className={styled.elipse}></div>
          <Image
            src={foto}
            width={795}
            height={711}
            alt="foto do desenvolvedor"
          />
        </section>

        <section className={styled.sectionSocialNetwork}>
          <div className={styled.separator}></div>

          <IconComponent
            icon={<InstagramLogo size={36} />}
            url="https://www.instagram.com/ikaro.montanari/"
          />
          <IconComponent
            icon={<LinkedinLogo size={36} weight="fill" />}
            url="https://www.linkedin.com/in/ikaro-montanari-5aa120208/"
          />
          <IconComponent
            icon={<WhatsappLogo size={36} weight="light" />}
            url="#"
          />
        </section>
      </div>
      {/* <div className={styled.continuator}></div> */}
    </main>
  );
}
