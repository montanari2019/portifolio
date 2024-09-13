import { Header } from "@/components/header/header";
import { AboutScreens } from "@/screens/About";
import { Experience } from "@/screens/Experience";
import { HomeScreens } from "@/screens/Home";
import { Portifolio } from "@/screens/Portifolio";
import Image from "next/image";


export default function Home() {
  return (
   <main style={{width: "100%", display: 'flex', flexDirection:'column'}}>
      <Header/>

      <HomeScreens/>


      <AboutScreens/>
      <Portifolio/>

      <Experience/>
     

   </main>
  );
}
