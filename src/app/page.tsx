import { Header } from "@/components/header/header";
import { AboutScreens } from "@/screens/About";
import { HomeScreens } from "@/screens/Home";
import Image from "next/image";


export default function Home() {
  return (
   <main style={{width: "100%", }}>
      <Header/>

      <HomeScreens/>
      <AboutScreens/>
   </main>
  );
}
