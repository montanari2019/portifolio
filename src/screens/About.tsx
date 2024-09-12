'use client'
import { SessionTitle } from "@/components/sessionTitle/sessionTitle";
import styled from "../styles/screens/about.module.css";
import { Paragraph } from "@/components/paragraph/paragraph";
import { aboutParahraph } from "@/utils/textUtils";
import { skils } from "@/utils/mySkils";
import { CardSkill } from "@/components/cardSkills/cardSkill";
export function AboutScreens() {
  return (
    <main className={styled.container}>
      <SessionTitle title="About" />

      <Paragraph
        textAlignment="justify"
        textWeight="normal"
        fontSize="--FONT-SIZE-MD"
        description={aboutParahraph}
      />

      <section className={styled.skills}>
        <h1>My Skills</h1>

        <div className={styled.skillDisplay}>
          {skils.map((index) => {
            return (
             
                <CardSkill
                bgColor={index.bgColor}
                color={index.color}
                description={index.description}
                iconUrl={index.icon}
                title={index.title}
                url={index.url}
                key={index.title}
              />
           
            );
          })}
        </div>
      </section>
    </main>
  );
}
