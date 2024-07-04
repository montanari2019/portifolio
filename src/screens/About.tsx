import { SessionTitle } from "@/components/sessionTitle/sessionTitle";
import styled from "../styles/screens/about.module.css";
import { Paragraph } from "@/components/paragraph/paragraph";
export function AboutScreens() {
  return (
    <main className={styled.container}>
      <SessionTitle title="About" />

      <Paragraph
        textAlignment="justify"
        textWeight="normal"
        description="I am a technology and innovation enthusiast, with extensive experience in software development and data analysis, focusing mainly on systems development.

Between 2018 and 2021, I studied Systems Analysis and Development at IFRO in Vilhena, Rondônia. During this period, I focused my efforts on web languages ​​such as JavaScript and became familiar with Vue.js, React.js and Node.js. I highlight the creation of an innovative TCC project, a management system for an association of academics. Users could join online, with administrators having full control, including issuing invoices integrated with the Sicoob bank API. This allowed me to graduate with honors and explore AWS for infrastructure.

After graduation, I started my career as a Systems Developer. Contributed to IFRO in developing a front-end in React.js with Material-UI for a portfolio of projects, implementing an authentication layer with React Context.

I also improved my skills through courses focused on JavaScript at Rocketseat, creating applications with attractive and responsive interfaces, adopting the best market practices.
At Rede de Postos Miran, with the M-Park project, I developed the front-end in React.js and the back-end with NestJS. This included responsive graphics, design patterns, session control and integration with Totvs.

Currently, I work in project development at Sicoob Credisul, where I focus my efforts on creating innovative and effective solutions that meet the organization's needs. I continue to improve my skills and knowledge, staying at the forefront of systems development.

With a solid foundation in systems development, I am always excited to face new challenges and contribute to the success of projects in the world of technology."
      />
    </main>
  );
}
