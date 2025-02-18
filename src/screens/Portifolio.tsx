import IframeComponent from "@/components/figmaPortfolio/iframe";
import { SessionTitle } from "@/components/sessionTitle/sessionTitle";
import styled from "../styles/pages/home/screens/portfolio.module.css";

// data/iframeData.js
export const iframeData = [
  {
    title: "Sicoob Agrotech 2024",
    src: "https://embed.figma.com/design/xYwXF2WuiwiTDp7AbDKpvH/AgroTech?node-id=540-2&embed-host=share",
  },
  {
    title: "Bereia Livraria",
    src: "https://embed.figma.com/design/eRnLooeHK8648PHoJyU6li/Bereia-Livrarias-App?node-id=26-2&embed-host=share",
  },
  {
    title: "Monitor de Triagem Mpark",
    src: "https://embed.figma.com/design/7I3YgeEjr8uJYS3DO1q8Kf/M-PARK?node-id=122-2&embed-host=share",
  },
  {
    title: "Mundo Gelado - SP",
    src: "https://embed.figma.com/design/nXDPj6RdqSffUFllEhuYmR/Fabio-project?node-id=187-4&embed-host=share",
  },
  {
    title: "Finance Home",
    src: "https://embed.figma.com/design/uMz9GKJRQrVPCuMBYOf290/Finance-home?node-id=228-787&embed-host=share",
  },
  {
    title: "Church Music",
    src: "https://embed.figma.com/design/gYNgLYewYAlljTVxPQdT0W/Church-music?node-id=22-2&embed-host=share",
  },
  {
    title: "Projeto Marketplace para Cooperados",
    src: "https://embed.figma.com/design/4sCkFT9RJxiagPNggSGSvh/Projeto-Marketplace?node-id=71-2&embed-host=share",
  },
];

export function Portifolio() {
  return (
    <main className={styled.container}>
      <SessionTitle title="Portfolio" />

      <h2>Web e Mobile</h2>

      <div className={styled.cardImagens}></div>

      <div className={styled.itensPortifolio}>
        {iframeData.map((index) => (
          <IframeComponent
            src={index.src}
            title={index.title}
            key={index.src}
          />
        ))}
      </div>
    </main>
  );
}
