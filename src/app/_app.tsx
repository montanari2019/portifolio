import "reflect-metadata"; // Import the reflect-metadata polyfill
import { AppProps } from "next/app";
import { DIConfig } from "@/config/di";

console.log("foi")
DIConfig.config();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
