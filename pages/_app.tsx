import "@/styles/global.css";
import type { AppProps } from "next/app";
import { StrictMode } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
}
