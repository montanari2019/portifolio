import { Paragraph } from "@/components/paragraph/paragraph";
import { SessionTitle } from "@/components/sessionTitle/sessionTitle";
import { aboutParahraph } from "@/utils/textUtils";
import styled from "../styles/screens/portfolio.module.css"
import { CardPortifolio } from "@/components/cardportfolio/cardPortfolio";

export function Portifolio() {
  return (
    <main  className={styled.container}>
      <SessionTitle title="Portfolio" />

      <h2>Web</h2>

        <CardPortifolio/>
      <div className={styled.cardImagens}>
      </div>

      
    </main>
  );
}
