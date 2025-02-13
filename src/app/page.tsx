import { AboutScreens } from "@/screens/About";
import { Experience } from "@/screens/Experience";
import { Footer } from "@/screens/Footer";
import { HomeScreens } from "@/screens/Home";
import { Portifolio } from "@/screens/Portifolio";

export default function Home() {
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* <div className={styled.elipse}></div> */}
      {/* <Header /> */}

      <HomeScreens />

      <AboutScreens />
      <Portifolio />

      <Experience />

      <Footer />
    </main>
  );
}
