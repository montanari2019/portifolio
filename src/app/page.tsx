import { Header } from "@/presentation/components/header/header";
import { AboutScreens } from "@/presentation/screens/About";
import { HomeScreens } from "@/presentation/screens/Home";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      <Header />

      <HomeScreens />
      <AboutScreens />
    </main>
  );
}
