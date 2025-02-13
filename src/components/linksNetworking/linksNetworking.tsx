"use client";
import { URLS_ENUM } from "@/utils/urls";
import styled from "../../styles/linksNetwork/linksNetwork.module.css";
import { IconComponent } from "../icons/icon";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
export function LinksNetwork() {
  return (
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
  );
}
