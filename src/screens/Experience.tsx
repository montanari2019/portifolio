import { SessionTitle } from "@/components/sessionTitle/sessionTitle";
import styled from "../styles/pages/home/screens/experience.module.css";
import { TitleBebas } from "@/components/paragraph/titleBebas";
import { SubTitle } from "@/components/paragraph/subTitle";
import { experiences } from "@/utils/textUtils";
import { Paragraph } from "@/components/paragraph/paragraph";
export function Experience() {
  return (
    <main className={styled.container}>
      <SessionTitle title="Experience" />

      {experiences.map((index) => {
        return (
          <div key={index.id} className={styled.containerExperience}>
            <div className={styled.cardYear}>
              <strong>{index.year}</strong>
            </div>

            <div className={styled.containerItens}>
              <p className={styled.eplipse}></p>
              <p className={styled.line}></p>
            </div>

            <div className={styled.containerDescription}>
              <div>
                <TitleBebas title={index.title} />
                <p className={styled.paragraphPosition}>{index.subtitle}</p>

                <div className={styled.displayFlexSkil}>
                  {index.skils.map((skil) => {
                    return <SubTitle key={skil.id} value={`${skil.name},`} />;
                  })}
                </div>
              </div>

              <Paragraph description={index.describe} textAlignment="justify" />

              <div className={styled.separator}></div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
