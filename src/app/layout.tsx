import { AcuminLocalFont } from "@/assets/fonts";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Montanari Soft",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={AcuminLocalFont.className}>{children}</body>
    </html>
  );
}
