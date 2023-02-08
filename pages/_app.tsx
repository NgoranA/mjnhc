import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { Ubuntu } from "@next/font/google";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import { SessionProvider } from "next-auth/react";
import { Red_Hat_Display } from "@next/font/google";

config.autoAddCss = false;
// preload fonts for the project

const rhd = Red_Hat_Display({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  style: "normal",
  variable: "--red-hat-dispay",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <main className={`${rhd.className} `}>
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </SessionProvider>
  );
}
