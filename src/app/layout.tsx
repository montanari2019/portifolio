import { AcuminLocalFont } from "@/assets/fonts";
import type { Metadata } from "next";
import "../styles/globals.css";
import favicon from "./favicon.ico";
import image from "@/assets/imagens/profile_IM.png";

export const metadata: Metadata = {
  title: "Montanari Soft",
  icons: {
    icon: favicon.src, // Caminho para o favicon
    apple: favicon.src, // Ícone para dispositivos Apple (iPhone, iPad)
  },
  description:
    "A Montanari Soft é uma empresa especializada em soluções tecnológicas inovadoras, oferecendo desenvolvimento de software, integração de APIs e análise de dados com foco em eficiência e qualidade.",
  keywords:
    "Montanari Soft, desenvolvimento de software, integração de APIs, análise de dados, soluções tecnológicas, inovação, eficiência",
  openGraph: {
    title: "Montanari Soft",
    description:
      "A Montanari Soft é uma empresa especializada em soluções tecnológicas inovadoras, oferecendo desenvolvimento de software, integração de APIs e análise de dados com foco em eficiência e qualidade.",
    type: "website",
    url: "https://montanarisoft.com.br/",
    siteName: "Montanari Soft",
    emails: "montanarisoftoficial@gmail.com",
    phoneNumbers: "69993569547",
    images: [image.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} sizes="any" />
      </head>
      <body className={AcuminLocalFont.className}>{children}</body>
    </html>
  );
}
