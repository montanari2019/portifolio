"use client";
import { IconComponent } from "@/components/icons/icon";
import { URLS_ENUM } from "@/utils/urls";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import styled from "../styles/screens/footer.module.css";
export function Footer() {
  return (
    <footer className={styled.container}>
      <div className={styled.titles}>
        <h1>Muito Obrigado por vir até aqui.</h1>
        <p>
          Desenvolvido por{" "}
          <a className={styled.linkCriador} href={URLS_ENUM.GITHUB}>
            Ikaro Montanari
          </a>
        </p>
      </div>

      <div className={styled.networkDisplay}>
        <div className={styled.separator}></div>
        <div className={styled.displayNetworkFooter}>
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
        <div className={styled.separator}></div>
      </div>
    </footer>
  );
}
