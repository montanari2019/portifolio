import { Asap, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import AcuminBold from "./fonts/Acumin-BdPro.otf";
import AcuminRegular from "./fonts/Acumin-RPro.otf";

export const asap = Asap({
  subsets: ["latin"],
  display: "swap",
});

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const AcuminLocalFont = localFont({
  src: [
    {
      path: "./fonts/Acumin-RPro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Acumin-BdPro.otf",
      weight: "700",
      style: "bold",
    },
  ],
});
