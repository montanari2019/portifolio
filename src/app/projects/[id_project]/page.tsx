"use client";

import { useParams } from "next/navigation";

import styled from "../../../styles/pages/projects/styled.module.css";
import { CaretLeft } from "@phosphor-icons/react";
import { Footer } from "@/screens/Footer";
import Image from "next/image";

export default function ProjectDetails() {
  const { id_project } = useParams();
  return (
    <div className={styled.container}>
      <div className={styled.elipseTopRigth}></div>
      <div className={styled.elipseButtonLeft}></div>
      <div className={styled.iconButton}>
        <CaretLeft size={32} />
      </div>
      <main className={styled.main}>
        <section className={styled.sectionLeft}>
          <div className={styled.containerParagraph}>
            <h1>Sicoob Agrotech</h1>

            <p>
              O projeto teve início em novembro de 2023, quando, após uma
              reunião, o Sr. Vilmar Saugo me confiou a missão de desenvolver um
              aplicativo para a primeira edição da feira de agronegócios Sicoob
              Agrotech. Deixo aqui meu agradecimento pela oportunidade de
              participar desse desenvolvimento. Iniciamos o trabalho com um
              levantamento de requisitos junto à comissão organizadora da feira.
              Durante esse processo, entendemos as necessidades do evento e
              coletamos informações suficientes para prototipar a interface que
              você está vendo agora. O projeto teve duração de novembro de 2023
              até abril de 2024, quando a feira foi realizada.
            </p>
          </div>

          <div className={styled.containerParagraph}>
            <h2>Principais funcionalidades</h2>

            <p>
              <strong>Login social</strong> com Apple e Google.{" "}
            </p>

            <p>
              {" "}
              <strong>Geolocalização integrada ao Google</strong>
              Maps para auxiliar os visitantes na navegação pela feira, devido
              ao seu grande porte.Implementamos um mecanismo de geolocalização
              baseado em demarcações nos quatro cantos dos estandes, garantindo
              maior precisão na localização.{" "}
            </p>

            <p>
              <strong>Cadastro de eventos,</strong> como palestras e atividades
              interativas.
            </p>

            <p>
              <strong>Listagem de expositores</strong>, permitindo que cada um
              cadastrasse produtos para compra diretamente pelo aplicativo.
            </p>

            <p>
              <strong>Sistema de pontuação,</strong>
              onde os visitantes acumulavam pontos ao participar da feira e
              assistir palestras, por meio da leitura de QR Codes. Esses pontos
              podiam ser trocados por brindes posteriormente.
            </p>
          </div>

          <div className={styled.containerParagraph}>
            <h2>Infraestrutura do projeto</h2>

            <p>
              <strong>Aplicativo mobile:</strong> React Native
            </p>

            <p>
              {" "}
              <strong>Back-end: </strong>
              NestJS
            </p>

            <p>
              <strong>Painel administrativo</strong> NextJS
            </p>
          </div>

          <div className={styled.containerParagraph}>
            <h2>Conclusão</h2>

            <p>
              Atualmente, o evento se chama Sicoob AgroShow e conta com ainda
              mais recursos em comparação à primeira edição. No entanto, tivemos
              a honra de estar presentes desde o início, contribuindo para o
              sucesso da Sicoob Agrotech.
            </p>
          </div>
        </section>

        <section className={styled.sectionRigth}>
          <Image
            className={styled.imageMobile}
            width={266.67}
            height={578}
            alt=""
            src={
              "https://montanarisoftimages.s3.us-east-2.amazonaws.com/agrotech/Login.png"
            }
          />

          <Image
            className={styled.imageMobile}
            width={266.67}
            height={578}
            alt=""
            src={
              "https://montanarisoftimages.s3.us-east-2.amazonaws.com/agrotech/Telahome.png"
            }
          />

          <Image
            className={styled.imageMobile}
            width={266.67}
            height={578}
            alt=""
            src={
              "https://montanarisoftimages.s3.us-east-2.amazonaws.com/agrotech/Tela4Expositores.png"
            }
          />
          <Image
            className={styled.imageMobile}
            width={266.67}
            height={578}
            alt=""
            src={
              "https://montanarisoftimages.s3.us-east-2.amazonaws.com/agrotech/Tela5ExpositoresDetalhes.png"
            }
          />
        </section>
      </main>

      <section className={styled.sectionGaleria}>
        <h1>Galeria</h1>
      </section>
      <Footer />
    </div>
  );
}
