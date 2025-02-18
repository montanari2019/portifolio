import type { Metadata } from "next";
import "../../styles/globals.css";
import { asap } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Montanari Soft Project details",
  description:
    "A Montanari Soft é uma empresa especializada em soluções tecnológicas inovadoras, oferecendo desenvolvimento de software, integração de APIs e análise de dados com foco em eficiência e qualidade.",
  keywords:
    "Montanari Soft, desenvolvimento de software, integração de APIs, análise de dados, soluções tecnológicas, inovação, eficiência",
  openGraph: {
    title: "Montanari Soft Project details",
    description:
      "A Montanari Soft é uma empresa especializada em soluções tecnológicas inovadoras, oferecendo desenvolvimento de software, integração de APIs e análise de dados com foco em eficiência e qualidade.",
    type: "website",
    url: "https://montanarisoft.com.br/",
  },
};

export default function RootProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={asap.className}>{children}</body>
    </html>
  );
}
