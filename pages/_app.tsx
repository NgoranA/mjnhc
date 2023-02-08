import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import { SessionProvider } from "next-auth/react";

config.autoAddCss = false;
// preload fonts for the project
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <main className={`${roboto.className} `}>
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </SessionProvider>
  );
}
