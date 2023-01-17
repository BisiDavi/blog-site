import Providerlayout from "@/layout/Providerlayout";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providerlayout>
      <Component {...pageProps} />
    </Providerlayout>
  );
}
