"use client";
import { LinksNetwork } from "@/components/linksNetworking/linksNetworking";
import { URLS_ENUM } from "@/utils/urls";
import styled from "../styles/pages/home/screens/footer.module.css";
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
        <LinksNetwork />
      </div>
    </footer>
  );
}
