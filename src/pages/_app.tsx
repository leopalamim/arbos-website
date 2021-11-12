/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import type { AppProps } from "next/app";
import { Header } from "@atomic/org.header";
import { Footer } from "@atomic/org.footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { AppWrapper } from "@app/modules/app/app.component.style";
import { GlobalsWrapper } from "@app/modules/components/globals-wrapper.component";
import { GlobalStore } from "@app/core/global-store.service";
import { useHideOverflowStore } from "@app/providers/hide.overflow.store";
import { useFlashStore } from "app/providers/flash.message.store";
import { ApolloProvider } from "@apollo/client";
import { client } from "app/core/graphql/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  const [logged, setLogged] = useState<boolean>();

  const router = useRouter();
  const isLogged = parseCookies()?.jwt ? true : false;

  useEffect(() => {
    if (isLogged) {
      setLogged(isLogged);
    }
  }, [isLogged]);
  return (
    <AppWrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Belleza&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ApolloProvider client={client}>
        <GlobalStore stores={[useFlashStore, useHideOverflowStore]}>
          <GlobalsWrapper>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </GlobalsWrapper>
        </GlobalStore>
      </ApolloProvider>
    </AppWrapper>
  );
}
export default MyApp;
